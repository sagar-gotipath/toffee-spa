import { useState, createContext } from 'react'
import Footer from './Footer'
import Header from './Header'

export const GlobalContext = createContext()

export default function Layout({ children, menu = null, footerMenu = null }) {
  const [isDisplayMobileNav, setIsDisplayMobileNav] = useState(false)

  const handleDisplayMobileNav = (isShow) => {
    if (isShow === 'false') {
      setIsDisplayMobileNav(false)
      return
    }
    setIsDisplayMobileNav(!isDisplayMobileNav)
  }
  // header menu data

  const menuData = [
    {
      title: 'monetization policy',
      type: 'normalmenu',
      href: '/monetization-policy',
    },
    {
      title: "creator's terms of Use",
      type: 'normalmenu',
      href: '/terms-and-condition',
    },
    {
      title: 'Download app',
      type: 'normalmenu',
      href: '/download',
    },
  ]

  // footer data

  const footerLinks = [
    {
      title: 'home',
      type: 'normalmenu',
      href: '/',
    },
    {
      title: 'community guidelines',
      type: 'normalmenu',
      href: '/guidelines',
    },
    {
      title: "creator's terms of use",
      type: 'normalmenu',
      href: '/terms-and-condition',
    },
    {
      title: 'monetization policy',
      type: 'normalmenu',
      href: '/policy',
    },
  ]

  // footer social links
  const footerSocial = [
    { name: 'facebook', href: 'https://www.facebook.com' },
    { name: 'twitter', href: 'https://www.facebook.com' },
    { name: 'linkedin', href: 'https://www.facebook.com' },
  ]

  return (
    <>
      <GlobalContext.Provider value={{ isDisplayMobileNav, handleDisplayMobileNav }}>
        <Header navData={menuData} />

        <main>{children}</main>
        <Footer
          footerNvData={footerLinks}
          footerSocialData={footerSocial}
          copyWrightText="&copy; 2022 banglalink digital communications limited. all rights reserved"
        />
      </GlobalContext.Provider>
    </>
  )
}
