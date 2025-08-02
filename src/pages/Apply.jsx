import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Mic, MicOff, RotateCcw, Send } from 'lucide-react';
import { actors, clips, calculateSimilarity } from '@/cte'
import { useRouter } from 'next/router';
import Header from './Header';
import { verifyAuth } from "../middlewares/auth";

const Apply = ({ session }) => {
  const router = useRouter()
  const { id } = router.query
  const [actor, setActor] = useState({})
  const [clip, setClip] = useState({})
  const [canSend, setCanSend] = useState({ listened: false, matching: false })

  useEffect(() => {
    if (id) {
      setActor(actors.find(actor => actor.id == id) || {})
      setClip(clips.find(clip => clip.actor == id) || {})
      console.log(clips.find(clip => clip.actor == id) || {})
    }
  }, [id])

  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [audioURL, setAudioURL] = useState('');
  const [isPlayingRecording, setIsPlayingRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const recordingRef = useRef(null);
  const audioChunks = useRef([]);

  const speakJapanese = async () => {
    try {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(clip.text.jap);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
      } else {
        alert('واجهة برمجة التطبيقات الخاصة بتحليل النص غير متاحة في هذا المتصفح');
      }
    } catch (error) {
      console.error('خطأ أثناء قراءة النص:', error);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      audioChunks.current = [];
      recorder.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };
      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setRecordedAudio(audioBlob);
        setAudioURL(url);
        stream.getTracks().forEach(track => track.stop());
      };
      setMediaRecorder(recorder);
      recorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('خطأ في الوصول إلى الميكروفون:', error);
      alert('لا يمكن الوصول إلى الميكروفون');
    }
    // if (!(window.SpeechRecognition || window.webkitSpeechRecognition)) {
    //   alert("متصفحك لا يدعم SpeechRecognition")
    // }
    // const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
    // recognition.lang = "ja-JP"
    // recognition.start()
    // recognition.onresult = (event) => {
    //   setCanSend(prev => ({
    //     listened: event.results[0][0].transcript ? true : false,
    //     matching: calculateSimilarity(clip.text.jap, event.results[0][0].transcript)
    //   }))
    // }
    // recognition.onerror = (event) => alert("خطأ: " + event.error)
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const playRecording = () => {
    if (recordingRef.current) {
      if (isPlayingRecording) {
        recordingRef.current.pause();
        recordingRef.current.currentTime = 0;
      } else {
        recordingRef.current.play();
      }
      setIsPlayingRecording(!isPlayingRecording);
    }
  };

  const resetRecording = () => {
    setRecordedAudio(null);
    setAudioURL('');
    setIsPlayingRecording(false);
    if (recordingRef.current) {
      recordingRef.current.pause();
      recordingRef.current.currentTime = 0;
    }
  };

  const handleSubmit = async () => {
    if (recordedAudio
      // && canSend.listened && canSend.matching
      ) {
      try {
        const audioBase64 = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(recordedAudio);
          reader.onloadend = () => {
            const base64String = reader.result.split(',')[1];
            resolve(base64String);
          };
        });
        const response = await fetch('/api/apply', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userID: session._id,
            actor: id,
            aud: audioBase64,
          }),
        });
        if (response.ok) {
          const result = await response.json();
          console.log('نجاح:', result);
          alert('تمت إضافة الصوت بنجاح 😍');
        } else {
          const error = await response.json();
          console.error('خطأ:', error);
          alert(error.message || 'حدث خطأ في الاتصال يا صديقي 😢');
        }
      } catch (error) {
        console.error('خطأ:', error);
        alert('حدث خطأ في الاتصال يا صديقي 😢');
      }
    } else {
      alert('الصوت لا يطابق النص 😢');
    }
  };

  if (!actor.id) return <></>

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900" dir="rtl">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <Header session={session} />

      <main className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
              <div className="relative w-full md:w-1/3">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
                  <img
                    src={actor.img + '.jpg'}
                    alt={actor.name.ar}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {actor.name.ar}
                  </h1>
                  <p className="text-xl text-gray-400 mb-4">{actor.name.en}</p>
                  <p className="text-gray-300 leading-relaxed">{actor.bio}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4">
                      <h3 className="text-red-400 font-semibold mb-2">تفاصيل</h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-gray-400">العمر:</span> <span className="text-white">{actor.age} سنوات</span></p>
                        <p><span className="text-gray-400">الجنس:</span> <span className="text-white">{actor.sex}</span></p>
                        <p><span className="text-gray-400">الدور:</span> <span className="text-white">{actor.role}</span></p>
                        <p><span className="text-gray-400">الصوت:</span> <span className="text-white">{actor.voice}</span></p>
                        <p><span className="text-gray-400">وقت الظهور:</span> <span className="text-white">{actor.mins} دقيقة</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4">
                      <h3 className="text-red-400 font-semibold mb-3">الحلقات</h3>
                      <div className="flex flex-wrap gap-2">
                        {actor.eps.map((ep, index) => (
                          <span key={index} className="bg-red-600/80 text-white text-xs px-3 py-1 rounded-full">
                            {ep}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4">
                      <h3 className="text-red-400 font-semibold mb-3">الشخصية</h3>
                      <div className="flex flex-wrap gap-2">
                        {actor.personality.map((trait, index) => (
                          <span key={index} className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              ارسال المقطع الصوتي لتقييمه
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
              <div className="mb-8 space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <h3 className="text-2xl font-bold text-white ml-4">النص المطلوب</h3>
                    <button
                      onClick={speakJapanese}
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-all duration-200 hover:scale-110"
                      title="استمع للنطق"
                    >
                      <Volume2 size={20} />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* <div className="text-center p-4 bg-black/30 rounded-xl">
                    <h4 className="text-red-400 font-semibold mb-2">اليابانية</h4>
                    <p className="text-xl text-white font-japanese">{clip.text.jap}</p>
                  </div> */}
                  <div className="text-center p-4 bg-black/30 rounded-xl">
                    <h4 className="text-red-400 font-semibold mb-2">العربية</h4>
                    <p className="text-lg text-white" dir="rtl">{clip.text.arb}</p>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-xl">
                    <h4 className="text-red-400 font-semibold mb-2">رومانجي</h4>
                    <p className="text-lg text-white" dir="ltr">{clip.text.rom}</p>
                  </div>
                </div>
                <div className="text-center p-4 bg-pink-900/30 rounded-xl">
                  <h4 className="text-pink-400 font-semibold mb-2">السياق</h4>
                  <p className="text-white">
                    {clip.theme + '. '}
                    <mark className='bg-yellow-600 font-semibold px-2 py-1 rounded-xl'>قدم أفضل أداء لديك !</mark>
                  </p>
                </div>
                <hr className='border-b text-white' />
                <div className="text-center p-4 bg-green-900/30 rounded-xl">
                  <h4 className="text-green-400 font-semibold mb-2">تعليمات</h4>
                  <ul className="text-white">
                    <li className='m-1'>عندما تكون مستعدًا، ابدأ التسجيل باستخدام الزر أدناه</li>
                    <li className='m-1'>يمكنك الاستماع إلى صوتك عند الانتهاء، ثم إعادة التسجيل أو إرساله إلينا</li>
                    <li className='m-1'>بعد انتهاء مدة التصويت، سيتم إبلاغك بالنتيجة عبر البريد الإلكتروني</li>
                  </ul>
                </div>
                <div className="text-center p-4 bg-blue-900/30 rounded-xl">
                  <h4 className="text-blue-400 font-semibold mb-2">نصائح</h4>
                  <ul className="text-white">
                    <li className='m-1'>شاهد المشهد أولاً ثم حاول أداء الصوت مطابقًا للمشهد</li>
                    <li className='m-1'>قم بعدة محاولات حتى تتقنه</li>
                    <li className='m-1'>تفاعل مع المشهد (غير نبرة صوتك حسب الحزن أو الغضب...)</li>
                    <li className='m-1'>إتقانك لإيصال المشاعر هو المعيار الذي نتخذه لتقييم الأداء</li>
                  </ul>
                </div>
              </div>

              {/* <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  مقطع الفيديو
                </h2>
                <div className="max-w-4xl mx-auto">
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden">
                    <video
                      ref={vidRef}
                      src={clip.vid}
                      className="w-full aspect-video border-y-6 bg-red-500 shadow-2xl"
                      controls
                    />
                  </div>
                </div>
              </div> */}

              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">تسجيلك</h3>
                  {!recordedAudio ? (
                    <button
                      onClick={isRecording ? stopRecording : startRecording}
                      className={`${isRecording
                        ? 'bg-red-600 hover:bg-red-700 animate-pulse'
                        : 'bg-green-600 hover:bg-green-700'
                        } text-white rounded-full p-4 transition-all duration-200 hover:scale-110 mb-4`}
                    >
                      {isRecording ? <MicOff size={24} /> : <Mic size={24} />}
                    </button>
                  ) : (
                    <div className="flex gap-2 justify-center items-center mb-4">
                      <button
                        onClick={playRecording}
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-all duration-200 hover:scale-110"
                      >
                        {isPlayingRecording ? <Pause size={20} /> : <Play size={20} />}
                      </button>
                      <button
                        onClick={resetRecording}
                        className="bg-orange-600 hover:bg-orange-700 text-white rounded-full p-3 transition-all duration-200 hover:scale-110"
                        title="إعادة التسجيل"
                      >
                        <RotateCcw size={20} />
                      </button>
                    </div>
                  )}
                  {audioURL && (
                    <audio
                      ref={recordingRef}
                      src={audioURL}
                      onPlay={() => setIsPlayingRecording(true)}
                      onPause={() => setIsPlayingRecording(false)}
                      onEnded={() => setIsPlayingRecording(false)}
                      className="hidden"
                    />
                  )}
                  <p className="text-gray-400 text-sm mb-4">
                    {isRecording
                      ? 'جاري التسجيل... اضغط للإيقاف'
                      : recordedAudio
                        ? 'تم التسجيل! يمكنك الاستماع إليه أو إعادة التسجيل'
                        : 'اضغط للبدء في التسجيل'}
                  </p>
                </div>

                <div className="text-center">
                  <button
                    onClick={handleSubmit}
                    disabled={!recordedAudio}
                    className={`${recordedAudio
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600'
                      : 'bg-gray-600 cursor-not-allowed'
                      } text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 ${recordedAudio ? 'hover:scale-105' : ''
                      } flex items-center justify-center mx-auto`}
                  >
                    <Send size={20} className="ml-2" />
                    إرسال التسجيل
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Apply;

export async function getServerSideProps({ req, res }) {
  const user = verifyAuth(req, res);
  if (!user) {
    return {
      redirect: {
        destination: "/Login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session: {
        _id: user._id,
        name: user.name,
        email: user.email,
        sex: user.sex,
        age: user.age,
        tel: user.tel,
      }
    },
  };
}