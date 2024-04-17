import { Icon } from "@iconify/react";

export default function Navbar() {
    return (
        <nav className="bg-primary-100 h-14 flex justify-end items-center px-6 fixed top-0 inset-x-0 z-[9999]">
            <Icon icon="bxs:bell" width="1.7rem" className="text-white" />
        </nav>
    );
}
