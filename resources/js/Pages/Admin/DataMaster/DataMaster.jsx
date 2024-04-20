import CardMenuItem from "@/Components/General/molecules/CardMenuItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function DataMaster({ auth }) {
    const menuItems = [
        {
            title: "Data Master Guru",
            link: route("user-admin.index", "guru"),
            icon: "gravity-ui:database-fill",
        },
        {
            title: "Data Master Murid",
            link: route("user-admin.index", "murid"),
            icon: "gravity-ui:database-fill",
        },
        {
            title: "Tambah User",
            link: route("user-admin.add"),
            icon: "mingcute:user-add-2-fill",
        },
        {
            title: "Tambah Mata Pelajaran",
            link: "",
            icon: "mdi:archive-add",
        },
    ];

    return (
        <AuthenticatedLayout authUser={auth.user} title="Data Master">
            <section className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-8">
                {menuItems.map((menu, index) => {
                    return (
                        <CardMenuItem
                            key={index}
                            title={menu.title}
                            link={menu.link}
                            icon={menu.icon}
                        />
                    );
                })}
            </section>
        </AuthenticatedLayout>
    );
}
