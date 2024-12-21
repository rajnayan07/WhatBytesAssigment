import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  annotationPlugin
);

const ComparisonChart = ({ yourPercentile }) => {
  const generateLabels = (step, max) => {
    const labels = [];
    for (let i = 0; i <= max; i += step) {
      labels.push(parseFloat(i.toFixed(2)));
    }
    return labels;
  };

  const data = {
    labels: generateLabels(100 / 15, 100),

    datasets: [
      {
        label: "numberOfStudent",
        data: [
          { x: 0, y: 2 },
          { x: 6.67, y: 6 },
          { x: 13.33, y: 8 },
          { x: 20, y: 12 },
          { x: 26.67, y: 18 },
          { x: 33.33, y: 20 },
          { x: 40, y: 22 },
          { x: 46.67, y: 30 },
          { x: 53.33, y: 25 },
          { x: 60, y: 18 },
          { x: 66.67, y: 12 },
          { x: 73.33, y: 10 },
          { x: 80, y: 8 },
          { x: 86.67, y: 6 },
          { x: 93.33, y: 4 },
          { x: 90, y: 4 },
        ],
        borderColor: "#844bc0",
        borderWidth: 1,
        backgroundColor: "rgba(137, 75, 192, 0.2)",
        pointBorderColor: "#a14bc0",
        pointBackgroundColor: "#fff",
        pointHoverBackgroundColor: "#ad4bc0",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
      annotation: {
        annotations: {
          line1: {
            type: "line",
            xMin: (yourPercentile / 100) * 15,
            xMax: (yourPercentile / 100) * 15,
            borderColor: "#8e9191",
            borderWidth: 1,
            label: {
              content: "your percentile",
              enabled: true,
              position: "top",
              backgroundColor: "rgba(255, 99, 132, 0.8)",
            },
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            let temp = (value / 15) * 100;
            if (
              temp === 0 ||
              temp === 20 ||
              temp === 40 ||
              temp === 60 ||
              temp === 80 ||
              temp === 100
            ) {
              return temp;
            }
            return "";
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(200, 200, 200, 0.2)",
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="mx-auto  p-4 bg-white rounded border-2 border-gray-100">
      <h2 className="text-lg font-bold mb-4 ">
        Comparison Graph
      </h2>
      <div className="flex gap-4 mb-8">
        <div className="text-center mt-0">
          <p className="text-gray-700 text-left">
            You scored{" "}
            <span className="font-semibold">{yourPercentile}% percentile</span>{" "}
            which is lower than the average percentile{" "}
            <span className="font-semibold">72%</span> of all the engineers who
            took this assessment.
          </p>
        </div>
        <div className="w-1/4">
          <div className="bg-gray-100 rounded-full h-12 w-12 text-center flex items-center justify-center ">
            📈
          </div>
        </div>
      </div>

      <Line data={data} options={options} />
    </div>
  );
};

export default ComparisonChart;
