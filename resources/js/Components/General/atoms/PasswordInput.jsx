import { Icon } from "@iconify/react";
import { useState } from "react";

export default function PasswordInput({
    name,
    onChange,
    value,
    autoFocus = false,
    disabled = false,
    placeholder,
}) {
    const [isShow, setIshShow] = useState(false);

    const handleShowPassword = () => {
        setIshShow(!isShow);
    };

    return (
        <div className="relative">
            <input
                type={isShow ? "text" : "password"}
                name={name}
                onChange={onChange}
                value={value}
                autoFocus={autoFocus}
                disabled={disabled}
                placeholder={placeholder}
                className="bg-white rounded-xl px-4 w-full pe-10"
            />
            <button
                type="button"
                onClick={handleShowPassword}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
                {isShow ? (
                    <Icon icon="charm:eye" width="1.3rem" />
                ) : (
                    <Icon icon="mdi:eye-off-outline" width="1.3rem" />
                )}
            </button>
        </div>
    );
}
