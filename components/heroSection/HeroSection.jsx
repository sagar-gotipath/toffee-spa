import CenterWrapper from '../shared/CenterWrapper'

export default function HeroSection({ title, descriptions, heroImage }) {
  return (
    <div className="relative h-[650px] flex lg:items-center overflow-hidden">
      <CenterWrapper>
        <section className="flex flex-col overflow-hidden lg:flex-row lg:items-center mt-14 lg:mt-0">
          <div className="flex-1 my-5 lg:mb-0">
            <article className="">
              <h1 className="mb-4">{title}</h1>
              <p>{descriptions}</p>
            </article>
          </div>
          <div className="flex-1">
            <div className="absolute lg:-right-14 lg:top-0">
              <video muted autoPlay loop width="850">
                <source src="/assets/video/toffee.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      </CenterWrapper>
    </div>
  )
}
