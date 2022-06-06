import "./assets/css/App.css";
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import NewExpense from "./components/NewExpense";
import { useState } from "react";
function App() {
  const dummyExpenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 29400.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 2,
      title: "New TV",
      amount: 29400.67,
      date: new Date(2021, 3, 28),
    },
    {
      id: 3,
      title: "Makeup",
      amount: 2940.67,
      date: new Date(2021, 4, 28),
    },
    {
      id: 3,
      title: "cloths",
      amount: 10000.67,
      date: new Date(2021, 5, 28),
    },
  ];
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };
  console.log("expensesss", expenses);

  return (
    <div className="App">
      <div className="new-expense-div">
        <NewExpense addExpenseDataHandler={addExpenseDataHandler} />
      </div>
      <div className="expenses-div">
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
