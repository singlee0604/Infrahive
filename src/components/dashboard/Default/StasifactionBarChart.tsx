import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJs, LinearScale, CategoryScale, Filler, Legend, BarElement, Tooltip } from 'chart.js';


ChartJs.register(LinearScale, CategoryScale, Filler, Legend, BarElement, Tooltip);

const StasifactionBarChart: React.FC = () => {
        const data = {
                labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
                datasets: [
                        {
                                label: 'Mathematics',
                                data: [40, 60, 20, 65, 35, 45, 95],
                                backgroundColor: 'rgba(247, 220, 181, 0.6)', // Bar color
                                borderColor: 'rgba(247, 220, 181, 1)',
                                borderWidth: 1,
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
                <div className="h-[90%] w-full">
                        <Bar data={data} options={options} />
                </div>
        );
};

export default StasifactionBarChart;
