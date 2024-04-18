import InputError from "@/Components/Inertia/InputError";
import Label from "../atoms/Label";
import TextAreaInput from "../atoms/TextAreaInput";

export default function InputTextAreaField({
    label,
    color,
    name,
    onChange,
    value,
    autoFocus = false,
    disabled = false,
    placeholder,
    error,
}) {
    return (
        <div className="grid grid-cols-6 items-start">
            <div className="col-span-2">
                <Label htmlFor={name} text={label} color={color} />
            </div>
            <div className="col-span-4">
                <TextAreaInput
                    name={name}
                    onChange={onChange}
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
