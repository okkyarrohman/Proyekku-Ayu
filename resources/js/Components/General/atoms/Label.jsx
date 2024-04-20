export default function Label({ htmlFor, text, color = "text-white" }) {
    return (
        <label htmlFor={htmlFor} className={`${color} font-bold`}>
            {text}
        </label>
    );
}
