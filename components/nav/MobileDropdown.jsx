import { useContext, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import { MobileLink } from './MegaMenuTransition'
import { GlobalContext } from '../Layout'

export default function MobileDropdown({ title = '', items = [], icon, className }) {
  return (
    <Menu>
      {({ open }) => (
        <>
          <div className="flex items-center">
            <Menu.Button className="flex items-center justify-between w-full py-3 capitalize">
              <span className="w-full text-left">{title}</span>
              <span className="relative z-0 lg:pr-0">
                {open ? <FiChevronUp className="w-3 h-auto" /> : <FiChevronDown className="w-3 h-auto" />}
              </span>
            </Menu.Button>
          </div>

          <Transition
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Menu.Items className="pl-4 capitalize border-l-[1px] border-woodsmoke-500">
              {items.length > 0 && (
                <div>
                  {items.map((item, index) => {
                    if (item.hasOwnProperty('items') && item.items.length > 0) {
                      return (
                        <div key={index}>
                          <MobileDropdown title={item.title} items={item.items} />
                        </div>
                      )
                    } else {
                      return (
                        <Menu.Item key={index}>
                          {/* <MobileDropdownItem title={item.title} href={item.href} /> */}

                          <MobileLink
                            href={item.href}
                            className="block py-3 capitalize transition duration-150 hover:opacity-80 lg:!text-sm"
                          >
                            {item.title}
                          </MobileLink>
                        </Menu.Item>
                      )
                    }
                  })}
                </div>
              )}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
