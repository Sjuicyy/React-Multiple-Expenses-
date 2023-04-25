import Chart from "../NewExpense2/Chart";
function NewExpenseChart(props) {
  const ExpenseChartData = [
    { month: "Jan", expenditure: "0" },
    { month: "Feb", expenditure: "0" },
    { month: "Mar", expenditure: "0" },
    { month: "Apr", expenditure: "0" },
    { month: "May", expenditure: "0" },
    { month: "Jun", expenditure: "0" },
    { month: "Jul", expenditure: "0" },
    { month: "Aug", expenditure: "0" },
    { month: "Sep", expenditure: "0" },
    { month: "Oct", expenditure: "0" },
    { month: "Nov", expenditure: "0" },
    { month: "Dec", expenditure: "0" },
  ];

  for (const eachExpense of props.data) {
    const dataMonth = eachExpense.date.getMonth();
    ExpenseChartData[dataMonth].expenditure += eachExpense.amount;
  }
  return <Chart chartExpense={ExpenseChartData} />;
}
export default NewExpenseChart;
