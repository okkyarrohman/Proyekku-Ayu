import Title from "@/Components/General/atoms/Title";
import ImageGrid from "../atoms/ImageGrid";
import Description from "@/Components/General/atoms/Description";

export default function About({ desc, children }) {
    return (
        <div
            id="about"
            className="grid grid-cols-1 lg:grid-cols-2 bg-primary-100 py-16 px-4"
        >
            <div className="space-y-4">
                <Title
                    title="Why Our Client Trust Us!"
                    weight="font-semibold"
                    align="text-center"
                />
                <Description desc={desc} size="text-base" align="text-center" />
                <ul className="space-y-6 pl-6 lg:pl-16">{children}</ul>
            </div>
            <div className="mx-auto flex justify-center items-center lg:mt-0 mt-9">
                <ImageGrid />
            </div>
        </div>
    );
}
