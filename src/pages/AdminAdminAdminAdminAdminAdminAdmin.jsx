import React, { useState, useEffect } from 'react';
import Header from './Header';
import { actors } from "@/cte.js";
import { Trash2 } from 'lucide-react';
import { verifyAuth } from "../middlewares/auth";

const AdminUsersPage = ({ session }) => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [expandedUsers, setExpandedUsers] = useState(new Set());

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/getAll');
        if (response.ok) {
          const data = await response.json();
          setUsers(data.users);
          console.log(data);
        } else {
          console.error('Failed to fetch users');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Fonction pour récupérer les infos de l'acteur par ID
  const getActorById = (actorId) => {
    return actors.find(actor => actor.id === actorId);
  };

  // Fonction pour basculer l'affichage des audios d'un utilisateur
  const toggleUserExpansion = (userId) => {
    const newExpanded = new Set(expandedUsers);
    if (newExpanded.has(userId)) {
      newExpanded.delete(userId);
    } else {
      newExpanded.add(userId);
    }
    setExpandedUsers(newExpanded);
  };

  // Calculer les statistiques
  const totalUsers = users.length;
  const totalAudios = users.reduce((total, user) => total + (user.applies?.length || 0), 0);
  const usersWithAudios = users.filter(user => user.applies && user.applies.length > 0).length;

  const handleDelete = async (id) => {
    fetch(`/api/+drop?id=${id}`, { method: 'DELETE' }).then(res => res.json()).then(data => alert('Deleted !')).catch(err => { alert(err); console.log(alert('err:' + err)) })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-white text-xl">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header session={session} />
      <main className="relative pt-24 pb-16">
        <div className="container mx-auto px-4 flex items-center flex-col">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text text-transparent mb-4">
              Administration
            </h1>
            <div className="flex justify-center space-x-8 text-lg">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">{totalUsers}</p>
                <p className="text-gray-400">Utilisateurs</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-400">{usersWithAudios}</p>
                <p className="text-gray-400">Avec audios</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">{totalAudios}</p>
                <p className="text-gray-400">Total audios</p>
              </div>
            </div>
          </div>

          <button className="px-2 py-1 bg-red-600 rounded-xl mb-4" onClick={() => setFiltered(e => !e)}>{filtered ? 'Reset' : 'Filter'}</button>
          
          {users.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">👥</div>
              <h2 className="text-2xl font-bold text-white mb-2">Aucun utilisateur</h2>
              <p className="text-gray-400">Aucun utilisateur trouvé dans la base de données.</p>
            </div>
          ) : (
            <div className="space-y-6 w-full md:w-3/4">
              {(filtered ? users.filter(user => user.applies.length > 0) : users).map((user) => {
                const hasAudios = user.applies && user.applies.length > 0;
                const isExpanded = expandedUsers.has(user._id);
                
                return (
                  <div 
                    key={user._id} 
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
                  >
                    <div onClick={() => handleDelete(user._id)} className='fixed top-0 left-0 bg-amber-400 hover:bg-amber-500 duration-200 text-white font-bold p-1 cursor-pointer rounded-md'>
                      <Trash2 />
                    </div>
                    {/* Header utilisateur */}
                    <div 
                      className="p-6 cursor-pointer hover:bg-gray-800/30 transition-colors duration-200"
                      onClick={() => toggleUserExpansion(user._id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {user.name?.charAt(0).toUpperCase() || '?'}
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-white">{user.name || 'Nom non défini'}</h2>
                            <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                              <span>📧 {user.email || 'Email non défini'}</span>
                              <span>📞 {user.tel || 'Tel non défini'}</span>
                              <span>👤 {user.sex || 'Sexe non défini'}</span>
                              <span>🎂 {user.age || 'Age non défini'} ans</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-blue-400">{user.applies?.length || 0}</p>
                            <p className="text-xs text-gray-400">Audios</p>
                          </div>
                          <div className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section audios (expandable) */}
                    {isExpanded && (
                      <div className="border-t border-gray-700/30 bg-gray-900/20">
                        {hasAudios ? (
                          <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                              <span className="mr-2">🎵</span>
                              Enregistrements Audio ({user.applies.length})
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {user.applies.map((audio, index) => {
                                const actor = getActorById(audio.actor);
                                
                                return (
                                  <div 
                                    key={index} 
                                    className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02]"
                                  >
                                    {/* Header avec numéro d'enregistrement */}
                                    <div className="flex items-center justify-between mb-6">
                                      <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                          {index + 1}
                                        </div>
                                        <h4 className="text-xl font-bold text-white">
                                          Enregistrement {index + 1}
                                        </h4>
                                      </div>
                                      <div className="text-gray-400 text-sm">
                                        🎵
                                      </div>
                                    </div>

                                    {/* Informations de l'acteur */}
                                    {actor ? (
                                      <div className="mb-6 p-4 bg-gray-900/50 rounded-xl border border-gray-700/30">
                                        <div className="flex items-center space-x-4">
                                          {/* Image de l'acteur */}
                                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600 flex-shrink-0">
                                            <img 
                                              src={actor.img + '.jpg'} 
                                              alt={actor.name.en}
                                              className="w-full h-full object-cover"
                                              onError={(e) => {
                                                e.target.src = '/placeholder-avatar.png'; // Image de fallback
                                              }}
                                            />
                                          </div>
                                          
                                          {/* Détails de l'acteur */}
                                          <div className="flex-1 min-w-0">
                                            <h5 className="text-lg font-semibold text-white mb-1 truncate">
                                              {actor.name.ar}
                                            </h5>
                                            <p className="text-sm text-blue-400 mb-1">
                                              {actor.name.en}
                                            </p>
                                            <div className="flex items-center space-x-3 text-xs text-gray-400">
                                              <span className="flex items-center space-x-1">
                                                <span>👤</span>
                                                <span>{actor.sex}</span>
                                              </span>
                                              <span className="flex items-center space-x-1">
                                                <span>🎭</span>
                                                <span>{actor.role}</span>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        
                                        {/* Informations supplémentaires */}
                                        <div className="mt-3 pt-3 border-t border-gray-700/30">
                                          <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                                            <div className="flex items-center space-x-1">
                                              <span>🎂</span>
                                              <span>{actor.age} ans</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                              <span>🎵</span>
                                              <span>Voix {actor.voice}</span>
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
                                          ⚠️ Acteur non trouvé (ID: {audio.actor})
                                        </p>
                                      </div>
                                    )}

                                    {/* Lecteur audio amélioré */}
                                    <div className="space-y-3">
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-300">
                                          Lecteur Audio
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
                                          Votre navigateur ne supporte pas l'élément audio.
                                        </audio>
                                        
                                        {/* Overlay décoratif */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg pointer-events-none"></div>
                                      </div>
                                      
                                      {/* Métadonnées */}
                                      <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>Format: WAV</span>
                                        <span>Qualité: HD</span>
                                      </div>
                                    </div>

                                    {/* Effet de hover sur toute la carte */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          <div className="p-6 text-center">
                            <div className="text-4xl mb-3">🎙️</div>
                            <p className="text-gray-400">Cet utilisateur n'a pas encore d'enregistrements audio.</p>
                          </div>
                        )}
                      </div>
                    )}
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

export default AdminUsersPage;

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
