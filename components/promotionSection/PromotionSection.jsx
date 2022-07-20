import { Tab } from "@headlessui/react";
import clsx from "clsx";
import CenterWrapper from "../shared/CenterWrapper";
import Title from "../shared/Title";
import VerticalContainer from "../shared/VerticalContainer";
export default function PromotionSection({ title, promoTionData = [] }) {
    return (
        <VerticalContainer>
            <CenterWrapper>
                <section>
                    <article>
                        <Title>{title}</Title>
                    </article>
                    <div className="rounded-lg">
                        <Tab.Group as="div" className="flex">
                            <Tab.List className="flex flex-col flex-1">
                                {promoTionData.map((item, index) => {
                                    return (
                                        <Tab
                                            key={index}
                                            className={({ selected }) =>
                                                selected ? "outline-none" : ""
                                            }
                                        >
                                            {({ selected }) => (
                                                <article
                                                    className={clsx(
                                                        "py-8 px-4 border-b-2 border-zinc-700 last:bottom-0 transition-all relative",
                                                        selected
                                                            ? "bg-black border-l-8 border-b-zinc-700 border-pink-500"
                                                            : "bg-neutral-800",
                                                        selected &&
                                                            "before:left-full before:content-[''] before:absolute before:border-t-[15px] before:border-t-transparent before:border-l-[24px] before:border-l-black before:border-b-[15px] before:border-b-transparent before:top-1/2 before:-translate-y-1/2"
                                                    )}
                                                >
                                                    <h4 className="text-white text-left">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-white text-left">
                                                        {item.description}
                                                    </p>
                                                </article>
                                            )}
                                        </Tab>
                                    );
                                })}
                            </Tab.List>
                            <Tab.Panels className="flex-1">
                                {promoTionData.map((item, index) => {
                                    return (
                                        <Tab.Panel key={index}>
                                            <img
                                                src={item.image}
                                                alt="promotion image"
                                                className="w-full h-[488px] object-cover"
                                            />
                                        </Tab.Panel>
                                    );
                                })}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </section>
            </CenterWrapper>
        </VerticalContainer>
    );
}
