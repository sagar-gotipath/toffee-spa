import { useState, useRef, useEffect, useContext } from "react";
import { Transition } from "@headlessui/react";
import { FiMenu, FiX } from "react-icons/fi";
import DropdownMenu from "./nav/DropdownMenu.jsx";
import Logo from "./nav/Logo.jsx";
import NormalMenu from "./nav/NormalMenu.jsx";
import MobileDropdown from "./nav/MobileDropdown.jsx";
import MegaMenuTransitionCollapse from "./nav/MegaMenuTransition.jsx";
import { GlobalContext } from "./Layout.jsx";
import CenterWrapper from "./shared/CenterWrapper.jsx";

export default function Header({ logo, navData = [], headerButtons = [] }) {
    const { isDisplayMobileNav, handleDisplayMobileNav } =
        useContext(GlobalContext);
    const navToggler = useRef(null);
    const navItems = useRef(null);
    const mobileNav = useRef(null);

    const headerContainerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                mobileNav.current &&
                !mobileNav.current.contains(event.target)
            ) {
                handleDisplayMobileNav("false");
            }
        }

        document.addEventListener("click", handleClickOutside);

        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    // useEffect(() => {
    //     function handleHeaderBorder() {
    //         if (
    //             document.body.scrollTop > 50 ||
    //             document.documentElement.scrollTop > 50
    //         ) {
    //             headerContainerRef.current.classList.add("border-b");
    //             headerContainerRef.current.classList.add("border-neutral-200");
    //         } else {
    //             // headerContainerRef.current.classList.remove('border-b border-neutral-200')
    //             headerContainerRef.current.classList.remove("border-b");
    //             headerContainerRef.current.classList.remove(
    //                 "border-neutral-200"
    //             );
    //         }
    //     }

    //     window.addEventListener("scroll", handleHeaderBorder);

    //     return () => window.removeEventListener("scroll", handleHeaderBorder);
    // }, []);

    return (
        <>
            <header
                className="fixed top-0 z-50 w-full px-0 leading-none transition duration-300 bg-white shadow-sm"
                ref={headerContainerRef}
            >
                {/* Desktop Navigation */}

                <CenterWrapper>
                    <nav className="relative hidden w-full px-12 mx-auto space-x-10 text-sm h-14 lg:flex lg:items-center lg:justify-between lg:flex-row ">
                        {/* logo */}
                        <div className="">
                            <Logo
                                src="/assets/images/logo.svg"
                                alt="gotiPath logo"
                            />
                        </div>
                        {/*  Main Nav  */}
                        <div className="">
                            <div className="flex flex-col lg:space-x-5 lg:justify-end lg:items-center lg:flex-row">
                                {/*  Left Items  */}
                                <div className="flex items-center flex-1 space-x-4">
                                    <div className="flex space-x-8 text-zinc-900">
                                        {navData.map((navItem, index) => {
                                            if (navItem.type === "megamenu") {
                                                return (
                                                    // <MegaMenu title={navItem.title} key={index} menuItems={navItem.items}></MegaMenu>

                                                    <MegaMenuTransitionCollapse
                                                        title={navItem.title}
                                                        key={index}
                                                        menuItems={
                                                            navItem.items
                                                        }
                                                    ></MegaMenuTransitionCollapse>
                                                );
                                            } else if (
                                                navItem.type === "dropdown"
                                            ) {
                                                return (
                                                    <DropdownMenu
                                                        key={index}
                                                        title={navItem.type}
                                                        items={navItem.items}
                                                    />
                                                );
                                            } else {
                                                return (
                                                    <NormalMenu
                                                        title={navItem.title}
                                                        href={navItem.href}
                                                        key={index}
                                                    />
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </CenterWrapper>

                {/*  Mobile Navigation */}
                <nav className="relative max-h-screen px-4 lg:hidden">
                    <div className="flex items-center justify-between px-0 py-1.5 min-h-14">
                        <div className="flex items-center h-full">
                            <Logo
                                src="/assets/images/logo.svg"
                                alt="website logo"
                            />
                        </div>
                        <div className="">
                            <span
                                ref={navToggler}
                                className="inline-block px-2 py-2 cursor-pointer"
                                onClick={() => {
                                    console.log("clicked");
                                    handleDisplayMobileNav();
                                }}
                            >
                                {isDisplayMobileNav && (
                                    <FiX className="w-6 h-6" />
                                )}
                                {!isDisplayMobileNav && (
                                    <FiMenu className="w-6 h-6" />
                                )}
                            </span>

                            {/* transtion */}
                            <Transition
                                show={isDisplayMobileNav}
                                as="div"
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                                className="absolute left-0 z-50 w-full -mt-1 overflow-y-auto shadow-md bg-inherit top-full"
                                ref={mobileNav}
                            >
                                <div
                                    ref={navItems}
                                    className="w-full pb-3 overflow-y-auto bg-white top-full"
                                >
                                    <div className="px-4 py-3">
                                        {navData.map((menuItem, index) => {
                                            if (
                                                menuItem.type === "megamenu" ||
                                                menuItem.type === "dropdown"
                                            ) {
                                                return (
                                                    <MobileDropdown
                                                        title={menuItem.title}
                                                        items={menuItem.items}
                                                        key={index}
                                                    />
                                                );
                                            } else {
                                                return (
                                                    <NormalMenu
                                                        title={menuItem.title}
                                                        href={menuItem.href}
                                                        key={index}
                                                    />
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                            </Transition>

                            {/* end transtion */}
                        </div>

                        {/* <div className="">
                            <SearchInput></SearchInput>
                        </div> */}
                    </div>
                </nav>
            </header>
        </>
    );
}
