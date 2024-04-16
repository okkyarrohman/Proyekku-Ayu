import InputError from "@/Components/Inertia/InputError";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function LoginInputPassword({
    name,
    onChange,
    value,
    autoFocus = false,
    disabled = false,
    placeholder,
    error,
}) {
    const [isShow, setIsShow] = useState(false);

    const handleShowPassword = () => {
        setIsShow(!isShow);
    };

    return (
        <div>
            <div className="relative">
                <input
                    type={isShow ? "text" : "password"}
                    name={name}
                    onChange={onChange}
                    value={value}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={`rounded-full w-full bg-primary-600 border border-primary-600 focus:border-primary-500 pe-12 ps-6`}
                />
                <div className="absolute inset-y-0 end-0 bg-primary-500 flex items-center justify-center rounded-e-full w-10">
                    <button type="button" onClick={handleShowPassword}>
                        {isShow ? (
                            <Icon icon="charm:eye" width="1.5rem" />
                        ) : (
                            <Icon icon="mdi:eye-off-outline" width="1.5rem" />
                        )}
                    </button>
                </div>
            </div>
            <InputError message={error} className="mt-0.5" />
        </div>
    );
}
