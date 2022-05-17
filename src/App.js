import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
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
      date: new Date(2021, 3, 28),
    },
  ];
  return (
    <div className="App">
      <ExpenseItem  expenses={expenses}/>
    </div>
  );
}

export default App;
