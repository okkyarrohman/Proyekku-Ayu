import { Icon } from "@iconify/react";
import ApplicationLogo from "../molecules/ApplicationLogo";
import NavLink from "../atoms/NavLink";
import AuthLink from "../molecules/AuthLink";
import { useState } from "react";

export default function Navbar({ authUser }) {
    const [isOpen, setIsOpen] = useState(false);

    const hamburgerOnClick = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { text: "Home", link: "#home" },
        { text: "Feature", link: "#feature" },
        { text: "About Us", link: "#about" },
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="lg:flex hidden items-center justify-between py-2 bg-white px-4 relative z-[99999] top-0">
                <ApplicationLogo />
                <ul className="space-x-6">
                    {navItems.map((item) => {
                        return <NavLink text={item.text} link={item.link} />;
                    })}
                </ul>
                <AuthLink />
            </nav>

            {/* Mobile Navbar */}
            <nav className="flex lg:hidden items-center justify-between py-2 bg-white px-4 relative z-[99999] top-0">
                <ApplicationLogo />
                <button onClick={hamburgerOnClick}>
                    <Icon
                        icon={
                            isOpen
                                ? "majesticons:close"
                                : "iconamoon:menu-burger-horizontal"
                        }
                        width={isOpen ? "2.3rem" : "1.7rem"}
                        className="text-primary-100"
                    />
                </button>
            </nav>
            {isOpen && (
                <div className="h-fit bg-white px-4 space-y-6 py-6">
                    <hr className="bg-primary-100 h-0.5" />
                    <ul className="flex flex-col space-y-6 items-center">
                        {navItems.map((item) => {
                            return (
                                <NavLink text={item.text} link={item.link} />
                            );
                        })}
                    </ul>
                    <hr className="bg-primary-100 h-0.5" />
                    <div className="mx-auto w-fit">
                        <AuthLink />
                    </div>
                </div>
            )}
        </>
    );
}
