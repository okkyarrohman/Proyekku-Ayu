import CardMenuItem from "@/Components/General/molecules/CardMenuItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function RuangProyek({ auth }) {
    const menuItems = [
        {
            title: "Materi Proyek",
            link: route("materi.index"),
            icon: "ion:book",
        },
        { title: "Tugas Proyek", link: "", icon: "clarity:flow-chart-solid" },
        { title: "Kelompok Proyek", link: "", icon: "mingcute:group-3-fill" },
    ];

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
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
