import TableBody from "@/Components/General/atoms/TableBody";
import TableContainer from "@/Components/General/atoms/TableContainer";
import TableData from "@/Components/General/atoms/TableData";
import TableHead from "@/Components/General/atoms/TableHead";
import TableRow from "@/Components/General/atoms/TableRow";
import AnswerLink from "@/Components/Tugas/atoms/AnswerLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/react";

export default function TugasHasil({ auth }) {
    const { tugases, classes } = usePage().props;

    console.log(tugases);

    const tableHeads = [
        "No",
        "Kelas",
        "No Kelompok",
        "Anggota Kelompok",
        "Proyek",
        "Final Proyek",
    ];

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <TableContainer>
                <TableHead datas={tableHeads} />
                <TableBody>
                    {tugases.answers.map((answer, index) => {
                        return (
                            <TableRow>
                                <TableData children={index + 1} />
                                <TableData
                                    children={
                                        classes.find(
                                            (classItem) =>
                                                classItem.id ==
                                                answer.kelompoks.class_id
                                        )?.name
                                    }
                                />
                                <TableData children={answer.kelompoks.number} />
                                <TableData
                                    children={answer.kelompoks.members.map(
                                        (member) => {
                                            return (
                                                <div>{member.users.name}</div>
                                            );
                                        }
                                    )}
                                />
                                <TableData
                                    children={
                                        <div className="flex flex-col space-y-2">
                                            <AnswerLink
                                                link={`/storage/tugas/answer/answer_3/${answer.answer_3}`}
                                                text="Analisis Basis Data"
                                            />
                                            <AnswerLink
                                                link={`/storage/tugas/answer/answer_4/${answer.answer_4}`}
                                                text="Desain Basis Data"
                                            />
                                            <AnswerLink
                                                link={`/storage/tugas/answer/answer_5/${answer.answer_5}`}
                                                text="Program Basis Data"
                                            />
                                        </div>
                                    }
                                />
                                <TableData
                                    children={
                                        <AnswerLink
                                            link={`/storage/tugas/answer/answer_6/${answer.answer_6}`}
                                            text="Final Proyek"
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
