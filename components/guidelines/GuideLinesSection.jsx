import { useState } from 'react'
import CenterWrapper from '../shared/CenterWrapper'
import Title from '../shared/Title'
import TransitionModal from '../shared/TransitionModal'
import VerticalContainer from '../shared/VerticalContainer'

export default function GuideLinesSection({ title, description, guideLines = [] }) {
  return (
    <VerticalContainer>
      <CenterWrapper>
        <section>
          <Title>{title}</Title>
          <p className="mb-10 text-center lg:w-4/6 lg:mx-auto">{description}</p>
        </section>
        <section className="hidden gap-6 py-10 lg:grid lg:grid-cols-3">
          {guideLines.map((item, index) => {
            return (
              <GuideCard title={item.title} description={item.description} coverImage={item.coverImage} key={index} />
            )
          })}
        </section>

        {/* mobible */}
        {
          <section className="grid grid-cols-2 gap-6 py-10 lg:hidden">
            {guideLines.map((item, index) => {
              return (
                <GuideCard
                  title={item.title}
                  description={item.description}
                  coverImage={item.coverImage}
                  key={index}
                  isClickable={true}
                />
              )
            })}
          </section>
        }
      </CenterWrapper>
    </VerticalContainer>
  )
}

function GuideCard({ title, description, coverImage, isClickable }) {
  let [isOpen, setIsOpen] = useState(false)

  // handler function for modal
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  if (isClickable === true) {
    return (
      <>
        <div
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer bg-pink-50 group min-h-[245px] lg:cursor-default"
          onClick={openModal}
        >
          <section className="absolute inset-0 transition-all duration-300 bg-white opacity-100">
            <img
              src={coverImage}
              alt="guideline cover image"
              className="w-full max-h-[75%] md:max-h-[68%] lg:max-h-auto object-cover"
            />
            <h4 className="p-5">{title}</h4>
          </section>
        </div>

        <TransitionModal isOpen={isOpen} onClose={closeModal} isLoaderNeeded={false}>
          <article className="p-5 text-black bg-white rounded-lg">
            <h4 className="mb-3">{title}</h4>
            <p className="mb-3 lg:mb-14">{description}</p>
          </article>
        </TransitionModal>
      </>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-lg shadow-md cursor-pointer bg-pink-50 group min-h-[240px] lg:cursor-default">
      <article className="p-5">
        <h4 className="mb-3">{title}</h4>
        <p className="">{description}</p>
      </article>
      <section className=" bg-white absolute inset-0 opacity-100 group-hover:opacity-0 group-hover:z-[0] transition-all duration-300">
        <img src={coverImage} alt="guideline cover image" className="object-cover w-full h-[75%]" />
        <h4 className="p-5">{title}</h4>
      </section>
    </div>
  )
}
