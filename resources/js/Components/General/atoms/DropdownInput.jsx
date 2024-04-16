import { Icon } from "@iconify/react";
import { createContext, useState } from "react";

export const DropdownContext = createContext();

export default function DropdownInput({
    value,
    placeholder,
    disabled,
    autoFocus,
    children,
}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <DropdownContext.Provider
            value={{ isOpen, setIsOpen, handleOpenDropdown }}
        >
            <div className="relative">
                <div className="relative">
                    <input
                        type="text"
                        value={value}
                        readOnly
                        placeholder={placeholder}
                        onClick={handleOpenDropdown}
                        disabled={disabled}
                        autoFocus={autoFocus}
                        className="bg-white rounded-xl px-4 w-full cursor-pointer"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        {isOpen ? (
                            <Icon icon="iconamoon:arrow-up-2" width="1.7rem" />
                        ) : (
                            <Icon
                                icon="iconamoon:arrow-down-2"
                                width="1.7rem"
                            />
                        )}
                    </span>
                </div>
                {isOpen && (
                    <ul className="absolute z-10 w-full bg-white rounded-xl shadow-lg overflow-hidden">
                        {children}
                    </ul>
                )}
            </div>
        </DropdownContext.Provider>
    );
}
