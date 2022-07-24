import CenterWrapper from '../shared/CenterWrapper'
import VerticalContainer from '../shared/VerticalContainer'

export default function HeroSection({ title, descriptions, heroImage }) {
  return (
    <div className="relative h-[550px] flex lg:items-center">
      <CenterWrapper>
        <section className="flex flex-col lg:flex-row lg:items-center mt-14 lg:mt-0 ">
          <div className="flex-1 my-5 lg:mb-0">
            <article className="">
              <h1 className="mb-4">{title}</h1>
              <p>{descriptions}</p>
            </article>
          </div>
          <div className="flex-1">
            <div className="absolute bottom-0 lg:top-0 lg:right-0">
              <img
                src={heroImage || '/assets/images/Vector_2.gif'}
                alt="hero section image "
                className="absolute inset-0 w-full"
              />
              <img src={'/assets/images/hero_2.png'} alt="hero section image " className="w-full " />
            </div>
          </div>
        </section>
      </CenterWrapper>
    </div>
  )
}
