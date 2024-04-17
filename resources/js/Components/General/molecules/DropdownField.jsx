import InputError from "@/Components/Inertia/InputError";
import Label from "../atoms/Label";
import TextInput from "../atoms/TextInput";
import DropdownInput from "../atoms/DropdownInput";

export default function DropdownField({
    label,
    name,
    value,
    autoFocus = false,
    disabled = false,
    placeholder,
    children,
    error,
}) {
    return (
        <div className="grid grid-cols-6 items-center">
            <div className="col-span-2">
                <Label htmlFor={name} text={label} />
            </div>
            <div className="col-span-4">
                <DropdownInput
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    autoFocus={autoFocus}
                >
                    {children}
                </DropdownInput>
                <InputError message={error} className="mt-0.5" />
            </div>
        </div>
    );
}
