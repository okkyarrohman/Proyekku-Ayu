import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import SecondaryButton from "@/Components/General/atoms/SecondaryButton";
import InputEmailField from "@/Components/General/molecules/InputEmailField";
import InputFileField from "@/Components/General/molecules/InputFileField";
import InputPasswordField from "@/Components/General/molecules/InputPasswordField";
import InputTextField from "@/Components/General/molecules/InputTextField";
import UserCreateTemplate from "@/Components/User/template/UserCreateTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";

export default function UserShowGuru({ auth }) {
    const { users } = usePage().props;

    const { data, setData, post, errors } = useForm({
        _method: "PATCH",
        name: users.name,
        nip: users.nip,
        email: users.email,
        password: users.password,
        photo: users.photo,
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("user-admin.updateGuru", users.id));
    };

    return (
        <AuthenticatedLayout authUser={auth.user} title="Detail User Guru">
            <UserCreateTemplate title="Detail Akun Guru">
                <form onSubmit={handleOnSubmit} className="space-y-6">
                    <InputTextField
                        autoFocus
                        disabled
                        color="text-black"
                        label="Nama"
                        name="name"
                        placeholder="Nama"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        error={errors.name}
                    />
                    <InputTextField
                        disabled
                        color="text-black"
                        label="NIP"
                        name="nip"
                        placeholder="NIP"
                        value={data.nip}
                        onChange={(e) => setData("nip", e.target.value)}
                        error={errors.nip}
                    />
                    <InputEmailField
                        disabled
                        color="text-black"
                        label="Email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        error={errors.email}
                    />
                    <InputPasswordField
                        disabled
                        color="text-black"
                        label="Password"
                        name="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        error={errors.password}
                    />
                    <InputFileField
                        disabled
                        color="text-black"
                        label="Foto"
                        name="photo"
                        placeholder="Unggah Foto"
                        fileType="image/*"
                        value={data.photo?.name ? data.photo?.name : data.photo}
                        onChange={(e) => setData("photo", e.target.files[0])}
                        error={errors.photo}
                    />
                </form>
            </UserCreateTemplate>
        </AuthenticatedLayout>
    );
}
