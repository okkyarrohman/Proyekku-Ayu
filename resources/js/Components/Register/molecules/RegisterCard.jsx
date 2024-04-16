import Description from "@/Components/General/atoms/Description";
import Title from "@/Components/General/atoms/Title";

export default function RegisterCard({ children }) {
    return (
        <div className="bg-primary-100 rounded-xl lg:p-10 p-6 m-6 lg:w-3/5 w-full">
            <div className="mb-8">
                <Title
                    title="Registrasi Akun"
                    align="text-center"
                    size="lg:text-4xl text-3xl"
                />
                <Description
                    desc="Harap lengkapi data-data di bawah ini!"
                    align="text-center"
                    size="lg:text-xl text-lg"
                />
            </div>
            {children}
        </div>
    );
}
