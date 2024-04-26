import LineChart from "@/Components/Dashboard/atoms/LineChart";
import NoData from "@/Components/Dashboard/atoms/NoData";
import WelcomeText from "@/Components/Dashboard/atoms/WelcomeText";
import TugasList from "@/Components/Dashboard/molecules/TugasList";
import TugasListMurid from "@/Components/Dashboard/molecules/TugasListMurid";
import SidebarLink from "@/Components/General/atoms/SidebarLink";
import SidebarProfile from "@/Components/General/atoms/SidebarProfile";
import Title from "@/Components/General/atoms/Title";
import Navbar from "@/Components/General/molecules/Navbar";
import Sidebar from "@/Components/General/molecules/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formatFullDate } from "@/utils/formatFullDate";
import { Icon } from "@iconify/react";
import { usePage } from "@inertiajs/react";
import QRCode from "react-qr-code";

export default function Dashboard({ auth }) {
    const { absensis, tugases, hasilBelajars } = usePage().props;

    const currentDate = new Date();

    console.log("absensis", absensis);
    console.log("hasilBelajars", hasilBelajars);
    console.log("tugases", tugases);

    return (
        <AuthenticatedLayout authUser={auth.user} title="Dashboard">
            <WelcomeText user={auth.user.name} />
            <div className="grid grid-cols-2 gap-20">
                <div className="space-y-6">
                    <div className="bg-primary-600 rounded-xl p-4 w-fit space-y-4">
                        <Title
                            title="Presensi Hari Ini"
                            color="text-black"
                            align="text-center"
                        />
                        {absensis ? (
                            <QRCode
                                value={route("absen.hadir", absensis.id)}
                                className="size-40 mx-auto"
                            />
                        ) : (
                            <NoData text="Belum Ada Absensi" />
                        )}
                        <p className="font-medium text-center">
                            Presensi {formatFullDate(currentDate)}
                        </p>
                    </div>
                    <div className="bg-primary-600 rounded-xl p-4 space-y-4">
                        <Title
                            title="Kemajuan Belajar"
                            align="text-center"
                            color="text-black"
                        />
                        <LineChart
                            labels={hasilBelajars.map(
                                (hasilBelajar) => hasilBelajar.mapels.name
                            )}
                            datas={hasilBelajars.map(
                                (hasilBelajar) => hasilBelajar.grade
                            )}
                        />
                    </div>
                </div>
                <div className="bg-primary-600 rounded-xl p-10 space-y-6">
                    <Title
                        title="Proyek Siswa"
                        align="text-center"
                        color="text-black"
                    />
                    {tugases.map((tugas, index) => {
                        const currentDate = new Date();
                        const deadlineDate = new Date(tugas.deadline);

                        const isUserFinish = tugas.answers.find((answer) =>
                            answer.kelompoks.members.some(
                                (member) => member.user_id == auth.user.id
                            )
                        );

                        console.log(isUserFinish);

                        return (
                            <TugasListMurid
                                key={index}
                                desc={tugas.desc}
                                isDeadline={currentDate > deadlineDate}
                                deadline={tugas.deadline}
                                status={isUserFinish}
                            />
                        );
                    })}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
