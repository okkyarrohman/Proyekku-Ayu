export default function AnswerLink({ link, text }) {
    return (
        <a
            href={link}
            target="_blank"
            className="p-2 rounded-xl shadow-lg border bg-white"
        >
            {text}
        </a>
    );
}
