import ThemeBtn from "./ThemeBtn";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaPhoneAlt } from "react-icons/fa";



const Navbar = () => {
    return (
        <header>
            <nav className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
                <div className="mx-auto max-w-11/12 px-2 sm:px-6 lg:px-1">
                    <div className="relative flex h-24 items-center justify-between">


                        <div className="flex items-center justify-between ">
                            <div className="flex shrink-0 items-center">
                                <img
                                    src="images/logo-white.webp"
                                    alt="Your Company"
                                    className="w-32 md:w-36 lg:w-48"
                                />
                            </div>


                        </div>

                        <div className="flex items-center md:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button
                                type="button"
                                command="--toggle"
                                commandfor="mobile-menu"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    data-slot="icon"
                                    aria-hidden="true"
                                    className="size-6 in-aria-expanded:hidden"
                                >
                                    <path
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    data-slot="icon"
                                    aria-hidden="true"
                                    className="size-6 not-in-aria-expanded:hidden"
                                >
                                    <path
                                        d="M6 18 18 6M6 6l12 12"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="flex items-center gap-3 xl:gap-6">
                            <div className="hidden md:flex gap-3 xl:gap-5">
                                <a
                                    href="#"
                                    aria-current="page"
                                    className="hover-link font-medium text-xs xl:text-base"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="hover-link font-medium text-xs xl:text-base"
                                >
                                    About
                                </a>

                                <Menu as="div" className="relative inline-block">
                                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 focus-visible:outline-0">
                                        <a
                                            href="#"
                                            className="hover-link font-medium text-xs xl:text-base inline-flex items-center"
                                        >
                                            Services
                                            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5" />
                                        </a>

                                    </MenuButton>

                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                    >
                                        <div className="py-1">
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                                >
                                                    Edit
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                                >
                                                    Duplicate
                                                </a>
                                            </MenuItem>
                                        </div>
                                        <div className="py-1">
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                                >
                                                    Archive
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                                >
                                                    Move
                                                </a>
                                            </MenuItem>
                                        </div>
                                        <div className="py-1">
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                                >
                                                    Share
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                                >
                                                    Add to favorites
                                                </a>
                                            </MenuItem>
                                        </div>
                                        <div className="py-1">
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                                >
                                                    Delete
                                                </a>
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </Menu>

                                <a
                                    href="#"
                                    className="hover-link font-medium text-xs xl:text-base"
                                >
                                    Portfolio
                                </a>
                                <a
                                    href="#"
                                    className="hover-link font-medium text-xs xl:text-base"
                                >
                                    Packages
                                </a>
                                <a
                                    href="#"
                                    className="hover-link font-medium text-xs xl:text-base"
                                >
                                    Technologies
                                </a>
                                <a
                                    href="#"
                                    className="hover-link font-medium text-xs xl:text-base"
                                >
                                    Industries
                                </a>
                                <a
                                    href="#"
                                    className="hover-link font-medium text-xs xl:text-base"
                                >
                                    Solutions
                                </a>
                                <a
                                    href="#"
                                    className="font-medium text-xs xl:text-base hidden xl:inline-flex items-center gap-2"
                                >
                                    <FaPhoneAlt className="size-4.5 theme-color" />
                                    (833) 390-1481
                                </a>
                            </div>
                            <div className="hidden sm:block">
                                <ThemeBtn title={"Get A Free Quote"} textClass="text-xs xl:text-base" />
                            </div>
                        </div>
                    </div>
                </div>

                <el-disclosure id="mobile-menu" hidden className="block md:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {/* <!-- Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" --> */}
                        <a
                            href="#"
                            aria-current="page"
                            className="block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white"
                        >
                            Dashboard
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                        >
                            Team
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                        >
                            Projects
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                        >
                            Calendar
                        </a>
                    </div>
                </el-disclosure>
            </nav>
        </header>
    );
};

export default Navbar;
