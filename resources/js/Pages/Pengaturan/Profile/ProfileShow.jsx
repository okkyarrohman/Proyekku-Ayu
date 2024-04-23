import PrimaryLink from "@/Components/General/atoms/PrimaryLink";
import InputTextField from "@/Components/General/molecules/InputTextField";
import ProfileField from "@/Components/Profile/atoms/ProfileField";
import ProfilePhoto from "@/Components/Profile/atoms/ProfilePhoto";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formatDate } from "@/utils/formatDate";
import { usePage } from "@inertiajs/react";

export default function ProfileShow({ auth }) {
    const { users } = usePage().props;

    console.log(users);

    return (
        <AuthenticatedLayout authUser={auth.user} title="Pengaturan Akun">
            <ProfilePhoto name={users.name} photo={users.photo} />
            <div className="rounded-xl bg-white p-8 space-y-6">
                <ProfileField text="Nama" value={users.name} />
                {auth.user.role == "murid" && (
                    <ProfileField text="Kelas" value={users.classes.name} />
                )}
                {auth.user.role == "guru" && (
                    <ProfileField text="NIP" value={users.nip} />
                )}
                <ProfileField text="Jabatan" value={users.role} />
                {auth.user.role == "guru" ||
                    (auth.user.role == "murid" && (
                        <ProfileField
                            text="Akun Dibuat"
                            value={formatDate(users.created_at)}
                        />
                    ))}
                <ProfileField text="Email" value={users.email} />
                <ProfileField text="Password" value="Password" />
                <div className="flex justify-end">
                    <PrimaryLink text="Edit" href={route("profile.edit")} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
