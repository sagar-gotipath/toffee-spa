import Link from "next/link";
import CenterWrapper from "../shared/CenterWrapper";
import Title from "../shared/Title";
import VerticalContainer from "../shared/VerticalContainer";

export default function SubscriberWrapper({ title, description }) {
    return (
        <VerticalContainer>
            <CenterWrapper>
                <section
                    style={{
                        backgroundImage: "",
                    }}
                    className="py-16 bg-right bg-no-repeat bg-cover rounded-md px-14 lg:bg-[url('/assets/images/subsImage.png')]"
                >
                    <div className="">
                        <article className="mb-8 text-white lg:w-1/2">
                            <h2 className="mb-2 font-medium">{title}</h2>
                            <p>{description}</p>
                        </article>
                        <div className="flex space-x-3">
                            <Link href="/">
                                <a>
                                    <img
                                        src="/assets/images/google_play.png"
                                        alt="google play image"
                                    />
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    <img
                                        src="/assets/images/app_store.png"
                                        alt="google play image"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </CenterWrapper>
        </VerticalContainer>
    );
}
