import PrimaryLink from "@/Components/General/atoms/PrimaryLink";
import TableActionButton from "@/Components/General/atoms/TableActionButton";
import TableBody from "@/Components/General/atoms/TableBody";
import TableContainer from "@/Components/General/atoms/TableContainer";
import TableData from "@/Components/General/atoms/TableData";
import TableHead from "@/Components/General/atoms/TableHead";
import TableRow from "@/Components/General/atoms/TableRow";
import TableShowButton from "@/Components/General/atoms/TableShowButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

export default function HasilBelajarIndex({ auth }) {
    const { hasils } = usePage().props;

    console.log(hasils);

    const tableHeads = [
        "No",
        "Kelas",
        "Nama",
        "Mata Pelajaran",
        "Nilai",
        "Indeks",
        "Opsi",
        "",
    ];

    return (
        <AuthenticatedLayout authUser={auth.user} title="Hasil Belajar">
            <div className="mb-6 ml-auto w-fit">
                <PrimaryLink
                    text="Tambah Data"
                    href={route("hasil-belajar-guru.create")}
                />
            </div>
            <TableContainer>
                <TableHead datas={tableHeads} />
                <TableBody>
                    {hasils.map((hasil, index) => {
                        return (
                            <TableRow>
                                <TableData children={index + 1} />
                                <TableData children={hasil.classes.name} />
                                <TableData children={hasil.users.name} />
                                <TableData children={hasil.mapels.name} />
                                <TableData children={hasil.grade} />
                                <TableData children={hasil.grade_index} />
                                <TableData
                                    children={
                                        <TableActionButton
                                            linkEdit={route(
                                                "hasil-belajar-guru.edit",
                                                hasil.id
                                            )}
                                            linkDelete={route(
                                                "hasil-belajar-guru.destroy",
                                                hasil.id
                                            )}
                                        />
                                    }
                                />
                                <TableData
                                    children={
                                        <TableShowButton
                                            linkShow={route(
                                                "hasil-belajar-guru.show",
                                                hasil.id
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
