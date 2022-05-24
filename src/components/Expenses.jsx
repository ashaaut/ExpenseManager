import "./../assets/css/Expenses.css"
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
const Expenses=(props)=> {
  const expenses = props.expenses;
  const [filteredYear,setFilteredYear]=useState("2022")
  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear)
  }
  console.log(expenses);
  return (
    <div className="expenses">
      <ExpenseFilter  selectedYear={filteredYear} filterChangeHandler={filterChangeHandler}/>
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} />
      ))}
    </div>
  );
}
export default Expenses;
