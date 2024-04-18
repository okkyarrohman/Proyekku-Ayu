import InputError from "@/Components/Inertia/InputError";
import Label from "../atoms/Label";
import TextInput from "../atoms/TextInput";

export default function InputTextField({
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
        <div className="grid grid-cols-6 items-center">
            <div className="col-span-2">
                <Label htmlFor={name} text={label} color={color} />
            </div>
            <div className="col-span-4">
                <TextInput
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
