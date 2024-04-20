import InputError from "@/Components/Inertia/InputError";
import Label from "../atoms/Label";
import TextInput from "../atoms/TextInput";
import PasswordInput from "../atoms/PasswordInput";

export default function InputPasswordField({
    color,
    label,
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
                <PasswordInput
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
