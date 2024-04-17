import SidebarLink from "@/Components/General/atoms/SidebarLink";
import SidebarProfile from "@/Components/General/atoms/SidebarProfile";
import Title from "@/Components/General/atoms/Title";
import Navbar from "@/Components/General/molecules/Navbar";
import Sidebar from "@/Components/General/molecules/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Icon } from "@iconify/react";
import { usePage } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return <AuthenticatedLayout authUser={auth.user}></AuthenticatedLayout>;
}
