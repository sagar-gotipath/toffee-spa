import Link from 'next/link'
import CenterWrapper from '../shared/CenterWrapper'
import Title from '../shared/Title'
import VerticalContainer from '../shared/VerticalContainer'

export default function SubscriberWrapper({ title, description }) {
  return (
    <section className="bg-no-repeat bg-subscriber">
      <VerticalContainer>
        <CenterWrapper>
          <section className="pt-48 pb-8 bg-top bg-no-repeat rounded-2xl lg:py-16 lg:bg-right bg-opacity-95 px-14 lg:bg-custom bg-custom-mobile">
            <div className="">
              <article className="mb-8 text-white lg:w-1/2">
                <h2 className="mb-2 font-medium text-center lg:text-left">{title}</h2>
                <p>{description}</p>
              </article>
              <div className="flex justify-center space-x-3 lg:justify-start">
                <Link href="/">
                  <a>
                    <img src="/assets/images/google_play.png" alt="google play image" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img src="/assets/images/app_store.png" alt="google play image" />
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </CenterWrapper>
      </VerticalContainer>
    </section>
  )
}

// linear-gradient(90deg, rgba(187, 0, 75, 1), rgba(187, 0, 75, 1), rgba(255, 252, 178, 1), transparent, transparent), url('/assets/images/subsCover.png')

// lg:bg-[url('/assets/images/subsImage.png')]
