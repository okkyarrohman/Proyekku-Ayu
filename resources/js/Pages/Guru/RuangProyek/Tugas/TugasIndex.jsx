import TugasCard from "@/Components/Tugas/molecules/TugasCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TugasIndexTemplate from "@/Components/Tugas/template/TugasIndexTemplate";
import { usePage } from "@inertiajs/react";
import AddButton from "@/Components/General/molecules/AddButton";

export default function TugasIndex({ auth }) {
    const { tugases } = usePage().props;

    console.log("tugas", tugases);

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <TugasIndexTemplate>
                {tugases.map((tugas, index) => {
                    return (
                        <TugasCard
                            key={index}
                            status="Proyek Berjalan"
                            cover={tugas.cover}
                            desc={tugas.desc}
                            link={route("tugas-guru.show", tugas.id)}
                        />
                    );
                })}
                <AddButton
                    text="Tambah Proyek"
                    link={route("tugas-guru.create")}
                />
            </TugasIndexTemplate>
        </AuthenticatedLayout>
    );
}
