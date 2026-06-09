const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn about your business, goals, and technical requirements through deep consultation.',
    color: 'bg-primary-500',
  },
  {
    number: '02',
    title: 'Architecture',
    description: 'Our Solution Architect designs the system, selects the stack, and plans the agent workflow.',
    color: 'bg-accent-500',
  },
  {
    number: '03',
    title: 'Development',
    description: 'AI agents and human engineers collaborate to build your solution in rapid iterations.',
    color: 'bg-primary-600',
  },
  {
    number: '04',
    title: 'Testing & QA',
    description: 'Automated and manual testing ensures reliability, security, and performance.',
    color: 'bg-accent-600',
  },
  {
    number: '05',
    title: 'Deployment',
    description: 'We deploy to production with CI/CD, monitoring, and ongoing support.',
    color: 'bg-primary-700',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">How We Work</h2>
          <p className="mt-4 section-subheading">
            A streamlined process powered by autonomous AI agents and human oversight.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-[calc(10%+12px)] right-[calc(10%+12px)] h-0.5 bg-gray-200" />

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                <div className={`w-12 h-12 ${step.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg`}>
                  <span className="text-sm font-bold">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
