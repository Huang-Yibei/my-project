import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: '首页', path: '/' },
  { name: '业务介绍', path: '/services' },
  { name: '关于我们', path: '/about' },
  { name: '动态博客', path: '/blog' },
  { name: '联系咨询', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  const scrolled = isScrolled || !isHome

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="6" fill="#1B4332"/>
              <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle"
                fill="#C9A84C" fontSize="18" fontFamily="serif" fontWeight="700">念</text>
            </svg>
          </div>
          <div>
            <div className={`font-serif font-bold text-xl tracking-wide transition-colors ${
              scrolled ? 'text-nx-green' : 'text-white'
            }`}>念信</div>
            <div className={`text-xs transition-colors ${scrolled ? 'text-gray-400' : 'text-white/70'}`}>
              NIANXIN
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors relative group ${
                scrolled ? 'text-gray-600 hover:text-nx-green' : 'text-white/90 hover:text-white'
              } ${location.pathname === link.path ? (scrolled ? 'text-nx-green' : 'text-white') : ''}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                scrolled ? 'bg-nx-green w-full' : 'bg-white w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-sm !px-5 !py-2.5">
            立即咨询
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 ${scrolled ? 'text-nx-green' : 'text-white'}`}
          onClick={() => setIsMobileOpen(v => !v)}
          aria-label="菜单"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"/>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isMobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/98 backdrop-blur-md border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-3 text-base font-medium border-b border-gray-50 last:border-0 ${
                location.pathname === link.path ? 'text-nx-green' : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-center mt-2 !py-2.5">
            立即咨询
          </Link>
        </div>
      </div>
    </nav>
  )
}
