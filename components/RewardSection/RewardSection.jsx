import clsx from "clsx";

import CenterWrapper from "../shared/CenterWrapper";
import Title from "../shared/Title";
import VerticalContainer from "../shared/VerticalContainer";

import rewardData from "../../data/rewardData";

export default function RewardSection({ title, descriptions }) {
    return (
        <VerticalContainer>
            <CenterWrapper>
                <Title>{title}</Title>
                <p className="text-center lg:w-4/6 lg:mx-auto mb-10">
                    {descriptions}
                </p>
                <section>
                    <div className="flex justify-between bg-stone-100 p-4 rounded-md mb-3">
                        {["badges", "subscriber", "watch time (Mins)"].map(
                            (item, index) => {
                                return (
                                    <p
                                        key={index}
                                        className="capitalize font-semibold"
                                    >
                                        {item}
                                    </p>
                                );
                            }
                        )}
                    </div>
                    {rewardData.map((item, index) => {
                        return (
                            <section
                                key={index}
                                className={clsx(
                                    "flex justify-between p-4 rounded-md mb-3 items-center",
                                    index === 0 && "bg-teal-50",
                                    index === 1 && "bg-sky-50",
                                    index === 2 && "bg-violet-50",
                                    index === 3 && "bg-sky-50"
                                )}
                            >
                                <div className="flex">
                                    <img
                                        src={item.icon}
                                        alt="icon"
                                        className="mr-2"
                                    />
                                    <article>
                                        <span className="text-xs">TOFFEE</span>
                                        <h5 className="capitalize">
                                            {item.badges}
                                        </h5>
                                    </article>
                                </div>
                                <h5 className="text-left lg:w-[200px]">
                                    <span>{item.subscriber}</span>
                                </h5>
                                <h5 lassName="text-center lg:w-[250px]">
                                    <span>{item.watchTime}</span>
                                </h5>
                            </section>
                        );
                    })}
                </section>
            </CenterWrapper>
        </VerticalContainer>
    );
}
