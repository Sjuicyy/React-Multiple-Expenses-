import "../Chart/Chart.css";

function ChartBar(props) {
  let barFillHeight = "0%";
  if (props.maxValue) {
    barFillHeight = Math.round((props.price / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.month}</div>
    </div>
  );
}
export default ChartBar;