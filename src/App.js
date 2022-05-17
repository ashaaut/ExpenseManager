import "./assets/css/App.css";
import Expenses from "./components/Expenses";
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
  return (
    <div className="App">
      <Expenses  expenses={expenses}/>
    </div>
  );
}

export default App;
