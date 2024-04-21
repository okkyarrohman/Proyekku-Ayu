import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import PrimaryLink from "@/Components/General/atoms/PrimaryLink";
import Title from "@/Components/General/atoms/Title";
import { formatFullDate } from "@/utils/formatFullDate";
import { router } from "@inertiajs/react";

export default function DetailTugas({
    name,
    status,
    deadline,
    classes,
    kelompok,
    tugasId,
    classId,
}) {
    const handleKelompokOnClick = (tugasId, classId) => {
        localStorage.setItem("TUGAS_ID", tugasId);
        localStorage.setItem("CLASS_ID", classId);
        router.get(route("kelompok-guru.index"));
    };

    return (
        <div className="space-y-6">
            <Title
                title={name}
                color="text-primary-200"
                size="text-3xl"
                weight="font-bold"
            />
            <div className="space-y-2">
                <div className="flex lg:flex-row flex-col text-xl font-medium text-primary-200">
                    <p>Status : </p>
                    <p className="text-black lg:ml-6 ml-0">{status}</p>
                </div>
                <div className="flex lg:flex-row flex-col text-xl font-medium text-primary-200">
                    <p>Deadline : </p>
                    <p className="text-black lg:ml-6 ml-0">
                        {formatFullDate(deadline)}
                    </p>
                </div>
                <div className="flex lg:flex-row flex-col text-xl font-medium text-primary-200">
                    <p>Kelas : </p>
                    <p className="text-black lg:ml-6 ml-0">{classes}</p>
                </div>
                <div className="flex lg:flex-row flex-col text-xl font-medium text-primary-200">
                    <p>Kelompok : </p>
                    <p className="text-black lg:ml-6 ml-0">{kelompok}</p>
                </div>
            </div>
            <div className="mx-auto w-fit">
                <PrimaryButton
                    text="Lihat Kelompok"
                    onClick={() => handleKelompokOnClick(tugasId, classId)}
                />
            </div>
        </div>
    );
}
