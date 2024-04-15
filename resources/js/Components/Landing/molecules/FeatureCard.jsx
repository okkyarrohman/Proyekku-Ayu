import Description from "@/Components/General/atoms/Description";
import Title from "@/Components/General/atoms/Title";

export default function FeatureCard({ img, title, desc }) {
    return (
        <div className="w-80 min-h-[27rem] flex flex-col justify-between">
            <img
                src={img}
                alt="Feature Image"
                className="rounded-xl object-cover w-full h-52"
                loading="lazy"
            />
            <Title
                title={title}
                color="text-black"
                align="text-center"
                size="text-2xl"
                weight="font-bold"
            />
            <Description
                desc={desc}
                color="text-black"
                align="text-center"
                size="text-lg"
            />
        </div>
    );
}
