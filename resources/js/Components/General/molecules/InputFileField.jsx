import InputError from "@/Components/Inertia/InputError";
import Label from "../atoms/Label";
import TextInput from "../atoms/TextInput";
import FileInput from "../atoms/FileInput";

export default function InputFileField({
    label,
    color,
    name,
    onChange,
    value,
    autoFocus = false,
    disabled = false,
    placeholder,
    fileType,
    error,
}) {
    return (
        <div className="grid grid-cols-6 items-center">
            <div className="col-span-2">
                <Label htmlFor={name} text={label} color={color} />
            </div>
            <div className="col-span-4">
                <FileInput
                    name={name}
                    onChange={onChange}
                    value={value}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    placeholder={placeholder}
                    fileType={fileType}
                />
                <InputError message={error} className="mt-0.5" />
            </div>
        </div>
    );
}
