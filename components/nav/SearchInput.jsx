import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function SearchInput() {
    // const [isOpen, setIsOpen] = useState(false);
    let [isOpen, setIsOpen] = useState(false);
    const [term, setTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    let i = 0;
    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const handleModal = (e) => {
        openModal();
    };

    const openSearchBox = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="lg:hidden">
            <div className="w-full">
                {/*  Show search icon on Mobile */}

                <button className="px-2 py-2 cursor-pointer" onClick={(e) => handleModal(e)}>
                    <FiSearch className="w-5 h-5 " />
                </button>

                <Transition appear show={isOpen}>
                    <Dialog
                        as="div"
                        className="relative "
                        onClose={() => {
                            closeModal();
                        }}
                    >
                        <div className="fixed inset-0 z-0 bg-transparent cursor-pointer" aria-hidden="true" />
                        <Transition.Child
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Dialog.Panel>
                                <div className="fixed top-0 z-50 w-full text-gray-600 bg-white border-t border-l border-gray-100 shadow lg:inset-x-0 lg:absolute lg:top-full">
                                    <div className="sticky inset-x-0 top-0 w-full px-4 py-2 bg-gray-100 lg:hidden">
                                        <input
                                            type="text"
                                            placeholder="Search resources, docs, catalog and offerings..."
                                            className="block w-full h-10 px-5 text-sm placeholder-gray-200 bg-gray-200 border-0 border-gray-100 group focus:border-gray-700 focus:ring-0 focus:ring-gray-700 focus:ring-opacity-0"
                                        />
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        ;
                    </Dialog>
                </Transition>

                {/* input field */}

                {/*end of  input field */}
            </div>
        </div>
    );
}
