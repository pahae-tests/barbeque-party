import { React, useState } from 'react';
import Header from './Header';
import Link from 'next/link';
import { verifyAuth } from "../middlewares/auth";

const Login = ({ session }) => {
    const [formData, setFormData] = useState({
        email: '',
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

        if (!formData.email.trim()) {
            newErrors.email = 'البريد الإلكتروني مطلوب';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'البريد الإلكتروني غير صحيح';
        }

        if (!formData.password) {
            newErrors.password = 'كلمة المرور مطلوبة';
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
            const response = await fetch('/api/+login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                if (response.status === 400) {
                    alert(data.message || 'Invalid email or password');
                    return;
                } else if (response.status === 404) {
                    alert(data.message || 'Resource not found');
                    return;
                } else if (response.status === 500) {
                    alert(data.message || 'Something went wrong on the server');
                    return;
                } else {
                    alert(data.message || 'Failed to login');
                    return;
                }
            }

            console.log('Login successful:', data);
            alert('تم تسجيل الدخول بنجاح!');
            window.location.href = '/';
        } catch (error) {
            console.error('Login error:', error);
            alert(error.message || 'حدث خطأ أثناء تسجيل الدخول');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900" dir="rtl">
            {/* Background Particles */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-red-500/5 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-pink-500/5 to-transparent rounded-full blur-3xl"></div>
            </div>

            {/* Header */}
            <Header session={session} />

            {/* Main Content */}
            <main className="relative pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-md">
                    {/* Hero Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            تسجيل <span className="bg-gradient-to-l from-red-400 to-pink-500 bg-clip-text text-transparent">الدخول</span>
                        </h1>
                        <p className="text-gray-400 text-lg">
                            مرحبا بعودتك! يرجى تسجيل الدخول للمتابعة.
                        </p>
                    </div>

                    {/* Login Form */}
                    <div className="relative flex flex-col overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
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

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full mt-6 bg-gradient-to-l from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                            </button>

                            {/* Register Link */}
                            <div className="mt-6 text-center">
                                <p className="text-gray-400">
                                    ليس لديك حساب؟{' '}
                                    <Link
                                        href="/Register"
                                        className="text-red-400 hover:text-red-300 font-semibold transition-colors duration-300"
                                    >
                                        إنشاء حساب
                                    </Link>
                                </p>
                            </div>
                        </form>
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

export default Login;

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