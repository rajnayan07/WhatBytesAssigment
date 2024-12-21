import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ n }) => {
  const data = {
    labels: ["Value"],
    datasets: [
      {
        data: [n, 15 - n],
        backgroundColor: ["rgb(59 130 246)", "#e0e0e0"],
        hoverBackgroundColor: ["rgb(29 26 255)", "#cfcfcf"],
        borderWidth: 0,
        cutout: "70%",
        rotation: 180,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="w-52 h-52 p-10 mx-auto bg-white rounded relative">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span style={{ fontSize: "1.5rem" }}>🎯</span>
      </div>
    </div>
  );
};

export default PieChart;
