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
        "Mata Pelajaran",
        "Pertemuan Ke",
        "Opsi",
        "",
    ];

    return (
        <AuthenticatedLayout authUser={auth.user} title="Jurnal Kehadiran">
            <div className="mb-6 ml-auto w-fit">
                <PrimaryLink
                    text="Tambah Data"
                    href={route("absensi-guru.create")}
                />
            </div>
            <TableContainer>
                <TableHead datas={tableHeads} />
                <TableBody>
                    {absens.map((absen, index) => {
                        return (
                            <TableRow>
                                <TableData children={index + 1} />
                                <TableData children={formatDate(absen.date)} />
                                <TableData children={absen.classes.name} />
                                <TableData children={absen.mapels.name} />
                                <TableData children={absen.meeting} />
                                <TableData
                                    children={
                                        <TableActionButton
                                            linkEdit={route(
                                                "absensi-guru.edit",
                                                absen.id
                                            )}
                                            linkDelete={route(
                                                "absensi-guru.destroy",
                                                absen.id
                                            )}
                                        />
                                    }
                                />
                                <TableData
                                    children={
                                        <TableShowButton
                                            linkShow={route(
                                                "absensi-guru.show",
                                                absen.id
                                            )}
                                        />
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
