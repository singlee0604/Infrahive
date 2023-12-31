import React from 'react'
import { Line } from 'react-chartjs-2';
import {
        Chart as ChartJs,
        ArcElement,
        Tooltip,
        LineElement,
        CategoryScale,
        Filler,
        LinearScale,
        Legend,
        PointElement,
} from "chart.js";

ChartJs.register(
        ArcElement,
        Tooltip,
        LineElement,
        PointElement,
        LinearScale,
        Legend,
        Filler,
        CategoryScale
);
const SessionInteraction = () => {
        const data = {
                labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
                datasets: [
                        {
                                label: "Mathematics",
                                data: [40, 60, 20, 65, 35, 45, 95],
                                tension: 0.4,
                                borderColor: "#F7DCB5",
                        },
                ],
        };
        const options = {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                        legend: {
                                display: false,
                        },
                },
                layout: {
                        padding: {
                                left: 10,
                                right: 10,
                                top: 10,
                                bottom: 10,
                        },
                },
                scales: {
                        x: {
                                grid: {
                                        display: false,
                                },
                        },
                        y: {
                                border: {
                                        dash: [5],
                                },
                                grid: {
                                        drawTicks: false,
                                },
                                ticks: {
                                        stepSize: 10,
                                        padding: 5,
                                        callback: (value: any) => `${value}%`,
                                },
                        },
                },
        };
        return (
                <div className="h-[90%] w-full ">
                        <Line data={data} options={options} />
                </div>
        )
}

export default SessionInteraction