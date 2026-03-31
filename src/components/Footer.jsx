import { Link } from 'react-router-dom'

const services = [
  { name: '家族传承', path: '/services/family' },
  { name: '企业二代特训营', path: '/services/training' },
  { name: '企业二代变形记', path: '/services/transformation' },
]

const links = [
  { name: '关于我们', path: '/about' },
  { name: '动态博客', path: '/blog' },
  { name: '联系咨询', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-nx-dark text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="6" fill="#1B4332"/>
              <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle"
                fill="#C9A84C" fontSize="18" fontFamily="serif" fontWeight="700">念</text>
            </svg>
            <div>
              <div className="font-serif font-bold text-xl">念信</div>
              <div className="text-xs text-gray-500 tracking-widest">NIANXIN</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            专注家族传承规划与企业二代培养，<br/>
            帮助中国家族企业实现代际领导力升级。
          </p>
          <div className="text-xs text-gray-600">
            © {new Date().getFullYear()} 广州念信企业管理咨询有限公司
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-medium text-nx-gold tracking-widest uppercase mb-4">核心业务</h4>
          <ul className="space-y-3">
            {services.map(s => (
              <li key={s.path}>
                <Link to={s.path} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-medium text-nx-gold tracking-widest uppercase mb-4">快速链接</h4>
          <ul className="space-y-3">
            {links.map(l => (
              <li key={l.path}>
                <Link to={l.path} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-medium text-nx-gold tracking-widest uppercase mb-4">联系我们</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-nx-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>广州市天河区珠江新城</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0 text-nx-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>contact@nxceo.com</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0 text-nx-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>020-8888-8888</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-600">
            广州念信企业管理咨询有限公司 · 专注家族传承与二代培养
          </p>
          <p className="text-xs text-gray-600">粤ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  )
}
