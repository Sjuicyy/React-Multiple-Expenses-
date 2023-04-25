import "../Chart/Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPoints = props.dataPoints.map((dataValue) => dataValue.expend);
  const maxExpend = Math.max(...dataPoints);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.month}
          value={dataPoints.expend}
          maxValue={maxExpend}
          label={dataPoints.month}
        />
      ))}
    </div>
  );
};
export default Chart;
