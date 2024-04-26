import { Icon } from "@iconify/react";

export default function DataChart({ icon, text, total }) {
    return (
        <div className="rounded-xl p-6 bg-primary-600 flex items-center gap-8 max-w-80">
            <Icon icon={icon} width="2.25rem" className="text-primary-100" />
            <div>
                <p className="font-semibold text-xl">{text}</p>
                <p className="font-extrabold text-2xl">{total}</p>
            </div>
        </div>
    );
}
