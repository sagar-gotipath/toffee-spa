import CenterWrapper from '../shared/CenterWrapper'
import VerticalContainer from '../shared/VerticalContainer'

export default function HeroSection({ title, descriptions, heroImage }) {
  return (
    <div className="relative h-[600px] flex lg:items-center">
      <CenterWrapper>
        <section className="flex flex-col lg:flex-row lg:items-center mt-14 lg:mt-0 ">
          <div className="flex-1 my-5 lg:mb-0">
            <article className="">
              <h1 className="mb-4">{title}</h1>
              <p>{descriptions}</p>
            </article>
          </div>
          <div className="flex-1">
            <div className="absolute bottom-0 lg:top-14 lg:right-0">
              <img
                src={'/assets/images/Vector_2.gif'}
                alt="hero section image"
                className="rotate-0 W-full custom-hero"
                width={787}
                height={671}
              />
            </div>
            {/* <img
              src={heroImage || '/assets/images/Vector_2.gif'}
              alt="hero section image "
              className="w-full lg:hidden"
            /> */}
            {/* <img src={'/assets/images/Vector_2.gif'} alt="hero section image " className="W-full custom-hero" /> */}
          </div>
        </section>
      </CenterWrapper>
    </div>
  )
}
