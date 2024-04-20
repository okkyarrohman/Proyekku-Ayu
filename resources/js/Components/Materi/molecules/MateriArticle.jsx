import Description from "@/Components/General/atoms/Description";
import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import SecondaryButton from "@/Components/General/atoms/SecondaryButton";
import Title from "@/Components/General/atoms/Title";

export default function MateriArticle({ title, desc, linkMateri, linkVideo }) {
    return (
        <article className="space-y-4">
            <Title title={title} color="text-black" size="text-2xl" />
            <Description desc={desc} color="text-black" />
            <div className="flex lg:flex-row flex-col items-center gap-6">
                <a
                    href={linkMateri}
                    target="_blank"
                    className="w-full lg:w-fit"
                >
                    <PrimaryButton text="Lihat E-Book" full />
                </a>
                <a href={linkVideo} target="_blank" className="w-full lg:w-fit">
                    <SecondaryButton text="Lihat Video" full />
                </a>
            </div>
        </article>
    );
}
