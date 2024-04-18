import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            authUser={auth.user}
            title="Dashboard"
        ></AuthenticatedLayout>
    );
}
