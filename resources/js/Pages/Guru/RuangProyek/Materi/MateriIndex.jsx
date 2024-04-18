import AddButton from "@/Components/General/molecules/AddButton";
import MateriGuruCard from "@/Components/Materi/molecules/MateriGuruCard";
import MateriIndexTemplate from "@/Components/Materi/template/MateriIndexTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function MateriIndex({ auth }) {
    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <MateriIndexTemplate>
                <MateriGuruCard
                    cover="/assets/grid1-image.jpeg"
                    desc="Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed."
                    linkShow={route("materi-guru.show", 1)}
                    linkEdit={route("materi-guru.edit", 1)}
                />
                <AddButton
                    text="Tambah Konten Belajar"
                    link={route("materi-guru.create")}
                />
            </MateriIndexTemplate>
        </AuthenticatedLayout>
    );
}
