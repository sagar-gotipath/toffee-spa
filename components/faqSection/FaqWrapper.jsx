import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Disclosure, Transition } from "@headlessui/react";
import CenterWrapper from "../shared/CenterWrapper";
import Title from "../shared/Title";
import VerticalContainer from "../shared/VerticalContainer";

export default function FaqWrapper({ faqs, title }) {
    return (
        <VerticalContainer>
            <CenterWrapper>
                <Title>FAQs</Title>
            </CenterWrapper>

            <section className="w-full max-w-2xl px-4 mx-auto">
                {faqs.map((item, index) => {
                    return (
                        <Disclosure
                            key={index}
                            as="div"
                            className="flex flex-col"
                        >
                            {({ open }) => (
                                <>
                                    <Disclosure.Button>
                                        <div className="flex items-center justify-between p-4 mb-1 space-x-3 border-l-2 border-pink-500 bg-pink-50">
                                            <div className="flex items-center space-x-3">
                                                <img
                                                    src="/assets/images/q-icon.png"
                                                    alt="question icon"
                                                    className="w-auto h-4"
                                                />
                                                <h5 className="text-left">
                                                    {item.question}
                                                </h5>
                                            </div>
                                            <span>
                                                {open ? (
                                                    <FiChevronUp />
                                                ) : (
                                                    <FiChevronDown />
                                                )}
                                            </span>
                                        </div>
                                    </Disclosure.Button>
                                    <Transition
                                        enter="transition duration-300 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-300 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Disclosure.Panel
                                            as="div"
                                            className="flex items-start p-5 space-x-3"
                                        >
                                            <img
                                                src="/assets/images/answer-icon.png"
                                                alt="answer icon"
                                                className="w-auto h-3.5 mt-1.5"
                                            />
                                            <p className="">{item.answer}</p>
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                    );
                })}
            </section>
        </VerticalContainer>
    );
}

// 1960 13 oct
// 4188635082
