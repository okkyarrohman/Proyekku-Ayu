import CardMenuImage from "@/Components/General/molecules/CardMenuImage";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Pengaturan({ auth }) {
    const menuItems = [
        {
            title: "Pengaturan Akun",
            link: route("profile.show"),
            img: "/assets/cartoon1-image.png",
        },
        {
            title: "Penggunaan Aplikasi",
            link: route("panduan.show"),
            img: "/assets/cartoon2-image.png",
        },
    ];

    return (
        <AuthenticatedLayout authUser={auth.user} title="Pengaturan">
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
