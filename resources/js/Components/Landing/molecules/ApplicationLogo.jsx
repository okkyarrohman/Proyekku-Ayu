import Title from "@/Components/General/atoms/Title";

export default function ApplicationLogo() {
    return (
        <div className="flex items-center">
            <img
                src="/assets/app-logo.png"
                alt="Proyekku"
                className="w-20 object-cover"
            />
            <Title
                title="Proyekku"
                color="text-primary-100"
                weight="font-extrabold"
                size="text-xl"
            />
        </div>
    );
}
