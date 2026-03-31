import { useState } from 'react'

const services = ['家族传承', '企业二代特训营', '企业二代变形记', '不确定，想先聊聊']

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-nx-green overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 left-10 w-72 h-72 border border-white/20 rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="text-nx-gold text-sm tracking-[0.3em] uppercase mb-4">CONTACT</div>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white mb-6">联系咨询</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            无论是初步了解还是有明确需求，我们都期待与您对话。
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-nx-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Form */}
          <div className="bg-white rounded-sm p-8 md:p-10 shadow-sm">
            {!submitted ? (
              <>
                <h2 className="font-serif text-2xl font-semibold text-nx-green mb-2">预约免费咨询</h2>
                <p className="text-gray-400 text-sm mb-8">我们的顾问将在1个工作日内与您联系</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">您的姓名 *</label>
                    <input
                      type="text"
                      required
                      placeholder="请输入您的姓名"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-nx-green transition-colors bg-gray-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">联系电话 *</label>
                    <input
                      type="tel"
                      required
                      placeholder="方便我们与您联系"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-nx-green transition-colors bg-gray-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">感兴趣的业务</label>
                    <select
                      value={form.service}
                      onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-nx-green transition-colors bg-gray-50 focus:bg-white text-gray-500"
                    >
                      <option value="">请选择（可选）</option>
                      {services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">留言</label>
                    <textarea
                      rows={4}
                      placeholder="您可以简单描述一下您的情况或想了解的问题"
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-nx-green transition-colors bg-gray-50 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary justify-center !py-4 disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        提交中...
                      </span>
                    ) : '提交咨询'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-nx-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-nx-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-nx-green mb-3">提交成功！</h3>
                <p className="text-gray-400 mb-6">
                  感谢您的咨询，顾问将在 <strong className="text-nx-green">1个工作日内</strong> 与您联系。
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', service: '', message: '' }) }}
                  className="btn-outline text-sm"
                >
                  继续咨询其他问题
                </button>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-nx-green mb-6">找到我们</h2>
              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    ),
                    title: '地址',
                    content: '广州市天河区珠江新城花城大道68号<br/>IFC国际都会广场2808室',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    ),
                    title: '邮箱',
                    content: 'contact@nxceo.com',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    ),
                    title: '电话',
                    content: '020-8888-8888',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    ),
                    title: '工作时间',
                    content: '周一至周五 9:00 - 18:00<br/>周六需提前预约',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-nx-green/5 rounded-sm flex items-center justify-center text-nx-green flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-0.5">{item.title}</div>
                      <div className="text-gray-400 text-sm" dangerouslySetInnerHTML={{ __html: item.content }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-100 rounded-sm h-56 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-8 h-8 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                <p className="text-sm">珠江新城 · IFC国际都会广场</p>
              </div>
            </div>

            {/* Quick info */}
            <div className="bg-nx-green/5 rounded-sm p-6 border border-nx-green/10">
              <h4 className="font-serif font-semibold text-nx-green mb-3">初次咨询免费</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                首次30分钟的电话咨询完全免费。我们的顾问会根据您的具体情况，判断念信的服务是否适合您，绝无硬性推销。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
