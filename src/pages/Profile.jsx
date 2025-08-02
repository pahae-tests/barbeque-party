import React, { useState, useEffect } from 'react';
import Header from './Header';
import { verifyAuth } from "../middlewares/auth";
import { actors } from "@/cte.js";
import { Trash, Trash2 } from 'lucide-react';

const UserAudiosPage = ({ session }) => {
    const [audios, setAudios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAudios()
    }, [session._id]);

    const fetchAudios = async () => {
        try {
            const response = await fetch(`/api/getOne?userID=${session._id}`);
            if (response.ok) {
                const data = await response.json();
                setAudios(data.audios);
                console.log(data);
            } else {
                console.error('Failed to fetch audios');
            }
        } catch (error) {
            console.error('Error fetching audios:', error);
        } finally {
            setLoading(false);
        }
    };

    const getActorById = (actorId) => {
        return actors.find(actor => actor.id === actorId);
    };

    const handleDelete = async (applyID) => {
        try {
            const response = await fetch('/api/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userID: session._id, applyID
                }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                alert('تم مسح الصوت بنجاح 👌');
                fetchAudios();
            } else {
                const error = await response.json();
                console.error('Error:', error);
                alert(error.message || 'حدث خطء في الاتصال يا صديقي 😢');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('حدث خطء في الاتصال يا صديقي 😢');
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-white text-xl">جاري التحميل...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900" dir="rtl">
            <Header session={session} />
            <main className="relative pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl p-4 font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
                            تسجيلاتي الصوتية
                        </h1>
                        <p className="text-gray-400 text-lg">
                            {audios.length} تسجيل{audios.length !== 1 ? 'ات' : ''} موجود{audios.length !== 1 ? 'ة' : ''}
                        </p>
                    </div>

                    {audios.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🎙️</div>
                            <h2 className="text-2xl font-bold text-white mb-2">لا يوجد تسجيلات</h2>
                            <p className="text-gray-400">لم تقم بأي تسجيلات صوتية حتى الآن.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {audios.map((audio, index) => {
                                const actor = getActorById(audio.actor);

                                return (
                                    <div
                                        key={index}
                                        className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                                    >
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                    💖
                                                </div>
                                                <h3 className="mr-2 text-xl font-bold text-white">
                                                    تسجيل {index + 1}
                                                </h3>
                                            </div>
                                            <button onClick={() => handleDelete(audio._id)} className="text-white hover:bg-amber-400 rounded-full p-2">
                                                <Trash className="font-bold text-xl" />
                                            </button>
                                        </div>
                                        {actor ? (
                                            <div className="mb-6 p-4 bg-gray-900/50 rounded-xl border border-gray-700/30">
                                                <div className="flex items-center space-x-4">
                                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600 flex-shrink-0">
                                                        <img
                                                            src={actor.img + '.jpg'}
                                                            alt={actor.name.en}
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                e.target.src = '/placeholder-avatar.png';
                                                            }}
                                                        />
                                                    </div>

                                                    <div className="mr-2 flex-1 min-w-0">
                                                        <h4 className="text-lg font-semibold text-white mb-1 truncate">
                                                            {actor.name.ar}
                                                        </h4>
                                                        <p className="text-sm text-blue-400 mb-1">
                                                            {actor.name.en}
                                                        </p>
                                                        <div className="flex gap-2 items-center text-xs text-gray-400">
                                                            <span className="flex gap-1 items-center">
                                                                <span>👤</span>
                                                                <span>{actor.sex}</span>
                                                            </span>
                                                            <span className="flex gap-1 items-center">
                                                                <span>🎭</span>
                                                                <span>{actor.role}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-3 pt-3 border-t border-gray-700/30">
                                                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                                                        <div className="flex gap-1 items-center space-x-1">
                                                            <span>🎂</span>
                                                            <span>{actor.age} سنوات</span>
                                                        </div>
                                                        <div className="flex gap-1 items-center space-x-1">
                                                            <span>🎵</span>
                                                            <span>صوت {actor.voice}</span>
                                                        </div>
                                                    </div>
                                                    {actor.personality && actor.personality.length > 0 && (
                                                        <div className="mt-2 flex flex-wrap gap-1">
                                                            {actor.personality.map((trait, i) => (
                                                                <span
                                                                    key={i}
                                                                    className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                                                                >
                                                                    {trait}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="mb-6 p-4 bg-red-900/20 rounded-xl border border-red-700/30">
                                                <p className="text-red-400 text-sm">
                                                    ⚠️ الممثل غير موجود (الرقم التعريفي: {audio.actor})
                                                </p>
                                            </div>
                                        )}

                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium text-gray-300">
                                                    مشغل الصوت
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    WAV
                                                </span>
                                            </div>

                                            <div className="relative">
                                                <audio
                                                    controls
                                                    className="w-full h-12 rounded-lg bg-gray-900/80 border border-gray-700/50 focus:outline-none focus:border-blue-500/50"
                                                    style={{
                                                        filter: 'sepia(0) saturate(1) hue-rotate(200deg) brightness(1.2) contrast(1.1)'
                                                    }}
                                                >
                                                    <source src={`data:audio/wav;base64,${audio.aud}`} type="audio/wav" />
                                                    متصفحك لا يدعم عنصر الصوت.
                                                </audio>

                                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg pointer-events-none"></div>
                                            </div>

                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <span>الفورماط: WAV</span>
                                                <span>الجودة: HD</span>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default UserAudiosPage;

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