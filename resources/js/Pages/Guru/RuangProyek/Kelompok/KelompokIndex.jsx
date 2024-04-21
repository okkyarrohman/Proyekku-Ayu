import PrimaryButton from "@/Components/General/atoms/PrimaryButton";
import PrimaryLink from "@/Components/General/atoms/PrimaryLink";
import TableActionButton from "@/Components/General/atoms/TableActionButton";
import TableBody from "@/Components/General/atoms/TableBody";
import TableContainer from "@/Components/General/atoms/TableContainer";
import TableData from "@/Components/General/atoms/TableData";
import TableHead from "@/Components/General/atoms/TableHead";
import TableRow from "@/Components/General/atoms/TableRow";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

export default function KelompokIndex({ auth }) {
    const { kelompoks, classes } = usePage().props;

    const tugasId = localStorage.getItem("TUGAS_ID");

    const kelompoksByTugasId = kelompoks.filter(
        (kelompok) => kelompok.tugas_id == tugasId
    );

    console.log(kelompoksByTugasId);

    const tableHeads = ["No", "Kelas", "Nama", "Anggota Kelompok", "Aksi"];

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <div className="mb-6 flex justify-end">
                <PrimaryLink
                    text="Tambah Kelompok"
                    href={route("kelompok-guru.create")}
                />
            </div>
            <TableContainer>
                <TableHead datas={tableHeads} />
                <TableBody>
                    {kelompoksByTugasId?.map((kelompok, index) => {
                        return (
                            <TableRow key={index}>
                                <TableData children={kelompok.number} />
                                <TableData
                                    children={
                                        classes.find(
                                            (classItem) =>
                                                classItem.id ==
                                                kelompok.class_id
                                        )?.name
                                    }
                                />
                                <TableData children={kelompok.name} />
                                <TableData
                                    children={
                                        <div>
                                            {kelompok.members.map(
                                                (member, index) => (
                                                    <p key={index}>
                                                        {member.users.name}
                                                    </p>
                                                )
                                            )}
                                        </div>
                                    }
                                />
                                <TableData
                                    children={
                                        <TableActionButton
                                            linkEdit={route(
                                                "kelompok-guru.edit",
                                                kelompok.id
                                            )}
                                            linkDelete={route(
                                                "kelompok-guru.destroy",
                                                kelompok.id
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
