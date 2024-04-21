import DeleteLink from "@/Components/General/atoms/DeleteLink";
import Description from "@/Components/General/atoms/Description";
import PrimaryLink from "@/Components/General/atoms/PrimaryLink";
import Title from "@/Components/General/atoms/Title";
import AboutList from "@/Components/Landing/molecules/AboutList";
import MateriCover from "@/Components/Materi/atoms/MaterCover";
import MateriGuruArticle from "@/Components/Materi/molecules/MateriGuruArticle";
import StepList from "@/Components/Tugas/atoms/StepList";
import DetailTugas from "@/Components/Tugas/molecules/DetailTugas";
import TugasShowTemplate from "@/Components/Tugas/template/TugasShowTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formatFullDate } from "@/utils/formatFullDate";
import { Icon } from "@iconify/react";
import { usePage } from "@inertiajs/react";

export default function TugasShow({ auth }) {
    const { tugases, classes } = usePage().props;

    console.log(tugases);

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <TugasShowTemplate>
                <DetailTugas
                    name={tugases.name}
                    status="Berjalan"
                    deadline={tugases.deadline}
                    classes={tugases.classes.name}
                    tugasId={tugases.id}
                    classId={tugases.class_id}
                />
                <div className="space-y-6">
                    <Title
                        title="Perhatikan langkah-langkah berikut!"
                        color="text-red-600"
                        weight="font-normal"
                        size="text-3xl"
                        align="text-center"
                    />
                    <div className="space-y-2">
                        <StepList step={tugases.step_1} />
                        <StepList step={tugases.step_2} />
                        <StepList step={tugases.step_3} />
                        <StepList step={tugases.step_4} />
                        <StepList step={tugases.step_5} />
                        <StepList step={tugases.step_6} />
                    </div>
                    <div className="flex justify-end gap-5">
                        <PrimaryLink text="Detail Proyek" />
                        <PrimaryLink text="Hasil Proyek" />
                    </div>
                    <hr className="bg-primary-100 h-1" />
                    <div className="flex justify-end gap-5">
                        <PrimaryLink
                            text="Edit Proyek"
                            href={route("tugas-guru.edit", tugases.id)}
                        />
                        <DeleteLink
                            text="Hapus Materi"
                            href={route("tugas-guru.destroy", tugases.id)}
                        />
                    </div>
                </div>
            </TugasShowTemplate>
        </AuthenticatedLayout>
    );
}
