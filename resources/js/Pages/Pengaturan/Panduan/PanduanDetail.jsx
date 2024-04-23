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
            <Title
                title="Tutorial Aplikasi"
                color="text-primary-100"
                size="text-xl"
                align="text-center"
            />
            <section className="grid grid-cols-2 justify-between gap-x-20 mt-6">
                {panduanLists.map((panduan, index) => {
                    return (
                        <div className="my-3">
                            <StepList key={index} step={panduan} />
                        </div>
                    );
                })}
            </section>
        </AuthenticatedLayout>
    );
}
