import InputError from "@/Components/Inertia/InputError";
import Label from "../atoms/Label";
import TextInput from "../atoms/TextInput";

export default function InputTextField({
    label,
    color,
    name,
    onChange,
    onKeyDown,
    value,
    autoFocus = false,
    disabled = false,
    placeholder,
    error,
    hideLabel = false,
}) {
    return (
        <div
            className={`grid ${
                hideLabel ? "grid-cols-3" : "grid-cols-6"
            } items-center`}
        >
            <div className={`col-span-2 ${hideLabel && "hidden"}`}>
                <Label htmlFor={name} text={label} color={color} />
            </div>
            <div className={`${hideLabel ? "col-span-3" : "col-span-4"}`}>
                <TextInput
                    name={name}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={value}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    placeholder={placeholder}
                />
                <InputError message={error} className="mt-0.5" />
            </div>
        </div>
    );
}
