import React from 'react';
import { Facebook, Instagram, AlertTriangle, Shield, BookOpen, Users, Heart, Droplets } from 'lucide-react';
import Header from './Header';
import Link from 'next/link';
import { verifyAuth } from "../middlewares/auth";

const About = ({ session }) => {
  const contentRatings = [
    { label: "مشاهد غير لائقة", status: "غير موجود", color: "text-green-400", bgColor: "bg-green-500/20" },
    { label: "مخدرات / كحول", status: "غير موجود", color: "text-green-400", bgColor: "bg-green-500/20" },
    { label: "مشاهد دموية", status: "شديد", color: "text-red-400", bgColor: "bg-red-500/20" },
    { label: "مواضيع دينية", status: "غير موجود", color: "text-green-400", bgColor: "bg-green-500/20" },
    { label: "مشاهد رومانسية", status: "خفيف", color: "text-yellow-400", bgColor: "bg-yellow-500/20" }
  ];

  const socialLinks = [
    { platform: "Facebook", handle: "Pahae Attackontitan", icon: Facebook, color: "text-blue-400", path: "https://www.facebook.com/iory.71" },
    { platform: "Instagram", handle: "@pahae_map9apaghiwalo", icon: Instagram, color: "text-pink-400", path: "https://www.instagram.com/pahae_map9apaghiwalo" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Particules d'arrière-plan */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <Header session={session} />

      {/* Main Content */}
      <main className="relative pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              BARBEQUE <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">PARTY</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-8" dir="rtl">
              حفلة الشواء
            </h2>
          </div>

          {/* Social Media Section */}
          <div className="mb-16">
            <div className="bg-gray-900/30 backdrop-blur-xl rounded-3xl border border-gray-800/50 p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <Users className="text-red-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-white">راسلني على</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {socialLinks.map((social, index) => (
                  <Link href={social.path} target='_blank' key={index} className="flex items-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <social.icon className={`${social.color} ml-4`} size={24} />
                    <div className="text-right flex-1">
                      <p className="text-gray-300 text-sm">{social.platform}</p>
                      <p className="text-white font-medium">{social.handle}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-gray-800/50 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>&copy; 2025 Barbeque Party. جميع الحقوق محفوظة.</p>
          <p className="mt-2 text-sm">قصة من الخيال، أي تشابه مع الواقع هو محض صدفة</p>
        </div>
      </footer>
    </div>
  );
};

export default About;

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