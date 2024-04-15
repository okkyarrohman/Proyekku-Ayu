import Title from "@/Components/General/atoms/Title";

export default function Feature({ children }) {
    return (
        <div id="feature" className="min-h-screen bg-white py-16">
            <Title
                title="Feature"
                color="text-primary-100"
                align="text-center"
            />
            <ul className="pt-10 flex flex-col lg:flex-row space-x-0 lg:space-x-16 space-y-10 lg:space-y-0 mx-auto w-fit">
                {children}
            </ul>
        </div>
    );
}
