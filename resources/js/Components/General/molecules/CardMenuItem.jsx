import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";
import Title from "../atoms/Title";

export default function CardMenuItem({ title, icon, link }) {
    return (
        <Link
            href={link}
            className="bg-white hover:bg-primary-600 rounded-xl flex items-center lg:gap-6 gap-4 justify-center min-h-48 px-10"
        >
            <Icon icon={icon} width="5rem" className="text-primary-100" />
            <Title
                title={title}
                color="text-primary-100"
                weight="font-semibold"
                align="text-center"
            />
        </Link>
    );
}
