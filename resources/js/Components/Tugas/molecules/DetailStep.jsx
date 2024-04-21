import Description from "@/Components/General/atoms/Description";
import Title from "@/Components/General/atoms/Title";

export default function DetailStep({ step, desc, title, children }) {
    return (
        <>
            <Title
                title={title}
                size="text-2xl"
                align="text-center"
                weight="font-semibold"
            />
            <div>
                <p className="text-white font-semibold text-xl">{step}</p>
                <Description desc={desc} />
            </div>
            {children}
        </>
    );
}
