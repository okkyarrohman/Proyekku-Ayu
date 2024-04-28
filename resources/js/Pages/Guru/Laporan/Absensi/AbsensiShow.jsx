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

export default function AbsensiShow({ auth }) {
    const { absens, absenPresents, users, user_tests } = usePage().props;

    console.log("tes", user_tests);

    const usersByClassId = users.filter(
        (user) => user.class_id == absens.class_id
    );

    console.log(usersByClassId);
    console.log("hadir", absenPresents);

    const tableHeads = [
        "No",
        "Tanggal",
        "Kelas",
        "Murid",
        "Mata Pelajaran",
        "Pertemuan Ke",
        "Keterangan",
        "Opsi",
    ];

    return (
        <AuthenticatedLayout authUser={auth.user} title="Jurnal Kehadiran">
            <div className="mb-6 ml-auto w-fit flex items-center gap-4">
                <a
                    href={route("absensi-guru.exportExcel", [
                        absens.class_id,
                        absens.id,
                    ])}
                    className={`w-fit rounded-full bg-primary-100 hover:bg-primary-200 py-2 px-6 font-semibold text-white text-base block text-center`}
                >
                    Download Excel
                </a>
                <a
                    href={route("absensi-guru.exportPdf", [
                        absens.class_id,
                        absens.id,
                    ])}
                    className={`w-fit rounded-full bg-primary-100 hover:bg-primary-200 py-2 px-6 font-semibold text-white text-base block text-center`}
                >
                    Download Pdf
                </a>
            </div>
            <TableContainer>
                <TableHead datas={tableHeads} />
                <TableBody>
                    {usersByClassId.map((user, index) => {
                        return (
                            <TableRow>
                                <TableData children={index + 1} />
                                <TableData children={formatDate(absens.date)} />
                                <TableData
                                    children={absens.classes.name}
                                    nowrap
                                />
                                <TableData children={user.name} nowrap />
                                <TableData
                                    children={absens.mapels.name}
                                    nowrap
                                />
                                <TableData children={absens.meeting} />
                                <TableData
                                    children={
                                        absenPresents.find(
                                            (present) =>
                                                present.user_id == user.id
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
                                <TableData
                                    children={
                                        <TableActionButton
                                            isEdit={false}
                                            isDelete={
                                                absenPresents.find(
                                                    (present) =>
                                                        present.user_id ==
                                                        user.id
                                                )
                                                    ? true
                                                    : false
                                            }
                                            linkDelete={
                                                absenPresents.find(
                                                    (present) =>
                                                        present.user_id ==
                                                        user.id
                                                )
                                                    ? route(
                                                          "absensi-guru.destroyPresent",
                                                          absenPresents.find(
                                                              (present) =>
                                                                  present.user_id ==
                                                                  user.id
                                                          ).id
                                                      )
                                                    : ""
                                            }
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
