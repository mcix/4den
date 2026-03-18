import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What types of products do you develop?',
      answer:
        'We specialize in complex mechatronic products that require tight integration between mechanical, electronic, firmware and industrial design disciplines.',
    },
    {
      question: 'How does Hardware Scrum work?',
      answer:
        'Hardware Scrum adapts agile principles for physical product development. We work in iterative sprints with regular demos and reviews, allowing for early validation and course correction.',
    },
    {
      question: 'Can you work with our existing team?',
      answer:
        'Absolutely. We often embed our engineers within client teams, or work alongside your existing R&D department to fill specific capability gaps.',
    },
  ],
  [
    {
      question: 'What industries do you serve?',
      answer:
        'We work across medical devices, industrial automation, consumer electronics, energy, and automotive sectors — anywhere complex mechatronic products are needed.',
    },
    {
      question: 'Do you handle certification and compliance?',
      answer:
        'Yes, we have experience with CE marking, medical device regulations (MDR), and various industry-specific certification requirements.',
    },
    {
      question: 'What is your typical project timeline?',
      answer:
        'Timelines vary by complexity, but a typical concept-to-prototype cycle takes 3-6 months. We provide detailed planning during the project kick-off.',
    },
  ],
  [
    {
      question: 'Where are you located?',
      answer:
        'We are based in the Netherlands, but our network of engineers operates across Europe. We work both on-site and remotely depending on project needs.',
    },
    {
      question: 'How do you ensure quality?',
      answer:
        'Our QIS (Quality, Innovation, Sustainability) philosophy is embedded in everything we do. We use design reviews, testing protocols, and continuous integration practices.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Simply reach out via our contact page or email us at info@4d-engineers.nl. We will schedule an introductory meeting to discuss your project needs.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <div className="absolute inset-0 bg-[url('/images/background-faqs.jpg')] bg-cover bg-center opacity-10" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can&apos;t find what you&apos;re looking for, email us at{' '}
            <a href="mailto:info@4d-engineers.nl" className="text-blue-600 hover:text-blue-500">
              info@4d-engineers.nl
            </a>{' '}
            and we&apos;ll get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
