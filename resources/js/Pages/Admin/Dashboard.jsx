import LoginStatus from "@/Components/Dashboard/atoms/LoginStatus";
import WelcomeText from "@/Components/Dashboard/atoms/WelcomeText";
import DataCard from "@/Components/Dashboard/molecules/DataCard";
import UserLoginList from "@/Components/Dashboard/molecules/UserLoginList";
import PrimaryLink from "@/Components/General/atoms/PrimaryLink";
import Title from "@/Components/General/atoms/Title";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formatDate } from "@/utils/formatDate";
import { formatFullDate } from "@/utils/formatFullDate";
import { formatFullDateHour } from "@/utils/formatFullDateHour";
import { Icon } from "@iconify/react";
import { usePage } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    const { users, mapels } = usePage().props;

    console.log(users);

    const currentDate = new Date();

    return (
        <AuthenticatedLayout authUser={auth.user} title="Dashboard">
            <WelcomeText user={auth.user.name} />
            <div className="grid grid-cols-2 gap-x-16">
                <div className="space-y-6">
                    <DataCard
                        icon="mingcute:user-add-2-fill"
                        item="User"
                        itemLength={users.length}
                        link={route("user-admin.add")}
                    />
                    <DataCard
                        icon="mdi:archive-add"
                        item="Mata Pelajaran"
                        itemLength={mapels.length}
                        link={route("mapel-admin.create")}
                    />
                </div>
                <div className="space-y-3">
                    <Title
                        title="User Login"
                        color="text-primary-100"
                        align="text-center"
                    />
                    {users.map((user, index) => {
                        return (
                            <UserLoginList
                                key={index}
                                user={user.name}
                                img={user.photo}
                                isLogin={user.session_login_at}
                            />
                        );
                    })}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
