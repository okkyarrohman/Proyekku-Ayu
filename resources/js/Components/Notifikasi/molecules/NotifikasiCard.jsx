import { Link } from "@inertiajs/react";
import NotifikasiRole from "../atoms/NotifikasiRole";
import { formatDate } from "@/utils/formatDate";
import { Icon } from "@iconify/react";

export default function NotifikasiCard({ message, from, date, link, role }) {
    return (
        <div className="bg-primary-600 rounded-xl p-4 flex items-center justify-between gap-8">
            <Icon
                icon="carbon:task"
                width="2rem"
                className="text-primary-100"
            />
            <div className="w-full space-y-4">
                <div className="flex justify-between">
                    <p className="capitalize">{message}</p>
                    {role == "admin" && <NotifikasiRole role={from} />}
                </div>
                <div className="flex justify-between">
                    <p className="text-secondary-600 text-xs">
                        {formatDate(date)}
                    </p>
                    {role != "admin" && (
                        <Link
                            href={link}
                            className="border-b border-b-primary-100 text-xs text-primary-100"
                        >
                            Lihat Detail
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
