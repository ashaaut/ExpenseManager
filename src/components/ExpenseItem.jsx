import { useState } from "react";
import "./../assets/css/ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";

const ExpenseItem=(props) =>{
  const expense = props.expense;
  
  return (
    <div className="expense-item">
      <div className="expense-date"><ExpenseDate date={expense.date}/></div>
      <div className="expense-item-desc">
        <h2>{expense.title}</h2>
        <div className="expense-item-price">${expense.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
