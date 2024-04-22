import Description from "@/Components/General/atoms/Description";
import PrimaryLink from "@/Components/General/atoms/PrimaryLink";
import Title from "@/Components/General/atoms/Title";

export default function TugasCard({ cover, desc, link, status }) {
    return (
        <div className="bg-primary-600 rounded-xl p-6 shadow-lg space-y-6">
            <Title
                title={status}
                size="text-xl"
                weight="font-semibold"
                color="text-black"
            />
            <img
                src={`/storage/tugas/cover/${cover}`}
                alt="Materi Cover"
                className="h-32 w-full object-cover"
            />
            <div className="line-clamp-3">
                <Description
                    desc={desc}
                    color="text-secondary-600"
                    size="text-base"
                />
            </div>
            <div className="mx-auto w-fit">
                <PrimaryLink href={link} text="Lihat Tugas" />
            </div>
        </div>
    );
}
