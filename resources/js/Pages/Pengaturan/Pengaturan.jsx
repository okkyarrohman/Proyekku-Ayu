import CardMenuItem from "@/Components/General/molecules/CardMenuItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Pengaturan({ auth }) {
    const menuItems = [
        {
            title: "Pengaturan Akun",
            link: route("materi.index"),
            icon: "heroicons:user-solid",
        },
        {
            title: "Panduan Aplikasi",
            link: "",
            icon: "material-symbols:help",
        },
    ];

    return (
        <AuthenticatedLayout authUser={auth.user}>
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
