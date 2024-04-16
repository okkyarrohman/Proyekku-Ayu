import Title from "@/Components/General/atoms/Title";

export default function LoginCard({ children }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[3.125rem] border-4 border-primary-100 overflow-hidden w-4/5">
            <div className="bg-white">
                <img
                    src="/assets/app-logo.png"
                    alt="Proyekku"
                    className="lg:w-[29rem] w-56 mx-auto object-cover"
                />
            </div>
            <div className="bg-primary-100 space-y-6 flex flex-col justify-center lg:py-0 py-6">
                <Title
                    title="LOGIN"
                    align="text-center"
                    size="text-[2.5rem]"
                    weight="font-bold"
                />
                {children}
            </div>
        </div>
    );
}
