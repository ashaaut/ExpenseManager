import "./../assets/css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpenseDataHandler(expenseData)
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
