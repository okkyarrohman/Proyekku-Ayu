import PrimaryLink from "@/Components/General/atoms/PrimaryLink";
import CreateTemplate from "@/Components/General/template/CreateTemplate";
import TugasCard from "@/Components/Tugas/molecules/TugasCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

export default function TugasIndex({ auth }) {
    const { tugases } = usePage().props;

    console.log("tugas", tugases);

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <CreateTemplate title="TUGAS PROYEK">
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
            </CreateTemplate>
        </AuthenticatedLayout>
    );
}
