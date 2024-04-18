import MateriCard from "@/Components/Materi/molecules/MateriCard";
import MateriIndexTemplate from "@/Components/Materi/template/MateriIndexTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function MateriIndex({ auth }) {
    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <MateriIndexTemplate>
                <MateriCard
                    cover="/assets/grid1-image.jpeg"
                    desc="Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed."
                    link={route("materi.show", 1)}
                />
            </MateriIndexTemplate>
        </AuthenticatedLayout>
    );
}
