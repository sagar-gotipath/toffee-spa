import clsx from 'clsx'

import CenterWrapper from '../shared/CenterWrapper'
import Title from '../shared/Title'
import VerticalContainer from '../shared/VerticalContainer'

import rewardData from '../../data/rewardData'

export default function RewardSection({ title, descriptions }) {
  return (
    <VerticalContainer>
      <CenterWrapper>
        <Title>{title}</Title>
        <p className="mb-10 text-center lg:w-4/6 lg:mx-auto">{descriptions}</p>
        <section>
          <div className="grid grid-cols-3 p-4 mb-3 rounded-md bg-stone-100">
            {['badges', 'subscriber', 'watch time (Mins)'].map((item, index) => {
              return (
                <p
                  key={index}
                  className={clsx(
                    'flex font-semibold capitalize',
                    index === 0 && 'text-left',
                    index === 1 && 'text-center lg:justify-center',
                    index === 2 && 'text-center lg:justify-end w-5/6 ml-auto lg:w-full'
                  )}
                >
                  <span className="">{item}</span>
                </p>
              )
            })}
          </div>
          {rewardData.map((item, index) => {
            return (
              <section
                key={index}
                className={clsx(
                  'grid grid-cols-3 p-4 rounded-md mb-3 items-center',
                  index === 0 && 'bg-teal-50',
                  index === 1 && 'bg-sky-50',
                  index === 2 && 'bg-violet-50',
                  index === 3 && 'bg-sky-50'
                )}
              >
                <div className="flex flex-col lg:flex-row">
                  <img src={item.icon} alt="icon" className="w-8 h-8 mr-2 lg:w-auto lg:h-auto" />
                  <article className="">
                    <span className="text-xs">TOFFEE</span>
                    <h5 className="capitalize">{item.badges}</h5>
                  </article>
                </div>
                <h5 className="text-center ">
                  <span>{item.subscriber}</span>
                </h5>
                <h5 className="text-center lg:text-right">
                  <span>{item.watchTime}</span>
                </h5>
              </section>
            )
          })}
        </section>
      </CenterWrapper>
    </VerticalContainer>
  )
}
