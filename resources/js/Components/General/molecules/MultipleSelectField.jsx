import InputError from "@/Components/Inertia/InputError";
import Label from "../atoms/Label";
import TextInput from "../atoms/TextInput";
import DropdownInput from "../atoms/DropdownInput";
import MultipleSelectInput from "../atoms/MultipleSelectInput";

export default function MultipleSelectField({
    label,
    color,
    name,
    values,
    setValues,
    autoFocus = false,
    disabled = false,
    placeholder,
    children,
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
                <MultipleSelectInput
                    values={values}
                    placeholder={placeholder}
                    disabled={disabled}
                    autoFocus={autoFocus}
                    setValues={setValues}
                >
                    {children}
                </MultipleSelectInput>
                <InputError message={error} className="mt-0.5" />
            </div>
        </div>
    );
}
