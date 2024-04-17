import InputError from "@/Components/Inertia/InputError";
import { Icon } from "@iconify/react";

export default function LoginInputEmail({
    name,
    onChange,
    value,
    autoFocus = false,
    disabled = false,
    placeholder,
    error,
}) {
    return (
        <div>
            <div className="relative">
                <input
                    type="email"
                    name={name}
                    onChange={onChange}
                    value={value}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={`rounded-full w-full bg-primary-600 border border-primary-600 focus:border-primary-500 pe-12 ps-6`}
                />
                <div className="absolute inset-y-0 end-0 bg-primary-500 flex items-center justify-center rounded-e-full w-10">
                    <Icon icon="ph:user-circle-fill" width="1.7rem" />
                </div>
            </div>
            <InputError message={error} className="mt-0.5" />
        </div>
    );
}
