import "./assets/css/App.css";
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import NewExpense from "./components/NewExpense";
function App() {
  const expenses = [
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

  const addExpenseDataHandler=(expense)=>{
    expenses.push(expense)
    console.log(expenses);
  }

  return (
    <div className="App">
      <NewExpense addExpenseDataHandler={addExpenseDataHandler}/>
      <Expenses  expenses={expenses}/>
    </div>
  );
}

export default App;
