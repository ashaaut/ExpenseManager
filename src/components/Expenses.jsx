import "./../assets/css/Expenses.css"
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
const Expenses=(props)=> {
  const expenses = props.expenses;

  return (
    <div className="expenses">
      <ExpenseFilter/>
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} />
      ))}
    </div>
  );
}
export default Expenses;
