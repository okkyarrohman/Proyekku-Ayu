import BodyHeader from "@/Components/General/molecules/BodyHeader";

export default function TugasIndexTemplate({ children }) {
    return (
        <article className="bg-white">
            <BodyHeader title="TUGAS PROYEK" />
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:p-16 p-10 gap-10">
                {children}
            </div>
        </article>
    );
}
