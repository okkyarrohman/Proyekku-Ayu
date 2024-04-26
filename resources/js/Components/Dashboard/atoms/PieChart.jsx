import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export default function PieChart({ datas }) {
    const data = {
        labels: ["Hadir", "Tidak Hadir"],
        datasets: [
            {
                label: "Jumlah Siswa",
                data: datas,
                backgroundColor: [
                    "rgba(79, 146, 186, 1)",
                    "rgba(188, 188, 196, 1)",
                ],
                borderColor: [
                    "rgba(79, 146, 186, 1)",
                    "rgba(188, 188, 196, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="flex justify-center items-center gap-6">
            <div>
                <Pie data={data} />
            </div>
            <div className="*:text-xl *:font-semibold">
                <p>Hadir : {datas[0]}</p>
                <p>Tidak Hadir : {datas[1]}</p>
            </div>
        </div>
    );
}
