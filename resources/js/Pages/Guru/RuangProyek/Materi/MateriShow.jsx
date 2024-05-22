import MateriCover from "@/Components/Materi/atoms/MaterCover";
import MateriEmbedVideo from "@/Components/Materi/atoms/MateriEmbedVideo";
import MateriGuruArticle from "@/Components/Materi/molecules/MateriGuruArticle";
import MateriShowTemplate from "@/Components/Materi/template/MateriShowTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

export default function MateriShow({ auth }) {
    const { materis } = usePage().props;

    console.log(materis);

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <MateriShowTemplate>
                {/* <MateriCover cover={materis.cover} /> */}
                <MateriEmbedVideo link={materis.embed_link} />
                <MateriGuruArticle
                    title={materis.name}
                    desc={materis.desc}
                    linkMateri={`/storage/materi/file/${materis.file}`}
                    linkVideo={materis.link_video}
                    linkEdit={route("materi-guru.edit", materis.id)}
                    linkDelete={route("materi-guru.destroy", materis.id)}
                />
            </MateriShowTemplate>
        </AuthenticatedLayout>
    );
}
