import DropdownItem from "@/Components/General/atoms/DropdownItem";
import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import PrimaryLink from "@/Components/General/atoms/PrimaryLink";
import DropdownField from "@/Components/General/molecules/DropdownField";
import InputEmailField from "@/Components/General/molecules/InputEmailField";
import InputFileField from "@/Components/General/molecules/InputFileField";
import InputPasswordField from "@/Components/General/molecules/InputPasswordField";
import InputTextField from "@/Components/General/molecules/InputTextField";
import CreateTemplate from "@/Components/General/template/CreateTemplate";
import ProfileField from "@/Components/Profile/atoms/ProfileField";
import ProfilePhoto from "@/Components/Profile/atoms/ProfilePhoto";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formatDate } from "@/utils/formatDate";
import { useForm, usePage } from "@inertiajs/react";

export default function ProfileEdit({ auth }) {
    const { users, classes } = usePage().props;

    const { data, setData, post, errors } = useForm({
        _method: "PATCH",
        name: users.name,
        class_id: users.class_id,
        nip: users.nip,
        photo: users.photo,
        email: users.email,
        password: users.password,
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("profile.update", users.id));
    };

    return (
        <AuthenticatedLayout authUser={auth.user} title="Pengaturan Akun">
            <CreateTemplate title="EDIT AKUN">
                <form onSubmit={handleOnSubmit} className="space-y-6">
                    <InputTextField
                        autoFocus
                        color="text-black"
                        label="Nama"
                        name="name"
                        placeholder="Nama"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        error={errors.name}
                    />
                    {auth.user.role == "murid" && (
                        <DropdownField
                            color="text-black"
                            label="Kelas"
                            name="class_id"
                            placeholder="Kelas"
                            value={
                                classes.find(
                                    (classItem) =>
                                        classItem.id === data.class_id
                                )?.name
                            }
                            error={errors.class_id}
                        >
                            {classes.map((classItem) => {
                                return (
                                    <DropdownItem
                                        option={classItem.name}
                                        onClick={() =>
                                            setData("class_id", classItem.id)
                                        }
                                    />
                                );
                            })}
                        </DropdownField>
                    )}
                    {auth.user.role == "guru" && (
                        <InputTextField
                            color="text-black"
                            label="NIP"
                            name="nip"
                            placeholder="NIP"
                            value={data.nip}
                            onChange={(e) => setData("nip", e.target.value)}
                            error={errors.nip}
                        />
                    )}
                    <InputTextField
                        disabled
                        color="text-black"
                        label="Jabatan"
                        name="role"
                        placeholder="Jabatan"
                        value={users.role}
                    />
                    <InputTextField
                        disabled
                        color="text-black"
                        label="Akun Dibuat"
                        name="created_at"
                        placeholder="Akun Dibuat"
                        value={formatDate(users.created_at)}
                    />
                    <InputFileField
                        color="text-black"
                        label="Foto Profil"
                        name="photo"
                        placeholder="Unggah Foto"
                        fileType="image/*"
                        value={data.photo?.name ? data.photo?.name : data.photo}
                        onChange={(e) => setData("photo", e.target.files[0])}
                        error={errors.photo}
                    />
                    <InputEmailField
                        color="text-black"
                        label="Email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        error={errors.email}
                    />
                    <InputPasswordField
                        color="text-black"
                        label="Password"
                        name="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        error={errors.password}
                    />
                    <div className="flex justify-end">
                        <PrimaryButton type="submit" text="Simpan" />
                    </div>
                </form>
            </CreateTemplate>
        </AuthenticatedLayout>
    );
}
