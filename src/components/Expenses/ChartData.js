import Chart from "../ChartDemo/ChartBar";

function ChartData(props) {
  const chartDataPoints = [
    { month: "Jan", expend: "0" },
    { month: "Feb", expend: "0" },
    { month: "Mar", expend: "0" },
    { month: "Apr", expend: "0" },
    { month: "May", expend: "0" },
    { month: "Jun", expend: "0" },
    { month: "Jul", expend: "0" },
    { month: "Aug", expend: "0" },
    { month: "Sep", expend: "0" },
    { month: "Oct", expend: "0" },
    { month: "Nov", expend: "0" },
    { month: "Dec", expend: "0" },
  ];
  for (const expense of props.expenses ){
    const givenMonth = expense.date.getMonth();
    chartDataPoints[givenMonth].expend+=expense.amount;
    // console.log(chartDataPoints)
  }
  return (
    <Chart dataPoints={chartDataPoints} />
  )
}
export default ChartData