import Title from "@/Components/General/atoms/Title";
import { formatFullDate } from "@/utils/formatFullDate";

export default function TugasListMurid({ desc, isDeadline, deadline, status }) {
    let statusText = "";
    if (!status && isDeadline) {
        statusText = "Terlambat Mengerjakan";
    } else if (status) {
        statusText = "Sudah Mengerjakan";
    } else {
        statusText = "Belum Mengerjakan";
    }

    return (
        <div className="flex items-center justify-between lg:gap-16 gap-6">
            <div>
                <p className="font-semibold">
                    {isDeadline ? "Proyek Berakhir" : "Proyek Berlangsung"}
                </p>
                <p className="text-sm line-clamp-2">{desc}</p>
                <p className="text-sm font-extrabold text-yellow-500">
                    {formatFullDate(deadline)}
                </p>
            </div>
            <div>
                <p className="font-semibold text-center">{statusText}</p>
            </div>
        </div>
    );
}
