import { React, useState } from 'react';
import Header from './Header';
import Link from 'next/link';
import { verifyAuth } from "../middlewares/auth";

const Register = ({ session }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        sex: '',
        age: '',
        tel: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'الاسم الكامل مطلوب';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'البريد الإلكتروني مطلوب';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'البريد الإلكتروني غير صحيح';
        }

        if (!formData.sex) {
            newErrors.sex = 'الجنس مطلوب';
        }

        if (!formData.age) {
            newErrors.age = 'العمر مطلوب';
        } else if (isNaN(formData.age) || formData.age < 1 || formData.age > 120) {
            newErrors.age = 'العمر يجب أن يكون رقماً صحيحاً بين 1 و 120';
        }

        if (!formData.tel.trim()) {
            newErrors.tel = 'رقم الهاتف مطلوب';
        }

        if (!formData.password) {
            newErrors.password = 'كلمة المرور مطلوبة';
        } else if (formData.password.length < 6) {
            newErrors.password = 'كلمة المرور يجب أن تكون على الأقل 6 أحرف';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/+register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.fullName,
                    email: formData.email,
                    sex: formData.sex === "ذكر" ? "male" : "female",
                    age: formData.age,
                    tel: formData.tel,
                    password: formData.password
                }),
            });
            console.log(response)

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to register');
            }

            const data = await response.json();
            console.log('Registration successful:', data);
            alert('تم إنشاء الحساب بنجاح!');
            window.location.href = '/';
        } catch (error) {
            console.error('Registration error:', error);
            alert(error.message || 'حدث خطأ أثناء إنشاء الحساب');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                <div className="container mx-auto px-4 w-full md:w-4/5">
                    {/* Hero Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            إنشاء <span className="bg-gradient-to-l from-red-400 to-pink-500 bg-clip-text text-transparent">حساب جديد</span>
                        </h1>
                        <p className="text-gray-400 text-lg">
                            انضم إلى مجتمعنا واستمتع بتجربة رائعة
                        </p>
                    </div>

                    {/* Registration Form */}
                    <div className="relative flex flex-col overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 p-8">
                        <form onSubmit={handleSubmit} className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* الاسم الكامل */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-semibold text-red-400 mb-2">
                                    الاسم الكامل
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/25 transition-all duration-300"
                                    placeholder="أدخل اسمك الكامل"
                                />
                                {errors.fullName && (
                                    <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
                                )}
                            </div>

                            {/* البريد الإلكتروني */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-red-400 mb-2">
                                    البريد الإلكتروني
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/25 transition-all duration-300"
                                    placeholder="أدخل بريدك الإلكتروني"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                                )}
                            </div>

                            {/* الجنس */}
                            <div>
                                <label htmlFor="sex" className="block text-sm font-semibold text-red-400 mb-2">
                                    الجنس
                                </label>
                                <select
                                    id="sex"
                                    name="sex"
                                    value={formData.sex}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/25 transition-all duration-300"
                                >
                                    <option value="">اختر الجنس</option>
                                    <option value="ذكر">ذكر</option>
                                    <option value="أنثى">أنثى</option>
                                </select>
                                {errors.sex && (
                                    <p className="mt-1 text-sm text-red-400">{errors.sex}</p>
                                )}
                            </div>

                            {/* العمر */}
                            <div>
                                <label htmlFor="age" className="block text-sm font-semibold text-red-400 mb-2">
                                    العمر
                                </label>
                                <input
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    min="1"
                                    max="120"
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/25 transition-all duration-300"
                                    placeholder="أدخل عمرك"
                                />
                                {errors.age && (
                                    <p className="mt-1 text-sm text-red-400">{errors.age}</p>
                                )}
                            </div>

                            {/* رقم الهاتف */}
                            <div>
                                <label htmlFor="tel" className="block text-sm font-semibold text-red-400 mb-2">
                                    رقم الهاتف
                                </label>
                                <input
                                    type="tel"
                                    id="tel"
                                    name="tel"
                                    value={formData.tel}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/25 transition-all duration-300"
                                    placeholder="أدخل رقم هاتفك"
                                />
                                {errors.tel && (
                                    <p className="mt-1 text-sm text-red-400">{errors.tel}</p>
                                )}
                            </div>

                            {/* كلمة المرور */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-semibold text-red-400 mb-2">
                                    كلمة المرور
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/25 transition-all duration-300"
                                    placeholder="أدخل كلمة المرور"
                                />
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-400">{errors.password}</p>
                                )}
                            </div>
                        </form>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="w-full md:w-1/2 self-center mt-16 md:mt-4 bg-gradient-to-l from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isSubmitting ? 'جاري إنشاء الحساب...' : 'إنشاء حساب'}
                        </button>

                        {/* Login Link */}
                        <div className="mt-6 text-center">
                            <p className="text-gray-400">
                                لديك حساب بالفعل؟{' '}
                                <Link
                                    href="/Login"
                                    className="text-red-400 hover:text-red-300 font-semibold transition-colors duration-300"
                                >
                                    تسجيل الدخول
                                </Link>
                            </p>
                        </div>
                    </div>
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

export default Register;

export async function getServerSideProps({ req, res }) {
  const user = verifyAuth(req, res);

  if (user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session: null },
  };
}