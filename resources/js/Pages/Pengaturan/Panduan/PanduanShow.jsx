import PrimaryLink from "@/Components/General/atoms/PrimaryLink";
import Title from "@/Components/General/atoms/Title";
import StepList from "@/Components/Tugas/atoms/StepList";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function PanduanShow({ auth }) {
    const panduanLists = [
        "Langkah langkah penggunaan user manual aplikasi",
        "Untuk murid, guru dan admin",
        "tersedia secara rinci",
    ];

    return (
        <AuthenticatedLayout authUser={auth.user} title="Penggunaan Aplikasi">
            <section className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                <img
                    src={`/assets/guide-image.png`}
                    alt="Materi Cover"
                    className="rounded-xl w-full h-80 object-cover"
                />
                <div className="space-y-6">
                    <Title
                        title="Deskripsi Tutorial Aplikasi"
                        color="text-primary-100"
                        size="text-3xl"
                    />
                    {panduanLists.map((panduan, index) => {
                        return <StepList key={index} step={panduan} />;
                    })}
                    <a
                    className="w-full rounded-full bg-primary-100 hover:bg-primary-200 py-2 px-6 font-semibold text-white text-base block text-center"
                    href={route("panduan.detail")}
                    >
                        Download Panduan
                    </a>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
