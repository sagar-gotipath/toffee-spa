import Link from 'next/link'
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

import CenterWrapper from './shared/CenterWrapper'

export default function Footer({ footerNvData, footerSocialData, copyWrightText }) {
  return (
    <section className="py-8 text-white bg-neutral-900 lg:pt-14">
      <CenterWrapper>
        <section className="flex flex-col items-center">
          <section className="flex mb-6 space-x-3 lg:mb-10 ">
            {footerSocialData.map((item, index) => {
              return (
                <div key={index}>
                  {item.name === 'facebook' && item.href && (
                    <a
                      className="grid w-6 h-6 transition border rounded-full place-items-center"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookF className="w-3.5 h-3.5 text-sky-100" />
                    </a>
                  )}
                  {item.name === 'twitter' && item.href && (
                    <a
                      className="grid w-6 h-6 transition border rounded-full place-items-center"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter className=" text-sky-100 w-3.5 h-3.5" />
                    </a>
                  )}
                  {item.name === 'linkedin' && item.href && (
                    <a
                      className="grid w-6 h-6 transition border rounded-full place-items-center"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn className=" text-sky-100 w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )
            })}
          </section>
          <div className="px-4">
            {footerNvData.length > 0 && (
              <ul className="flex flex-wrap justify-center mb-4 space-x-5 divide-dot">
                {footerNvData.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={item.href}>
                        <a className="relative text-sm capitalize">{item.title}</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
          <div>
            <p className="text-sm text-center text-white capitalize">{copyWrightText}</p>
          </div>
        </section>
      </CenterWrapper>
    </section>
  )
}
