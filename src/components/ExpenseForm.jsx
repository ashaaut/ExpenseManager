import event from 'event';
import { useState } from 'react';
import './../assets/css/ExpenseForm.css'

const ExpenseForm = () => {
  const [enteredTitle,setEnteredTitle]=useState("")
  const [enteredAmount,setEnteredAmount]=useState("")
  const [enteredDate,setEnteredDate]=useState("")

    const titleChangeHandler=(event)=>{
      setEnteredTitle(event.target.value)
    }

    const amountChangeHandler=(event)=>{
      setEnteredAmount(event.target.value)
    }
    const dateChangeHandler=(event)=>{
      setEnteredDate(event.target.value)
    }

  return (
    <form className="new-expense-form">
      <div className="new-expense-controls">
        <div className="new-expense-control">
            <label>Title </label>
            <input type='text' onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense-control">
            <label>Amount</label>
            <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense-control">
            <label>Date </label>
            <input type='date'  min="2022-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense-actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
