import Link from 'next/link'
import FeatureOneWrapper from '../components/features/FeatureOneWrapper'
import GuideLinesSection from '../components/guidelines/GuideLinesSection'
import HeroSection from '../components/heroSection/HeroSection'
import Layout from '../components/Layout'
import PromotionSection from '../components/promotionSection/PromotionSection'
import RewardSection from '../components/RewardSection/RewardSection'
import LearnAndEarn from '../components/learnAndEarn/LearnAndEarn'
import FaqWrapper from '../components/faqSection/FaqWrapper'

// data
import promotionData from '../data/promotionData'
import communityGuidelinesData from '../data/communityGuidelinesData'
import learnEarn from '../data/learnEarn'
import faqs from '../data/faq'
import SubscriberWrapper from '../components/subscriberSection/SubscriberWrapper'
import VerticalContainer from '../components/shared/VerticalContainer'

export default function Home() {
  return (
    <Layout>
      <HeroSection
        title="TOFFEE Creators’ Platform"
        descriptions="The first Bangladeshi Creators’ Platform is now live on TOFFEE! Create your channel, upload your original videos, and enjoy the perks of being a creator on TOFFEE. "
      />

      <PromotionSection title="Why be on TOFFEE?" promoTionData={promotionData} />

      <RewardSection
        title="Higher the Badge, Higher the Reward"
        descriptions="Grow your subscribers and channel watch time to move up the badges and enjoy bigger perks. Check out the minimum number of subscribers and total video watch time you need for your channel to reach another level."
      ></RewardSection>

      <section className="bg-pink-50">
        <FeatureOneWrapper
          title="Create a Channel"
          description="All you need is a valid mobile number, email address and NID."
          btnText="Create Channel"
          btnLink="/create"
          image="/assets/images/feature_1.png"
          icon="/assets/images/dhol.png"
        ></FeatureOneWrapper>
        {/* feature two */}
        <FeatureOneWrapper
          title="Upload your Creation"
          description={`Create and upload original videos that adhere to the Community Guidelines`}
          btnText="Upload Video"
          image="/assets/images/feature_1.png"
          isReversed={true}
          isFile={true}
          icon="/assets/images/cameraTxt.png"
        ></FeatureOneWrapper>
      </section>

      <GuideLinesSection
        title="Community Guidelines"
        description="From kids to elders, TOFFEE is for everyone. Community Guidelines have been created to make
 your viewers comfortable in this space."
        guideLines={communityGuidelinesData}
      />

      <LearnAndEarn
        title="Learn Before You Earn"
        description="Whether you just started creating content for the first time or have been wowing audiences elsewhere, spare some time on the videos before beginning your creator journey on TOFFEE. The TOFFEE makers have come together to share their tips on how to make the most out of the platform."
        slides={learnEarn}
      />

      <FaqWrapper faqs={faqs}></FaqWrapper>

      <SubscriberWrapper
        title="Become a Creator"
        description="Create your channel and start uploading videos on TOFFEE following the community guidelines. 
"
      />
    </Layout>
  )
}
