import CardMenuImage from "@/Components/General/molecules/CardMenuImage";
import CardMenuItem from "@/Components/General/molecules/CardMenuItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Laporan({ auth }) {
    const menuItems = [
        {
            title: "Hasil Belajar",
            link: route("hasil-belajar-guru.index"),
            img: "/assets/cartoon1-image.png",
        },
        {
            title: "Jurnal Kehadiran",
            link: route("absensi-guru.index"),
            img: "/assets/cartoon2-image.png",
        },
    ];

    return (
        <AuthenticatedLayout authUser={auth.user} title="Laporan">
            <section className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-8">
                {menuItems.map((menu, index) => {
                    return (
                        <CardMenuImage
                            key={index}
                            title={menu.title}
                            link={menu.link}
                            img={menu.img}
                        />
                    );
                })}
            </section>
        </AuthenticatedLayout>
    );
}
