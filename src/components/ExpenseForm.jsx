import { useState } from "react";
import "./../assets/css/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: parseInt(event.target.value) };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      let spliltedDate=event.target.value.split("-")
      let date=new Date(spliltedDate[0],spliltedDate[1],spliltedDate[2])
      console.log("date",date);
      return { ...prevState, date: date};
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setUserInput({
      title: "",
      amount: "",
      date: "",
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
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label className="label-add">Amount</label>
          <input
            type="number"
            value={userInput.amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label className="label-add">Date </label>
          <input
            type="date"
            value={userInput.date}
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
