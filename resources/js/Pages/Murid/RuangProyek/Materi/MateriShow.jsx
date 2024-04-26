import MateriCover from "@/Components/Materi/atoms/MaterCover";
import MateriArticle from "@/Components/Materi/molecules/MateriArticle";
import MateriShowTemplate from "@/Components/Materi/template/MateriShowTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

export default function MateriShow({ auth }) {
    const { materis } = usePage().props;

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <MateriShowTemplate>
                <MateriCover cover={materis.cover} />
                <MateriArticle
                    title={materis.name}
                    desc={materis.desc}
                    linkMateri={`/storage/materi/file/${materis.file}`}
                    linkVideo={materis.link_video}
                />
            </MateriShowTemplate>
        </AuthenticatedLayout>
    );
}
