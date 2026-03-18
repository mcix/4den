import { Container } from '@/components/Container'

const usps = [
  {
    title: 'Ervaren netwerk',
    description:
      'Een groot netwerk van zelfstandige ingenieurs met elk minimaal 20 jaar professionele ervaring in hun vakgebied. Bijna altijd beschikken wij over de geschikte kennis.',
  },
  {
    title: 'Vaste kosten per cyclus',
    description:
      'Wij werken met Development Cycles met vaste kosten en doorlooptijden. U weet wat u wanneer gaat krijgen tegen een eerder overeengekomen vergoeding. Geen onverwachte facturen.',
  },
  {
    title: 'Van startup tot multinational',
    description:
      'Onze klanten lopen uiteen van startups tot multinationals. Door de combinatie van een groot netwerk en lange ervaring kunnen wij ondersteunen waar eigen kennis soms tekortschiet.',
  },
  {
    title: 'Alle IP is van u',
    description:
      'De opdrachtgever krijgt de beschikking over alle IP die tijdens de ontwikkeling wordt gebruikt en ontwikkeld. Er zijn geen naheffingen of licentierelaties.',
  },
  {
    title: 'Risicodragend meeinvesteren',
    description:
      'In sommige gevallen kunnen onze zelfstandige engineers deels risicodragend meeinvesteren in uw project. Dit toont ons vertrouwen in het gezamenlijke resultaat.',
  },
  {
    title: 'Ervaren met certificering',
    description:
      'Wij hebben ruime ervaring met CE-markering, certificeringstrajecten en patentaanvragen. Wij begeleiden u door het gehele proces van ontwikkeling tot marktintroductie.',
  },
]

export function Testimonials() {
  return (
    <section
      id="waarom-4d"
      aria-label="Waarom 4D Engineers"
      className="bg-slate-50 dark:bg-slate-800/50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Waarom 4D Engineers?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700 dark:text-slate-300">
            Een maatschap zonder hoge vaste kosten, maar wel met zeer ervaren en
            enthousiaste ingenieurs die focussen op snelheid zonder
            budgetoverschrijdingen.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {usps.map((usp) => (
            <li key={usp.title}>
              <div className="relative rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-xl shadow-slate-900/10 dark:shadow-black/20">
                <h3 className="font-display text-lg font-medium text-slate-900 dark:text-white">
                  {usp.title}
                </h3>
                <p className="mt-3 text-sm tracking-tight text-slate-700 dark:text-slate-300">
                  {usp.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
