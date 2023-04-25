import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import FormInput from "./components/DemoTester/FormInput";
import DataDisplay from "./components/DemoTester/DataDisplay";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Note Paper",
    amount: 94.12,
    date: new Date(2019, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 8, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 400,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 150,
    date: new Date(2020, 6, 12),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
