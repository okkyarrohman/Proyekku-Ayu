import { useState } from "react";

export default function DateTimeInput({
    name,
    onChange,
    onKeyDown,
    value,
    autoFocus = false,
    disabled = false,
    placeholder,
}) {
    const [type, setType] = useState("text");

    return (
        <input
            type={type}
            name={name}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={value}
            autoFocus={autoFocus}
            disabled={disabled}
            placeholder={placeholder}
            onFocus={() => setType("date")}
            onBlur={() => setType("text")}
            className="bg-white rounded-xl px-4 w-full"
        />
    );
}
