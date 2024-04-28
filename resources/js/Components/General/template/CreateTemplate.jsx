import BodyHeader from "@/Components/General/molecules/BodyHeader";

export default function CreateTemplate({ children, title }) {
    return (
        <article className="bg-white">
            <BodyHeader title={title} />
            <div className="lg:p-16 p-8">{children}</div>
        </article>
    );
}
