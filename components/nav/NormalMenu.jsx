import Link from 'next/link'
import { useContext } from 'react'
import { GlobalContext } from '../Layout'

export default function NormalMenu({ title, href, isMobile }) {
  const { handleDisplayMobileNav } = useContext(GlobalContext)
  return (
    <>
      {href && (
        <Link href={href}>
          <a
            className="items-center block py-3 text-sm font-bold capitalize transition duration-150 lg:inline-flex lg:h-12 lg:px-0 lg:py-0 hover:opacity-80 lg:text-base"
            onClick={() => {
              if (isMobile) {
                handleDisplayMobileNav()
              }
            }}
          >
            {title}
          </a>
        </Link>
      )}
    </>
  )
}
