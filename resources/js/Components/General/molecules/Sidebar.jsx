import { usePage } from "@inertiajs/react";
import SidebarLink from "../atoms/SidebarLink";
import SidebarProfile from "../atoms/SidebarProfile";
import {
    muridSidebarItems,
    guruSidebarItems,
    adminSidebarItems,
} from "@/utils/sidebarLinks";

export default function Sidebar({ authUser }) {
    const { url } = usePage();

    const sidebarLinks =
        authUser.role == "guru"
            ? guruSidebarItems
            : authUser.role == "admin"
            ? adminSidebarItems
            : muridSidebarItems;

    return (
        <aside className="min-h-screen bg-primary-200 w-56 overflow-y-auto ps-6 py-9 lg:flex hidden flex-col justify-between fixed z-[99999] top-0 left-0">
            <div>
                <div className="pe-6">
                    <SidebarProfile name={authUser.name} img={authUser.photo} />
                    <hr className="bg-white my-4" />
                </div>
                {/* Menu Item */}
                <ul>
                    {sidebarLinks.map((sidebarItem, index) => {
                        return (
                            <SidebarLink
                                key={index}
                                text={sidebarItem.name}
                                icon={sidebarItem.icon}
                                href={sidebarItem.link}
                                active={url.startsWith(sidebarItem.url)}
                            />
                        );
                    })}
                </ul>
            </div>

            <ul>
                <SidebarLink
                    text="Logout"
                    href={route("logout")}
                    method="POST"
                    as="button"
                    icon="majesticons:door-exit"
                />
            </ul>
        </aside>
    );
}
