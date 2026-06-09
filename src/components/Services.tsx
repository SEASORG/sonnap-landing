const services = [
  {
    title: 'Custom Software Development',
    description:
      'End-to-end development of tailored software solutions — from web apps to enterprise platforms — designed to scale with your business.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: ['Full-stack web applications', 'API development & integration', 'Database design & optimization', 'Cloud-native architecture'],
  },
  {
    title: 'AI Agent Integration',
    description:
      'Deploy autonomous AI agents that automate workflows, analyze data, and augment your team — built on cutting-edge LLM technology.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ['Custom AI agent development', 'Workflow automation', 'Data analysis & reporting', 'LLM integration & fine-tuning'],
  },
  {
    title: 'Modern Web Applications',
    description:
      'Beautiful, performant web experiences built with Next.js, React, and Tailwind CSS — optimized for speed, SEO, and user experience.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    features: ['Responsive design & development', 'Progressive web apps', 'E-commerce solutions', 'Dashboard & analytics portals'],
  },
  {
    title: 'API Development & Consulting',
    description:
      'Design and build robust, secure APIs that connect your systems. Strategic consulting to modernize your technology stack.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    features: ['REST & GraphQL API design', 'Microservices architecture', 'API security & rate limiting', 'Technical architecture consulting'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">What We Build</h2>
          <p className="mt-4 section-subheading">
            From concept to deployment — our agent-powered team delivers production-ready software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-100 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
