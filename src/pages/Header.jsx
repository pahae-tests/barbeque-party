import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LogOut, Menu, X } from 'lucide-react';
import { useRouter } from 'next/router';

export default function Header({ session }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter()

  function logout() {
    fetch('/api/+logout', { method: 'POST' }).then(res => res.json()).then(data => window.location.reload()).catch(err => alert(err))
  }

  return (
    <header dir='ltr' className="fixed top-0 left-0 w-full h-16 bg-black/80 backdrop-blur-xl border-b border-gray-800/50 z-50">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
          Barbeque Party <span className='text-white'>🔥 حفلة الشواء</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {session && <Link href="/" className={`${router.pathname === '/' ? 'text-red-400 font-bold' : 'text-white'} hover:text-red-400 transition-colors duration-200`}>الرئيسية</Link>}
          {session && <Link href="/Profile" className={`${router.pathname === '/Profile' ? 'text-red-400 font-bold' : 'text-white'} hover:text-red-400 transition-colors duration-200`}>اختياراتي</Link>}
          <Link href="/About" className={`${router.pathname === '/About' ? 'text-red-400 font-bold' : 'text-white'} hover:text-red-400 transition-colors duration-200`}>معلومات</Link>
          <Link href="/Contact" className={`${router.pathname === '/Contact' ? 'text-red-400 font-bold' : 'text-white'} hover:text-red-400 transition-colors duration-200`}>أسئلة</Link>
          {session &&
            <button onClick={logout} className='bg-red-700 hover:bg-red-800 duration-200 text-white font-bold px-2 py-1 rounded-xl flex justify-center items-center gap-2'>
              Logout<LogOut />
            </button>
          }
        </nav>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-gray-800/50 px-4 py-4 flex flex-col justify-center items-center gap-4">
          {session && <Link href="/" className={`${router.pathname === '/' ? 'text-red-400 font-bold' : 'text-white'} hover:text-red-400 transition-colors duration-200`}>الرئيسية</Link>}
          {session && <Link href="/Profile" className={`${router.pathname === '/Profile' ? 'text-red-400 font-bold' : 'text-white'} hover:text-red-400 transition-colors duration-200`}>اختياراتي</Link>}
          <Link href="/About" className={`${router.pathname === '/About' ? 'text-red-400 font-bold' : 'text-white'} hover:text-red-400 transition-colors duration-200`}>معلومات</Link>
          <Link href="/Contact" className={`${router.pathname === '/Contact' ? 'text-red-400 font-bold' : 'text-white'} hover:text-red-400 transition-colors duration-200`}>أسئلة</Link>
          {session &&
            <button onClick={logout} className='bg-red-700 hover:bg-red-800 duration-200 text-white font-bold px-2 py-1 rounded-xl flex justify-center items-center gap-2'>
              Logout<LogOut />
            </button>
          }
        </div>
      )}
    </header>
  );
}