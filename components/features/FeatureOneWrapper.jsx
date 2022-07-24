import Link from 'next/link'
import clsx from 'clsx'
import CenterWrapper from '../shared/CenterWrapper'
import VerticalContainer from '../shared/VerticalContainer'

export default function FeatureOneWrapper({ image, title, description, btnText, btnLink, isReversed, isFile, icon }) {
  return (
    <VerticalContainer>
      <CenterWrapper>
        <div
          className={clsx(
            'flex items-center  lg:space-x-10 space-y-5 lg:space-y-0 flex-col',
            isReversed === true ? 'lg:flex-row-reverse space-x-reverse' : 'lg:flex-row'
          )}
        >
          <div className="order-2 lg:order-none">
            <img src={image} alt="feature image" className="w-full mt-5 lg:mt-0" />
          </div>
          <article className="flex-1 order-1 lg:order-none">
            <img src={icon} alt="" className="mb-4 w-14" />
            <h3 className="mb-4">{title}</h3>
            <p className="mb-4">{description}</p>
            {isFile ? (
              <form action="yourScript">
                <input type="file" id="actual-btn" hidden />
                <label htmlFor="actual-btn" className="primary-btn">
                  {btnText}
                </label>
              </form>
            ) : (
              <Link href={btnLink}>
                <a className=" primary-btn">
                  <span className="">{btnText}</span>
                </a>
              </Link>
            )}
          </article>
        </div>
      </CenterWrapper>
    </VerticalContainer>
  )
}
