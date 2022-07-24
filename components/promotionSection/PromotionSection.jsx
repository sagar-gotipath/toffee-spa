import { Tab, Disclosure, Transition } from '@headlessui/react'
import clsx from 'clsx'
import CenterWrapper from '../shared/CenterWrapper'
import Title from '../shared/Title'
import VerticalContainer from '../shared/VerticalContainer'
export default function PromotionSection({ title, promoTionData = [] }) {
  return (
    <section className="relative">
      <VerticalContainer>
        <CenterWrapper>
          <section>
            <article>
              <Title>{title}</Title>
            </article>
            <div className="hidden lg:block">
              <Tab.Group as="div" className="flex overflow-hidden rounded-xl">
                <Tab.List className="flex flex-col flex-1 rounded-t-2xl">
                  {promoTionData.map((item, index) => {
                    return (
                      <Tab key={index} className={({ selected }) => (selected ? 'outline-none' : '')}>
                        {({ selected }) => (
                          <article
                            className={clsx(
                              'px-4 py-8 transition-all relative border-l-4  border-y border-neutral-700',
                              selected ? 'bg-black border-l-pink-600' : 'bg-neutral-800 border-l-transparent',
                              selected &&
                                "before:left-full before:content-[''] before:absolute before:border-t-[12px] before:border-t-transparent before:border-l-[20px] before:border-l-black before:border-b-[12px] before:border-b-transparent before:top-1/2 before:-translate-y-1/2"
                            )}
                          >
                            <div>
                              <h4 className="text-left text-white">{item.title}</h4>
                              <p className="text-left text-white">{item.description}</p>
                            </div>
                          </article>
                        )}
                      </Tab>
                    )
                  })}
                </Tab.List>
                <Tab.Panels className="flex-1">
                  {promoTionData.map((item, index) => {
                    return (
                      <Tab.Panel key={index}>
                        <img src={item.image} alt="promotion image" className="w-full h-[488px] object-cover" />
                      </Tab.Panel>
                    )
                  })}
                </Tab.Panels>
              </Tab.Group>
            </div>

            {/* mobile version */}

            <div className="block lg:hidden">
              {promoTionData.map((item, index) => {
                return (
                  <Disclosure key={index} as="div" className="flex flex-col" defaultOpen={index === 0 ? true : false}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button>
                          <article
                            className={clsx(
                              ' py-8 px-4 border-b-2 border-zinc-700 last:bottom-0 transition-all relative ',
                              open ? 'bg-black border-t-[6px] border-transparent border-t-pink-500' : 'bg-neutral-800',
                              open &&
                                "before:content-[''] before:absolute before:border-x-[12px] before:border-x-transparent before:border-t-[20px] before:border-t-black before:left-1/2 before:top-full z-20 before:w-0 before:h-0 before:-translate-x-1/2"
                            )}
                          >
                            <h4 className="mb-2 text-center text-white">{item.title}</h4>
                            {open && <p className="text-center text-white">{item.description}</p>}
                          </article>
                        </Disclosure.Button>

                        <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel>
                            <img src={item.image} alt="promotion image" className="object-cover w-full" />
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                )
              })}
            </div>
          </section>
        </CenterWrapper>
      </VerticalContainer>
      <img src="/assets/images/promotion_bg.png" alt="" className="absolute right-0 -z-10 lg:-bottom-36 -bottom-24" />
    </section>
  )
}
