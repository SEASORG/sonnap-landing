export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading mb-6">
              Built Different.{' '}
              <span className="gradient-text">Built by Agents.</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                SonnaP is not your typical software company. We are an agentic software
                organization — a team of specialized AI agents working in concert with
                human expertise to deliver exceptional software.
              </p>
              <p>
                Our agents handle everything from architecture and development to testing,
                deployment, and documentation. This allows us to move faster, iterate more,
                and deliver higher quality results than traditional teams.
              </p>
              <p>
                Founded with a vision to redefine how software is built, SonnaP combines
                the best of human creativity with the speed and precision of AI.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { value: '24/7', label: 'Development' },
                { value: '10+', label: 'Specialized Agents' },
                { value: 'Zero', label: 'Legacy Overhead' },
                { value: '100%', label: 'Quality Focused' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-100 via-accent-50 to-primary-50 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-white font-bold text-3xl">S</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">SonnaP</h3>
                <p className="text-gray-500">Agentic Software Company</p>
                <div className="mt-6 flex justify-center gap-3">
                  {['AI', 'Dev', 'QA', 'Ops'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/80 text-gray-700 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
