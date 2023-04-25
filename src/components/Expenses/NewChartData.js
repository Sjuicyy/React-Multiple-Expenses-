import Chart from "../NewChart/Chart";

function NewChartData(props) {
  const chartData = [
    { label: "jan", amount: "0" },
    { label: "feb", amount: "0" },
    { label: "mar", amount: "0" },
    { label: "apr", amount: "0" },
    { label: "may", amount: "0" },
    { label: "jun", amount: "0" },
    { label: "jul", amount: "0" },
    { label: "aug", amount: "0" },
    { label: "sep", amount: "0" },
    { label: "oct", amount: "0" },
    { label: "nov", amount: "0" },
    { label: "dec", amount: "0" },
  ];

  for (const expense of props.expense) {
    const expenseMonth = expense.date.getMonth();
    chartData[expenseMonth].amount+=expense.amount;
  }

  return <Chart dataPoints={chartData} />;
}
export default NewChartData;
