import { Dialog, Transition } from '@headlessui/react'
import { FiXCircle } from 'react-icons/fi'
import { Fragment, useState, useRef } from 'react'
import Loader from '../shared/Loader'

export default function TransitionModal({ onClose, isOpen, children, isLoaderNeeded }) {
  // video player options and functions

  return (
    <>
      <Transition show={isOpen} as={Fragment} appear>
        <Dialog as="div" className="relative z-50 " onClose={onClose} open={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/75" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-2xl text-left align-middle transition-all transform ">
                  <div>
                    <FiXCircle
                      className="w-10 h-10 pb-1.5 ml-auto md:-mr-8 mr-0 text-white cursor-pointer"
                      onClick={onClose}
                    />
                    {isLoaderNeeded !== false && <Loader />}

                    <div className="">{children}</div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
