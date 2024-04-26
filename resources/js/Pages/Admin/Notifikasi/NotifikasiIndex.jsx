import NotifikasiRole from "@/Components/Notifikasi/atoms/NotifikasiRole";
import NotifikasiCard from "@/Components/Notifikasi/molecules/NotifikasiCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formatDate } from "@/utils/formatDate";
import { Icon } from "@iconify/react";
import { Link, usePage } from "@inertiajs/react";

export default function NotifikasiIndex({ auth }) {
    const { notifikasis } = usePage().props;

    return (
        <AuthenticatedLayout authUser={auth.user} title="Notifikasi">
            <div className="space-y-6">
                {notifikasis.map((notifikasi, index) => {
                    return (
                        <NotifikasiCard
                            key={index}
                            message={notifikasi.message}
                            date={notifikasi.created_at}
                            from={notifikasi.from}
                            role={auth.user.role}
                        />
                    );
                })}
            </div>
        </AuthenticatedLayout>
    );
}
