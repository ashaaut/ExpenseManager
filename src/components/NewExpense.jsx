import { useState } from "react";
import "./../assets/css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [shouldShowAddNewExpense, setAddNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpenseDataHandler(expenseData);
    setAddNewExpense(false)
  };

  const handleAddNewExpense = () => {
    setAddNewExpense(true);
  };

  return (
    <div className="new-expense">
      {shouldShowAddNewExpense ? (
        <ExpenseForm onSaveNewExpenseData={saveExpenseDataHandler} />
      ) : (
        <button onClick={handleAddNewExpense}>Add New Expense</button>
      )}
    </div>
  );
};
export default NewExpense;
