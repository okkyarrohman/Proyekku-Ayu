import MateriCover from "@/Components/Materi/atoms/MaterCover";
import MateriArticle from "@/Components/Materi/molecules/MateriArticle";
import MateriShowTemplate from "@/Components/Materi/template/MateriShowTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function MateriShow({ auth }) {
    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <MateriShowTemplate>
                <MateriCover cover="/assets/grid1-image.jpeg" />
                <MateriArticle
                    title="Judul Materi: Tipe Data"
                    desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam harum necessitatibus consectetur, ad minima animi perspiciatis doloribus molestias rem ullam eos autem magni! Inventore eius laudantium dicta deserunt quas doloremque facilis perspiciatis debitis"
                />
            </MateriShowTemplate>
        </AuthenticatedLayout>
    );
}
