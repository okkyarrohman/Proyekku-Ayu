import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    const { absensis } = usePage().props;

    console.log(absensis);

    return (
        <AuthenticatedLayout
            authUser={auth.user}
            title="Dashboard"
        ></AuthenticatedLayout>
    );
}
