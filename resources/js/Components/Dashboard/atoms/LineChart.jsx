import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
);

export default function LineChart({ labels, datas }) {
    const options = {
        responsive: true,
    };

    // const labels = [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "June",
    //     "July",
    // ];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Dataset 1",
                data: datas,
                borderColor: "rgba(79, 146, 186, 1)",
                backgroundColor: "rgba(79, 146, 186, 1)",
            },
        ],
    };

    return <Line options={options} data={data} />;
}
