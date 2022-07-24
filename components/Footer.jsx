import Link from "next/link";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import CenterWrapper from "./shared/CenterWrapper";

export default function Footer({
    footerNvData,
    footerSocialData,
    copyWrightText,
}) {
    return (
        <section className="py-8 text-white bg-neutral-900 lg:pt-14">
            <CenterWrapper>
                <section className="flex flex-col lg:items-center">
                    <div>
                        <section className="flex mb-10 space-x-3 ">
                            {footerSocialData.map((item, index) => {
                                return (
                                    <>
                                        {item.name === "facebook" && item.href && (
                                            <Link href={item.href} key={index}>
                                                <a className="grid transition rounded-full place-items-center border p-1.5">
                                                    <FaFacebookF className="w-5 h-5 text-sky-100" />
                                                </a>
                                            </Link>
                                        )}
                                        {item.name === "twitter" && item.href && (
                                            <Link href={item.href} key={index}>
                                                <a className="grid transition rounded-full place-items-center border p-1.5">
                                                    <FaTwitter className="w-5 h-5 text-sky-100" />
                                                </a>
                                            </Link>
                                        )}
                                        {item.name === "linkedin" && item.href && (
                                            <Link href={item.href} key={index}>
                                                <a className="grid transition rounded-full place-items-center border p-1.5">
                                                    <FaLinkedinIn className="w-5 h-5 text-sky-100" />
                                                </a>
                                            </Link>
                                        )}
                                    </>
                                );
                            })}
                        </section>
                    </div>
                    <div className="px-4">
                        {footerNvData.length > 0 && (
                            <ul className="flex flex-col mb-4 list-disc lg:space-x-6 lg:flex-row">
                                {footerNvData.map((item, index) => {
                                    return (
                                        <li key={index} className="">
                                            <Link href={item.href}>
                                                <a className="text-sm capitalize">
                                                    {item.title}
                                                </a>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                    <div>
                        <p className="text-sm text-center text-white capitalize">
                            {copyWrightText}
                        </p>
                    </div>
                </section>
            </CenterWrapper>
        </section>
    );
}
