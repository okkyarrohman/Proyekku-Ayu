import { Link } from "@inertiajs/react";

export default function TableActionButton({
    linkEdit,
    linkDelete,
    isEdit = true,
    isDelete = true,
}) {
    return (
        <div className="flex flex-col gap-2 *:font-semibold">
            {isEdit && (
                <Link
                    href={linkEdit}
                    className="px-4 py-1 bg-primary-100 text-white hover:bg-primary-200"
                >
                    Edit
                </Link>
            )}
            {isDelete && (
                <Link
                    href={linkDelete}
                    as="button"
                    method="DELETE"
                    className="px-4 py-1 bg-red-600 text-white hover:bg-red-500"
                >
                    Delete
                </Link>
            )}
        </div>
    );
}
