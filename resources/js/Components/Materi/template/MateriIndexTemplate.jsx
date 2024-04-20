import BodyHeader from "@/Components/General/molecules/BodyHeader";

export default function MateriIndexTemplate({ children }) {
    return (
        <article className="bg-white">
            <BodyHeader title="KONTEN BELAJAR" />
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:p-16 p-10 gap-10">
                {children}
            </div>
        </article>
    );
}
