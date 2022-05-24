import { useState } from "react";
import "./../assets/css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isFormShow, setFormShow] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpenseDataHandler(expenseData);
    setFormShow(false);
  };

  const handleAddNewExpense = () => {
    setFormShow(true);
  };

  const onCancel=()=>{
    setFormShow(false)
  }
  return (
    <div className="new-expense">
      {!isFormShow && (
        <button onClick={handleAddNewExpense}>Add New Expense</button>
      )}
      {isFormShow && (
        <ExpenseForm onSaveNewExpenseData={saveExpenseDataHandler}  onCancel={onCancel}/>
      )}
    </div>
  );
};
export default NewExpense;
