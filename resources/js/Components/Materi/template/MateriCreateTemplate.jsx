import BodyHeader from "@/Components/General/molecules/BodyHeader";

export default function MateriCreateTemplate({ children, title }) {
    return (
        <article className="bg-white">
            <BodyHeader title={title} />
            <div className="lg:p-16 p-10">{children}</div>
        </article>
    );
}
