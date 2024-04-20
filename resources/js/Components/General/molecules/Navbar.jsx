import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";
import SecondaryLink from "../atoms/SecondaryLink";
import { useState } from "react";
import {
    guruSidebarItems,
    adminSidebarItems,
    muridSidebarItems,
} from "@/utils/sidebarLinks";
import NavbarProfile from "../atoms/NavbarProfile";

export default function Navbar({ authUser }) {
    const [isOpen, setIsOpen] = useState(false);

    const navbarLinks =
        authUser.role == "guru"
            ? guruSidebarItems
            : authUser.role == "admin"
            ? adminSidebarItems
            : muridSidebarItems;

    const handleShowMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-primary-100 px-6 fixed top-0 inset-x-0 z-[9999]">
                <div className="flex justify-between lg:justify-end items-center gap-4 min-h-14">
                    <NavbarProfile name={authUser.name} img={authUser.photo} />
                    <div className="flex items-center gap-4">
                        <Link href="">
                            <Icon
                                icon="bxs:bell"
                                width="1.7rem"
                                className="text-white"
                            />
                        </Link>
                        <button type="button" onClick={handleShowMobileMenu}>
                            <Icon
                                icon={
                                    isOpen
                                        ? "pajamas:close"
                                        : "iconamoon:menu-burger-horizontal"
                                }
                                width="1.7rem"
                                className="text-white block lg:hidden"
                            />
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="bg-primary-100 h-full lg:hidden block pt-3 pb-6">
                        <hr className="bg-white mb-6" />
                        <div className="w-3/5 mx-auto space-y-4">
                            {navbarLinks.map((navItem, index) => {
                                return (
                                    <SecondaryLink
                                        text={navItem.name}
                                        href={navItem.link}
                                        full
                                    />
                                );
                            })}
                        </div>
                        <hr className="bg-white my-6" />
                        <Link
                            as="button"
                            href={route("logout")}
                            method="POST"
                            className="text-white font-semibold flex items-center justify-center gap-3 hover:bg-primary-200 w-fit py-1.5 px-6 rounded-full ml-auto"
                        >
                            <Icon icon="majesticons:door-exit" width="1.5rem" />
                            Logout
                        </Link>
                    </div>
                )}
            </nav>
        </>
    );
}
