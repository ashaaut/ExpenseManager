import "./assets/css/App.css";
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import NewExpense from "./components/NewExpense";
import { useState } from "react";
function App() {
  const dummyExpenses = [
    {
      
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      title: "New TV",
      amount: 29400.67,
      date: new Date(2021, 3, 28),
    },
    {
      title: "Makeup",
      amount: 294.67,
      date: new Date(2021, 4, 28),
    },
  ];
  const [expenses,setExpenses]=useState(dummyExpenses)
  

  const addExpenseDataHandler=(expense)=>{
    setExpenses([...expenses,expense])
  }
  
  return (
    
    <div className="App">
      <NewExpense addExpenseDataHandler={addExpenseDataHandler}/>
      <Expenses  expenses={expenses}/>
    </div>
  );
}

export default App;
