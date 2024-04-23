import PrimaryLink from "@/Components/General/atoms/PrimaryLink";
import TableActionButton from "@/Components/General/atoms/TableActionButton";
import TableBody from "@/Components/General/atoms/TableBody";
import TableContainer from "@/Components/General/atoms/TableContainer";
import TableData from "@/Components/General/atoms/TableData";
import TableHead from "@/Components/General/atoms/TableHead";
import TableRow from "@/Components/General/atoms/TableRow";
import TableShowButton from "@/Components/General/atoms/TableShowButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formatDate } from "@/utils/formatDate";
import { usePage } from "@inertiajs/react";

export default function AbsensiIndex({ auth }) {
    const { absens } = usePage().props;

    console.log(absens);

    const tableHeads = [
        "No",
        "Tanggal",
        "Kelas",
        "Murid",
        "Mata Pelajaran",
        "Pertemuan Ke",
        "Keterangan",
    ];

    return (
        <AuthenticatedLayout authUser={auth.user} title="Jurnal Kehadiran">
            <TableContainer>
                <TableHead datas={tableHeads} />
                <TableBody>
                    {absens.map((absen, index) => {
                        return (
                            <TableRow>
                                <TableData children={index + 1} />
                                <TableData children={formatDate(absen.date)} />
                                <TableData
                                    children={absen.classes.name}
                                    nowrap
                                />
                                <TableData children={auth.user.name} nowrap />
                                <TableData
                                    children={absen.mapels.name}
                                    nowrap
                                />
                                <TableData children={absen.meeting} />
                                <TableData
                                    children={
                                        absen.user_presents.find(
                                            (present) =>
                                                present.user_id == auth.user.id
                                        ) ? (
                                            <p className="text-green-600 font-semibold">
                                                Hadir
                                            </p>
                                        ) : (
                                            <p className="text-red-600 font-semibold">
                                                Tidak Hadir
                                            </p>
                                        )
                                    }
                                />
                            </TableRow>
                        );
                    })}
                </TableBody>
            </TableContainer>
        </AuthenticatedLayout>
    );
}
