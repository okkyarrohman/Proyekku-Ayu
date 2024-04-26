import Title from "@/Components/General/atoms/Title";
import { formatFullDate } from "@/utils/formatFullDate";

export default function TugasList({
    desc,
    isDeadline,
    deadline,
    ratioKelompok,
}) {
    return (
        <div className="flex items-center justify-between gap-16">
            <div>
                <p className="font-semibold">
                    {isDeadline ? "Peoyek Berakhir" : "Proyek Berlangsung"}
                </p>
                <p className="text-sm line-clamp-2">{desc}</p>
                <p className="text-sm font-extrabold text-yellow-500">
                    {formatFullDate(deadline)}
                </p>
            </div>
            <div>
                <Title title={ratioKelompok} color="text-primary-100" />
                <p className="text-xs">Kelompok</p>
            </div>
        </div>
    );
}
