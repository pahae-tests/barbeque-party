import { React, useState } from 'react';
import { actors } from '@/cte';
import Header from './Header';
import { verifyAuth } from "../middlewares/auth";
import { Lock, X } from 'lucide-react';

const ActorCard = ({ actor, session }) => {
  const [popup, setPopup] = useState(false)
  const [popupTxt, setPopupTxt] = useState('هذا الدور تم حجزه بالفعل !')

  const handleGo = () => {
    if (actor.taken) showPopup('هذا الدور تم حجزه بالفعل !')
    else if ((actor.sex === 'ذكر' ? 'male' : 'female') !== session.sex) showPopup(`هذا الدور محجوز للجنس '${actor.sex}'`)
    else window.location.href = `/Apply?id=${actor.id}`
  }

  const showPopup = (txt) => {
    setPopupTxt(txt)
    setPopup(true)
    setTimeout(() => setPopup(false), 1500)
  }

  return (
    <>
      <div className={`fixed top-0 left-0 w-full h-full ${!popup ? 'hidden' : ''} z-50 flex justify-center items-center`}>
        <div className="w-[90%] md:w-1/2 lg:w-1/3 h-32 bg-gray-900 rounded-3xl shadow-lg flex flex-col justify-center items-center gap-3">
          <div className="p-2 rounded-full bg-red-600 text-white font-extrabold animate-bounce cursor-pointer" onClick={() => setPopup(false)}>
            <X />
          </div>
          <p className="text-white font-bold">{popupTxt}</p>
        </div>
      </div>

      <div onClick={handleGo} className="cursor-pointer group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
        <div className="aspect-[3/4] overflow-hidden">
          {actor.taken &&
            <div className='bg-gray-900 text-white rounded-xl flex gap-2 justify-center items-center absolute top-0 p-3'>
              <Lock className='font-bold text-md' />
              تم الحجز
            </div>}
          <img
            src={`${actor.img}.jpg`}
            alt={actor.name.ar}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0">
            <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-md bg-black/30 border-t border-white/10">
              <div className="space-y-2 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100 text-right">
                <h3 className="font-bold text-lg text-yellow-400">{actor.name.en} / {actor.name.ar}</h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <p><span className="text-red-400 font-semibold">العمر:</span> {actor.age}</p>
                  <p><span className="text-red-400 font-semibold">الجنس:</span> {actor.sex}</p>
                  <p><span className="text-red-400 font-semibold">الدور:</span> {actor.role}</p>
                  <p><span className="text-red-400 font-semibold">الصوت:</span> {actor.voice}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-red-400 text-xs font-semibold">الحلقات:</p>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {actor.eps.map((ep, index) => (
                      <span key={index} className="bg-red-600/80 text-white text-xs px-2 py-1 rounded-full">
                        {ep}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-red-400 text-xs font-semibold">الصفات:</p>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {actor.personality.map((trait, index) => (
                      <span key={index} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-xs"><span className="text-red-400 font-semibold">مجموع وقت الكلام:</span> {actor.mins} دقيقة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ActorSection = ({ title, actors, className, session }) => {
  return (
    <section className={`mb-16 ${className}`}>
      <div className="flex items-center mb-8">
        <div className="h-px bg-gradient-to-l from-transparent via-red-500 to-transparent flex-1"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mx-6 text-center bg-gradient-to-l from-red-400 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent flex-1"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {actors.map(actor => (
          <ActorCard key={actor.id} actor={actor} session={session} />
        ))}
      </div>
    </section>
  );
};

const Index = ({ session }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mainCharacters = actors.filter(actor => actor.class === 1);
  const importantCharacters = actors.filter(actor => actor.class === 2);
  const sideCharacters = actors.filter(actor => actor.class === 3);
  const oneTimeCharacters = actors.filter(actor => actor.class === 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900" dir="rtl">
      {/* Particles خلفية */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-red-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-pink-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <Header session={session} />

      {/* Main Content */}
      <main className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              تعرف على <span className="bg-gradient-to-l from-red-400 to-pink-500 bg-clip-text text-transparent">شخصيات العمل</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              اختر شخصية أو أكثر و قم بالأداء الصوتي و أرسله لنا
            </p>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              👈 مرر الماوس فوق شخصية لرؤية التفاصيل 👉
            </p>
          </div>

          {/* أقسام الممثلين */}
          <ActorSection
            title="الشخصيات الرئيسية"
            actors={mainCharacters}
            session={session}
          />

          <ActorSection
            title="الشخصيات المهمة"
            actors={importantCharacters}
            session={session}
          />

          <ActorSection
            title="الشخصيات الثانوية"
            actors={sideCharacters}
            session={session}
          />

          <ActorSection
            title="ظهورات فريدة"
            actors={oneTimeCharacters}
            session={session}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-gray-800/50 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>© 2025 حفلة الشواء. كل الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

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