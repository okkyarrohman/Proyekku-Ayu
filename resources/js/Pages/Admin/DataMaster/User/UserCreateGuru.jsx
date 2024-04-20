import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import SecondaryButton from "@/Components/General/atoms/SecondaryButton";
import InputEmailField from "@/Components/General/molecules/InputEmailField";
import InputFileField from "@/Components/General/molecules/InputFileField";
import InputPasswordField from "@/Components/General/molecules/InputPasswordField";
import InputTextField from "@/Components/General/molecules/InputTextField";
import UserCreateTemplate from "@/Components/User/template/UserCreateTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

export default function UserCreateGuru({ auth }) {
    const { data, setData, post, errors } = useForm({
        name: "",
        nip: "",
        email: "",
        password: "",
        photo: null,
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("user-admin.storeGuru"));
    };

    return (
        <AuthenticatedLayout authUser={auth.user} title="Add User Guru">
            <UserCreateTemplate title="Detail Akun Guru">
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
                    <InputTextField
                        color="text-black"
                        label="NIP"
                        name="nip"
                        placeholder="NIP"
                        value={data.nip}
                        onChange={(e) => setData("nip", e.target.value)}
                        error={errors.nip}
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
                    <InputFileField
                        color="text-black"
                        label="Foto"
                        name="photo"
                        placeholder="Unggah Foto"
                        fileType="image/*"
                        value={data.photo?.name}
                        onChange={(e) => setData("photo", e.target.files[0])}
                        error={errors.photo}
                    />
                    <div className="ml-auto w-fit">
                        <PrimaryButton type="submit" text="Tambah" />
                    </div>
                </form>
            </UserCreateTemplate>
        </AuthenticatedLayout>
    );
}
