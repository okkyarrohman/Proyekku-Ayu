import InputError from "@/Components/Inertia/InputError";
import LoginButton from "@/Components/Login/atoms/LoginButton";
import LoginInputEmail from "@/Components/Login/molecules/LoginInputEmail";
import LoginInputPassword from "@/Components/Login/molecules/LoginInputPassword";
import LoginCard from "@/Components/Login/molecules/LoginCard";
import { useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, errors } = useForm({
        email: "",
        password: "",
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <section className="flex justify-center items-center h-screen">
            <LoginCard>
                <form
                    onSubmit={handleOnSubmit}
                    className="w-4/5 mx-auto space-y-8"
                >
                    <LoginInputEmail
                        autoFocus
                        name="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        placeholder="Email"
                        error={errors.email}
                    />
                    <LoginInputPassword
                        name="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        placeholder="Password"
                        error={errors.password}
                    />
                    <LoginButton />
                </form>
            </LoginCard>
        </section>
    );
}
