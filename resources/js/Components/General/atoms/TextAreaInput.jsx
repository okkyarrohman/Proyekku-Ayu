export default function TextAreaInput({
    name,
    onChange,
    value,
    autoFocus = false,
    disabled = false,
    placeholder,
}) {
    return (
        <textarea
            type="text"
            name={name}
            onChange={onChange}
            value={value}
            autoFocus={autoFocus}
            disabled={disabled}
            placeholder={placeholder}
            className="bg-white rounded-xl px-4 w-full"
            rows="7"
        >
            {value}
        </textarea>
    );
}
