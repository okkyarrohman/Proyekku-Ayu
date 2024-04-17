import { Icon } from "@iconify/react";
import React from "react";

export default function FileInput({
    name,
    onChange,
    value,
    autoFocus = false,
    disabled = false,
    fileType,
    placeholder,
}) {
    const handleOnClick = () => {
        document.getElementById(name).click();
    };

    return (
        <div className="relative">
            <input
                id={name}
                type="file"
                onChange={onChange}
                accept={fileType}
                className="hidden"
            />
            <input
                type="text"
                value={value}
                readOnly
                placeholder={placeholder}
                className="bg-white rounded-xl px-4 w-full pe-10"
                onClick={handleOnClick}
                autoFocus={autoFocus}
                disabled={disabled}
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Icon
                    icon="material-symbols:upload"
                    width="1.5rem"
                    className="text-gray-500"
                />
            </span>
        </div>
    );
}
