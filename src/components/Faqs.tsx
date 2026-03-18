import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Welke producten ontwikkelen jullie?',
      answer:
        'Wij zijn gespecialiseerd in complexe mechatronische producten die een nauwe integratie vragen tussen mechanica, electronica, firmware en industrieel ontwerp. Denk aan uiteenlopende machines met bewegende onderdelen.',
    },
    {
      question: 'Hoe werken de Development Cycles?',
      answer:
        'Wij werken in korte cycli van 4-6 weken met een vaste prijs en deliverable per cyclus. Na elke cyclus wordt een prototype gemaakt. Afhankelijk van de complexiteit worden 2-8 cycli doorlopen tot aan marktintroductie.',
    },
    {
      question: 'Kunnen jullie met ons bestaande team werken?',
      answer:
        'Absoluut. Wij ondersteunen bij lopende projecten, bieden second opinions, en kunnen desgewenst onze ingenieurs langere tijd committeren aan de begeleiding en doorontwikkeling van een project.',
    },
  ],
  [
    {
      question: 'Hoe zit het met kosten en facturatie?',
      answer:
        'In een vroeg technisch stadium (TRL 1-3) werken wij op basis van vaste uurtarieven en bent u op elk moment opzegbaar. Vanaf TRL 4 bieden wij vaste offertes per Development Cycle aan. Geen onverwachte facturen of overschrijdingen.',
    },
    {
      question: 'Hoe gaan jullie om met vertrouwelijkheid?',
      answer:
        '4D Engineers werkt altijd onder onze eigen NDA. Wilt u dat wij uw NDA gebruiken, dan laten wij deze door onze juridische partner beoordelen.',
    },
    {
      question: 'Van wie is het intellectueel eigendom?',
      answer:
        'De opdrachtgever krijgt de beschikking over alle IP die tijdens de ontwikkeling wordt gebruikt en ontwikkeld. Er zijn geen naheffingen of licentierelaties.',
    },
  ],
  [
    {
      question: 'Welke disciplines bieden jullie aan?',
      answer:
        'Onze vakgebieden zijn: electronica, mechanica, mechatronica, productieautomatisering, maintenance, vormgeving en User Interface. Ons netwerk heeft bijna altijd de geschikte kennis.',
    },
    {
      question: 'Hebben jullie ervaring met certificering?',
      answer:
        'Ja, wij hebben ruime ervaring met CE-markering, certificeringstrajecten en patentaanvragen. Wij kunnen ondersteunen tijdens R&D, marktintroductie en het verblijf van het product in de markt.',
    },
    {
      question: 'Hoe kan ik starten?',
      answer:
        'Een afspraak met een van ons is de snelste weg naar een kennismaking. Neem contact op met Michiel Wanninkhof via 0653 267 122 of Michiel@4D-Engineers.com.',
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
            Veelgestelde vragen
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Kunt u niet vinden wat u zoekt? Neem contact op via{' '}
            <a href="mailto:Michiel@4D-Engineers.com" className="text-blue-600 hover:text-blue-500">
              Michiel@4D-Engineers.com
            </a>{' '}
            en wij helpen u graag verder.
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
