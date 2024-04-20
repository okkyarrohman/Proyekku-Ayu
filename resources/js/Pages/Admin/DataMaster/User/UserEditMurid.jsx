import DropdownItem from "@/Components/General/atoms/DropdownItem";
import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import SecondaryButton from "@/Components/General/atoms/SecondaryButton";
import DropdownField from "@/Components/General/molecules/DropdownField";
import InputEmailField from "@/Components/General/molecules/InputEmailField";
import InputFileField from "@/Components/General/molecules/InputFileField";
import InputPasswordField from "@/Components/General/molecules/InputPasswordField";
import InputTextField from "@/Components/General/molecules/InputTextField";
import UserCreateTemplate from "@/Components/User/template/UserCreateTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";

export default function UserEditMurid({ auth }) {
    const { users, classes } = usePage().props;

    console.log(users);

    const { data, setData, post, errors } = useForm({
        _method: "PATCH",
        name: users.name,
        class_id: users.class_id,
        email: users.email,
        password: users.password,
        photo: users.photo,
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("user-admin.updateMurid", users.id));
    };

    return (
        <AuthenticatedLayout authUser={auth.user} title="Edit User Murid">
            <UserCreateTemplate title="Detail Akun Murid">
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
                    <DropdownField
                        color="text-black"
                        label="Kelas"
                        name="class_id"
                        placeholder="Kelas"
                        value={
                            classes.find(
                                (classItem) => classItem.id === data.class_id
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
                        value={data.photo?.name ? data.photo?.name : data.photo}
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
