export default function TextInput({
    name,
    onChange,
    onKeyDown,
    value,
    autoFocus = false,
    disabled = false,
    placeholder,
}) {
    return (
        <input
            type="text"
            name={name}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={value}
            autoFocus={autoFocus}
            disabled={disabled}
            placeholder={placeholder}
            className="bg-white rounded-xl px-4 w-full"
        />
    );
}
