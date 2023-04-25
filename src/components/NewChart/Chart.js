import "../Chart/Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.amount);
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          label={dataPoints.label}
          value={dataPoints.amount}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
}
export default Chart;
