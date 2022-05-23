import { useState } from "react";
import "./../assets/css/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    props.onSaveNewExpenseData(userInput)
  };

  return (
    <form className="new-expense-form" onSubmit={submitHandler}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label className="label-add">Title </label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label className="label-add">Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label className="label-add">Date </label>
          <input
            type="date"
            value={userInput.enteredDate}
            min="2022-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
