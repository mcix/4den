'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { useTranslations } from 'next-intl'
import clsx from 'clsx'

import { Container } from '@/components/Container'

const FEATURE_KEYS = ['design', 'electronics', 'firmware', 'mechanics'] as const

export function PrimaryFeatures() {
  const t = useTranslations('PrimaryFeatures')
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
      aria-label={t('sectionLabel')}
      className="relative overflow-hidden bg-blue-600 dark:bg-blue-700 pt-20 pb-28 sm:py-32"
    >
      <div className="absolute inset-0 bg-[url('/images/background-features.jpg')] bg-cover bg-center opacity-40" />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            {t('heading')}
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">{t('intro')}</p>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="flex pb-4 sm:pb-0 lg:col-span-5">
                {/* Two per row below sm so all four disciplines stay on screen; a single
                    row from sm up, and the vertical rail from lg up. */}
                <TabList className="relative z-10 grid w-full grid-cols-2 gap-2 sm:mx-auto sm:flex sm:w-auto sm:gap-x-4 lg:mx-0 lg:block lg:w-full lg:gap-x-0 lg:gap-y-1">
                  {FEATURE_KEYS.map((key, featureIndex) => (
                    <Tab
                      key={key}
                      className={clsx(
                        // justify-self-center keeps the pill hugging its label instead of
                        // stretching across the whole grid cell, which made the selected
                        // tab read as a full-width bar next to three plain labels.
                        'group relative justify-self-center rounded-full px-4 py-1 lg:justify-self-stretch lg:rounded-l-xl lg:rounded-r-none lg:p-6 text-center lg:text-left',
                        'font-display text-lg data-selected:not-data-focus:outline-hidden',
                        selectedIndex === featureIndex
                          ? 'bg-white text-blue-600 lg:bg-white/10 lg:text-white lg:ring-1 lg:ring-white/10 lg:ring-inset'
                          : 'text-blue-100 hover:bg-white/10 hover:text-white lg:hover:bg-white/5',
                      )}
                    >
                      <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                      <span className="relative">{t(`features.${key}.title`)}</span>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm font-normal lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {t(`features.${key}.description`)}
                      </p>
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {FEATURE_KEYS.map((key) => (
                  <TabPanel key={key} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      {/* The negative top pulls this frosted panel up to meet the tabs.
                          The -26 assumes a single row of tabs, which is still true from
                          sm up; below sm the tabs are two rows, so it needs to start
                          lower or it covers the second row. */}
                      <div className="absolute -inset-x-4 -top-4 -bottom-17 bg-white/10 ring-1 ring-white/10 ring-inset sm:-top-26 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {t(`features.${key}.description`)}
                      </p>
                    </div>
                    <div className="mt-10 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 p-8 lg:mt-0">
                      <div className="flex h-64 items-center justify-center">
                        <div className="text-center">
                          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                            <span className="text-2xl font-bold text-white">
                              {t(`features.${key}.title`).charAt(0)}
                            </span>
                          </div>
                          <h3 className="font-display text-xl text-white">
                            {t(`features.${key}.title`)}
                          </h3>
                          <p className="mt-2 max-w-sm text-sm text-blue-100">
                            {t(`features.${key}.description`)}
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
