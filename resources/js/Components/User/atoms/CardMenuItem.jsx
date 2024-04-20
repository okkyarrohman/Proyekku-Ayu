import Title from "@/Components/General/atoms/Title";
import { Link } from "@inertiajs/react";

export default function CardMenuItem({ link, text }) {
    return (
        <Link href={link} className="bg-primary-200 rounded-xl p-8">
            <div className="bg-primary-100 rounded-xl p-8">
                <Title
                    title={text}
                    size="text-xl"
                    weight="font-bold"
                    align="text-center"
                />
            </div>
        </Link>
    );
}
