import CardMenuItem from "@/Components/User/atoms/CardMenuItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function UserAdd({ auth }) {
    const menuItems = [
        {
            title: "Add User Guru",
            link: route("user-admin.create", "guru"),
        },
        {
            title: "Add User Murid",
            link: route("user-admin.create", "murid"),
        },
    ];

    return (
        <AuthenticatedLayout authUser={auth.user} title="Add User">
            <section className="grid grid-cols-3 gap-16">
                {menuItems.map((menu, index) => {
                    return (
                        <CardMenuItem
                            key={index}
                            text={menu.title}
                            link={menu.link}
                        />
                    );
                })}
            </section>
        </AuthenticatedLayout>
    );
}
