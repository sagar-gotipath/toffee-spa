import FeatureOneWrapper from "../components/features/FeatureOneWrapper";
import GuideLinesSection from "../components/guidelines/GuideLinesSection";
import HeroSection from "../components/heroSection/HeroSection";
import Layout from "../components/Layout";
import PromotionSection from "../components/promotionSection/PromotionSection";
import RewardSection from "../components/RewardSection/RewardSection";

// data
import promotionData from "../data/promotionData";
import communityGuidelinesData from "../data/communityGuidelinesData";

export default function Home() {
    return (
        <Layout>
            <HeroSection
                title="TOFFEE Creators’ Platform"
                descriptions="The first Bangladeshi Creators’ Platform is now live on TOFFEE! Create your channel, upload your original videos, and enjoy the perks of being a creator on TOFFEE. "
            />

            <PromotionSection
                title="Why be on TOFFEE?"
                promoTionData={promotionData}
            />

            <RewardSection
                title="Higher the Badge, Higher the Reward"
                descriptions="Grow your subscribers and channel watch time to move up the badges and enjoy bigger perks. Check out the minimum number of subscribers and total video watch time you need for your channel to reach another level."
            ></RewardSection>

            <FeatureOneWrapper
                title="Create a Channel"
                description="All you need is a valid mobile number, email address and NID."
                btnText="Create Channel"
                btnLink="https://www.gotipath.com"
                image="/assets/images/feature_1.png"
                icon="/assets/images/dhol.png"
            ></FeatureOneWrapper>
            {/* feature two */}
            <FeatureOneWrapper
                title="Upload your Creation"
                description="Create and upload original videos that adhere to the Community Guidelines"
                btnText="Upload Video"
                btnLink="https://www.gotipath.com"
                image="/assets/images/feature_1.png"
                isReversed={true}
                icon="/assets/images/cameraTxt.png"
            ></FeatureOneWrapper>

            <GuideLinesSection
                title="Community Guidelines"
                description="From kids to elders, TOFFEE is for everyone. Community Guidelines have been created to make
 your viewers comfortable in this space."
                guideLines={communityGuidelinesData}
            />
        </Layout>
    );
}
