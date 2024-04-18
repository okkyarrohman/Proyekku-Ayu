import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function MateriIndex({ auth }) {
    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <h1>Materi</h1>
        </AuthenticatedLayout>
    );
}
