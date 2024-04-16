import SecondaryButton from "@/Components/General/atoms/SecondaryButton";
import InputEmailField from "@/Components/General/molecules/InputEmailField";
import InputFileField from "@/Components/General/molecules/InputFileField";
import InputPasswordField from "@/Components/General/molecules/InputPasswordField";
import InputTextField from "@/Components/General/molecules/InputTextField";
import RegisterCard from "@/Components/Register/molecules/RegisterCard";
import { useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, errors } = useForm({
        name: "",
        class_id: "",
        email: "",
        password: "",
        password_confirmation: "",
        photo: null,
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <section className="flex justify-center items-center min-h-screen">
            <RegisterCard>
                <form onSubmit={handleOnSubmit} className="space-y-6">
                    <InputTextField
                        autoFocus
                        label="Nama"
                        name="name"
                        placeholder="Nama"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        error={errors.name}
                    />
                    <InputEmailField
                        label="Email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        error={errors.email}
                    />
                    <InputPasswordField
                        label="Password"
                        name="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        error={errors.password}
                    />
                    <InputPasswordField
                        label="Konfirmasi Password"
                        name="password_confirmation"
                        placeholder="Konfirmasi Password"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        error={errors.password_confirmation}
                    />
                    <InputFileField
                        label="Foto"
                        name="photo"
                        placeholder="Unggah Foto"
                        fileType="image/*"
                        value={data.photo?.name}
                        onChange={(e) => setData("photo", e.target.files[0])}
                        error={errors.photo}
                    />
                    <div className="mx-auto w-fit">
                        <SecondaryButton type="submit" text="Registrasi" />
                    </div>
                </form>
            </RegisterCard>
        </section>
    );
}
