import PrimaryLink from "@/Components/General/atoms/PrimaryLink";
import Title from "@/Components/General/atoms/Title";
import StepList from "@/Components/Tugas/atoms/StepList";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function PanduanShow({ auth }) {
    const panduanLists = [
        "Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.",
        "Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.",
        "Lorem DDDD dolor sit amet consectetur. Elementum nisl duis tortor sed.",
        "Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.",
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
                    <PrimaryLink
                        text="Selengkapnya"
                        href={route("panduan.detail")}
                    />
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
