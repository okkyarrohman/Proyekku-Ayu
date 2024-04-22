import TableBody from "@/Components/General/atoms/TableBody";
import TableContainer from "@/Components/General/atoms/TableContainer";
import TableData from "@/Components/General/atoms/TableData";
import TableHead from "@/Components/General/atoms/TableHead";
import TableRow from "@/Components/General/atoms/TableRow";
import Title from "@/Components/General/atoms/Title";
import CreateTemplate from "@/Components/General/template/CreateTemplate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

export default function KelompokIndex({ auth }) {
    const { kelompoks } = usePage().props;

    const tugasId = localStorage.getItem("TUGAS_ID");

    const kelompoksByTugasId = kelompoks.filter(
        (kelompok) => kelompok.tugas_id == tugasId
    );

    const kelompoksUser = kelompoksByTugasId
        ? kelompoksByTugasId.find((kelompok) =>
              kelompok.members.some((member) => member.user_id == auth.user.id)
          )
        : null;

    const tableHeads = ["No", "Nama", "Role"];

    console.log(kelompoksByTugasId);
    console.log("kelompoks", kelompoksUser);

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <CreateTemplate title="LIHAT ANGGOTA KELOMPOK">
                <div className="mb-6">
                    <Title
                        title={kelompoksUser?.name}
                        color="text-black"
                        weight="font-bold"
                        size="text-3xl"
                    />
                </div>
                <TableContainer>
                    <TableHead datas={tableHeads} />
                    <TableBody>
                        {kelompoksUser?.members.map((member, index) => {
                            return (
                                <TableRow>
                                    <TableData children={index + 1} />
                                    <TableData children={member.users.name} />
                                    <TableData children={member.role} />
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </TableContainer>
            </CreateTemplate>
        </AuthenticatedLayout>
    );
}
