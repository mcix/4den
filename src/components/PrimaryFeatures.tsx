'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

const features = [
  {
    title: 'Design',
    description:
      'Van concept tot productiegereed ontwerp. Onze industrieel ontwerpers zorgen voor de juiste balans tussen vormgeving, ergonomie en maakbaarheid. Bij alle ontwikkelingen blijft de designer over de schouder meekijken.',
  },
  {
    title: 'Electronica',
    description:
      'Complete electronica-ontwikkeling inclusief schematisch ontwerp, PCB-layout, signaalintegriteit en prototype opbouw voor complexe embedded systemen.',
  },
  {
    title: 'Firmware',
    description:
      'Embedded software-ontwikkeling op bare-metal, RTOS en Linux platformen. Wij leveren betrouwbare, testbare firmware die uw hardware optimaal laat presteren.',
  },
  {
    title: 'Mechanica',
    description:
      'Precisie werktuigbouwkunde met 3D-modellering, FEA-analyse, tolerantiestudies en DFM-optimalisatie voor robuuste, maakbare producten.',
  },
]

export function PrimaryFeatures() {
  const [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: MediaQueryListEvent | MediaQueryList) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="disciplines"
      aria-label="Onze vier disciplines"
      className="relative overflow-hidden bg-blue-600 dark:bg-blue-700 pt-20 pb-28 sm:py-32"
    >
      <div className="absolute inset-0 bg-[url('/images/background-features.jpg')] bg-cover bg-center opacity-40" />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Vier disciplines, één geïntegreerd team.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            De naam 4D Engineers staat voor de 4 disciplines waarover wij
            beschikken. Door teams samen te stellen waarin elke discipline
            vertegenwoordigd is, worden betere ontwerpkeuzes gemaakt.
          </p>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 px-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <Tab
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 text-left',
                        'font-display text-lg data-selected:not-data-focus:outline-hidden',
                        selectedIndex === featureIndex
                          ? 'bg-white text-blue-600 lg:bg-white/10 lg:text-white lg:ring-1 lg:ring-white/10 lg:ring-inset'
                          : 'text-blue-100 hover:bg-white/10 hover:text-white lg:hover:bg-white/5',
                      )}
                    >
                      <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                      <span className="relative">{feature.title}</span>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm font-normal lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 -top-26 -bottom-17 bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 p-8 lg:mt-0">
                      <div className="flex h-64 items-center justify-center">
                        <div className="text-center">
                          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                            <span className="text-2xl font-bold text-white">
                              {feature.title[0]}
                            </span>
                          </div>
                          <h3 className="font-display text-xl text-white">
                            {feature.title}
                          </h3>
                          <p className="mt-2 max-w-sm text-sm text-blue-100">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
