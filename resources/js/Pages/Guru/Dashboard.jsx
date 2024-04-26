import DataChart from "@/Components/Dashboard/atoms/DataCard";
import NoData from "@/Components/Dashboard/atoms/NoData";
import PieChart from "@/Components/Dashboard/atoms/PieChart";
import WelcomeText from "@/Components/Dashboard/atoms/WelcomeText";
import TugasList from "@/Components/Dashboard/molecules/TugasList";
import Title from "@/Components/General/atoms/Title";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Icon } from "@iconify/react";
import { usePage } from "@inertiajs/react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export default function Dashboard({ auth }) {
    const { absensis, murids, mapels, tugases } = usePage().props;

    console.log("absensis", absensis);
    console.log("murids", murids);
    console.log("mapels", mapels);
    console.log("tugases", tugases);

    const data = [
        //hadir
        absensis?.user_presents.length,
        //tidak hadir
        murids.filter((murid) => murid.class_id == absensis?.class_id).length -
            absensis?.user_presents.length,
    ];

    return (
        <AuthenticatedLayout authUser={auth.user} title="Dashboard">
            <WelcomeText user={auth.user.name} />
            <div className="flex gap-20 mb-12">
                <DataChart
                    icon="mingcute:group-fill"
                    text="Jumlah Siswa"
                    total={murids.length}
                />
                <DataChart
                    icon="ion:book"
                    text="Mata Pelajaran"
                    total={
                        mapels.filter((mapel) => mapel.guru_id == auth.user.id)
                            .length
                    }
                />
                <DataChart
                    icon="uis:schedule"
                    text="Jadwal Hari Ini"
                    total="Basis Data XI RPL 1"
                />
            </div>
            <div className="grid grid-cols-2 items-center gap-16">
                <div className="space-y-6">
                    <Title
                        title="Presensi Siswa Hari Ini"
                        color="text-black"
                        align="text-center"
                    />
                    {absensis ? (
                        <PieChart datas={data} />
                    ) : (
                        <NoData text="Belum Ada Absensi" />
                    )}
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

                        return (
                            <TugasList
                                key={index}
                                desc={tugas.desc}
                                isDeadline={currentDate > deadlineDate}
                                deadline={tugas.deadline}
                                ratioKelompok={`${tugas.answers.length}/${tugas.kelompoks.length}`}
                            />
                        );
                    })}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
