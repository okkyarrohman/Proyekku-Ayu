import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";
import Title from "../atoms/Title";

export default function CardMenuImage({ title, img, link }) {
    return (
        <Link
            href={link}
            className="bg-white hover:bg-primary-600 rounded-xl flex flex-col items-center lg:gap-6 gap-4 justify-center min-h-48 p-10"
        >
            <img
                src={img}
                alt="Cartoon Image"
                className="w-48 h-52 object-cover object-top"
            />
            <Title
                title={title}
                color="text-primary-100"
                weight="font-semibold"
                align="text-center"
            />
        </Link>
    );
}
