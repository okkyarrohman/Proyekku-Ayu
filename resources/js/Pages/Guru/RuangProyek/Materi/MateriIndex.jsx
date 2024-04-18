import AddButton from "@/Components/General/molecules/AddButton";
import MateriCard from "@/Components/Materi/molecules/MateriCard";
import MateriIndexTemplate from "@/Components/Materi/template/MateriIndexTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

export default function MateriIndex({ auth }) {
    const { materis } = usePage().props;

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <MateriIndexTemplate>
                {materis.map((materi, index) => {
                    return (
                        <MateriCard
                            key={index}
                            cover={materi.cover}
                            desc={materi.desc}
                            link={route("materi-guru.show", materi.id)}
                        />
                    );
                })}
                <AddButton
                    text="Tambah Konten Belajar"
                    link={route("materi-guru.create")}
                />
            </MateriIndexTemplate>
        </AuthenticatedLayout>
    );
}
