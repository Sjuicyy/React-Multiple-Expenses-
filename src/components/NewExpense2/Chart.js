import ChartBar from "../NewExpense2/ChartBar";
import "../Chart/Chart.css";

function Chart(props) {
  console.log(props.chartExpense);
  const allChartExpenditure = props.chartExpense.map(
    (expenses) => expenses.expenditure
  );

  const maxExpenditure = Math.max(...allChartExpenditure);

  console.log(maxExpenditure);
  return (
    <div className="chart">
      {props.chartExpense.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          month={dataPoints.month}
          maxValue={maxExpenditure}
          price={dataPoints.expenditure}
        />
      ))}
    </div>
  );
}
export default Chart;
