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
                <h3 className="text-2xl font-bold text-white">تابعني على</h3>
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

          {/* Disclaimer Section */}
          <div className="mb-16">
            <div className="bg-yellow-900/20 backdrop-blur-xl rounded-3xl border border-yellow-500/30 p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <AlertTriangle className="text-yellow-400 ml-3" size={24} />
                <h3 className="text-2xl font-bold text-white">تنويه</h3>
              </div>
              <div className="text-gray-300 text-lg leading-relaxed text-right" dir="rtl">
                <p className="mb-4">
                  - الأسماء، الأماكن، الوقائع في أحداث هذه القصة قائمة على وحي الخيال. أي تشابه فهو من محض الصدفة
                </p>
                <p className="text-red-400 font-semibold">
                  - محتوى مصنف <span className="bg-red-500/20 px-2 py-1 rounded">18+</span>
                </p>
              </div>
            </div>
          </div>

          {/* Content Rating Section */}
          <div className="mb-16">
            <div className="bg-gray-900/30 backdrop-blur-xl rounded-3xl border border-gray-800/50 p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <Shield className="text-red-400 ml-3" size={24} />
                <h3 className="text-2xl font-bold text-white">تصنيف المحتوى</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contentRatings.map((rating, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${rating.bgColor} ${rating.color}`}>
                      {rating.status}
                    </span>
                    <span className="text-white text-right" dir="rtl">{rating.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-red-900/20 to-pink-900/20 backdrop-blur-xl rounded-3xl border border-red-500/30 p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <BookOpen className="text-red-400 ml-3" size={24} />
                <h3 className="text-2xl font-bold text-white">القصة</h3>
              </div>
              
              <div className="prose prose-invert max-w-none text-right" dir="rtl">
                <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                  <p className="text-xl font-medium text-red-300 mb-6">
                    في عالم يحيا تحت وطأة الحروب والدماء، حيث لا مكان للرحمة، وحيث الحقيقة تختبئ من خلف ستار المؤامرات المظلمة...
                  </p>
                  
                  <p>
                    تبدأ قصة درب محفوف بالندم وبنيران الانتقام في لحظة واحدة... ورجل واحد
                  </p>
                  
                  <div className="bg-black/30 rounded-2xl p-6 border border-red-500/20">
                    <p className="text-red-200 font-medium">
                      <span className="text-red-400 font-bold">رايموندو</span>، جندي تحطم عالمه بالكامل في تلك اللحظة، تلاشت الذكريات السعيدة في الضباب.
                    </p>
                  </div>
                  
                  <p>
                    ليجد نفسه بريئًا في معاناة الفقدان والتخبطات النفسية.
                  </p>
                  
                  <p className="text-yellow-300">
                    لكن شيئًا واحدًا كان واضحًا — هناك عدو في الظل، وهناك نار لن تنطفئ إلا بالحقيقة أو بالموت.
                  </p>
                  
                  <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 rounded-2xl p-6 border-l-4 border-red-500">
                    <p className="text-white font-medium text-xl">
                      هل سيتمكن رايموندو من الانتقام ممن أخذوا منه كل شيء... أم أنه سينهار تحت سقف الكآبة والعزلة؟
                    </p>
                  </div>
                </div>
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