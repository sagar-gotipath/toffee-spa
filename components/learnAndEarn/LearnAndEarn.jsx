import { Navigation, Pagination, Controller, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import CenterWrapper from '../shared/CenterWrapper'
import VerticalContainer from '../shared/VerticalContainer'
import { useRef, useState } from 'react'
import TransitionModal from '../shared/TransitionModal'

export default function LearnAndEarn({ title, description, slides = [] }) {
  return (
    <section className="bg-pink-50">
      <VerticalContainer>
        <section className="grid grid-cols-1 lg:grid-cols-4 lg:pl-[200px] ">
          <article className="px-4 mb-10 lg:col-span-1 lg:px-0 lg:pr-5 lg:mb-0">
            <h2 className="mb-6">{title}</h2>
            <p>{description}</p>
          </article>
          <div className=" lg:col-span-3">
            <div className="">
              <Slider slides={slides} title={title} description={description}></Slider>
            </div>
          </div>
        </section>
      </VerticalContainer>
    </section>
  )
}

function Slider({ slides, title, description }) {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section>
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => {
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            if (swiper.params !== undefined) {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current

              // Re-init navigation
              swiper.navigation.destroy()
              swiper.navigation.init()
              swiper.navigation.update()
            }
          })
        }}
        modules={[Navigation]}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {slides.map((item, index) => {
          return (
            <>
              <SwiperSlide key={index} className="cursor-pointer ">
                <SlideCard
                  image={item.image}
                  instructorName={item.instructorName}
                  modalContent={item.videoSrc}
                  title={item.title}
                ></SlideCard>
              </SwiperSlide>
            </>
          )
        })}
      </Swiper>
      <div className="flex justify-center pt-5 space-x-3 lg:justify-end lg:pt-10 lg:pr-20">
        <span className="grid p-2 border rounded-full cursor-pointer border-cyan-900 place-items-center " ref={prevRef}>
          <FiChevronLeft className="text-cyan-900" />
        </span>
        <span
          className="grid p-2 border rounded-full cursor-pointer border-cyan-900 place-items-center nextBtn"
          ref={nextRef}
        >
          <FiChevronRight className="text-cyan-900" />
        </span>
      </div>
    </section>
  )
}

function SlideCard({ image, instructorName, title, modalContent }) {
  let [isOpen, setIsOpen] = useState(false)

  // handler function for modal
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
      <div
        className="flex flex-col justify-between flex-1 rounded-lg cursor-pointer bg-fuchsia-100"
        onClick={openModal}
      >
        <div className="relative ">
          <img
            src={image}
            alt={`instuctor ${instructorName}`}
            className="w-full h-[320px] block lg:h-[370px] object-cover rounded-t-lg "
          />
          <div className="absolute inset-0 z-20 rounded-t-lg bg-gradient-to-r from-black/20 to-black/10"></div>
          <img
            src="/assets/images/playButton.svg"
            alt="play button"
            className="absolute z-30 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div>
        <article className="px-4 py-5">
          <p className="mb-0 font-semibold leading-5">{title}</p>
          <span className="text-xs">{instructorName}</span>
        </article>

        <TransitionModal isOpen={isOpen} onClose={closeModal}>
          <div className="relative flex flex-col items-center justify-center text-4xl">
            <div
              className="flex items-center justify-center w-full h-full text-center"
              dangerouslySetInnerHTML={{
                __html: modalContent,
              }}
            />
          </div>
        </TransitionModal>
      </div>
    </>
  )
}
