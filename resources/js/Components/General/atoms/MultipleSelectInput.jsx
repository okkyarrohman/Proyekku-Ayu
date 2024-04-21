import { Icon } from "@iconify/react";
import { createContext, useState } from "react";

export const MultipleContext = createContext();

export default function MultipleSelectInput({
    values,
    setValues, // prop untuk mengupdate values dari komponen induk
    placeholder,
    disabled,
    autoFocus,
    children,
}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectItem = (val) => {
        const newValue = toggleValue(val);
        setValues(newValue); // Gunakan setValues untuk mengupdate state di komponen induk
        // Tidak menutup dropdown setelah pemilihan
    };

    const toggleValue = (val) => {
        if (values.includes(val)) {
            return values.filter((item) => item !== val);
        } else {
            return [...values, val];
        }
    };

    return (
        <MultipleContext.Provider
            value={{ isOpen, setIsOpen, handleSelectItem }}
        >
            <div className="relative">
                <div className="relative">
                    <input
                        type="text"
                        value={values.join(", ")}
                        readOnly
                        placeholder={placeholder}
                        onClick={handleOpenDropdown}
                        disabled={disabled}
                        autoFocus={autoFocus}
                        className="bg-white rounded-xl px-4 w-full cursor-pointer"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <Icon
                            icon={
                                isOpen
                                    ? "iconamoon:arrow-up-2"
                                    : "iconamoon:arrow-down-2"
                            }
                            width="1.7rem"
                        />
                    </span>
                </div>
                {isOpen && (
                    <ul className="absolute z-10 w-full bg-white rounded-xl shadow-lg overflow-hidden">
                        {children}
                    </ul>
                )}
            </div>
        </MultipleContext.Provider>
    );
}
