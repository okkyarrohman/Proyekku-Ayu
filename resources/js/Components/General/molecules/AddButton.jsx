import { Icon } from "@iconify/react";
import Title from "../atoms/Title";
import { Link } from "@inertiajs/react";

export default function AddButton({ link, text }) {
    return (
        <Link
            href={link}
            className="w-1/2 flex flex-col items-center justify-center space-y-4 mx-auto"
        >
            <div className="rounded-xl bg-primary-100 w-fit p-3">
                <Icon
                    icon="icomoon-free:plus"
                    width="3rem"
                    className="text-white"
                />
            </div>
            <Title
                title={text}
                color="text-primary-100"
                align="text-center"
                size="text-xl"
            />
        </Link>
    );
}
