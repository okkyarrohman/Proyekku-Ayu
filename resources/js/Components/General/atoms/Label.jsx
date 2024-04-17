export default function Label({ htmlFor, text }) {
    return (
        <label htmlFor={htmlFor} className="text-white font-bold">
            {text}
        </label>
    );
}
