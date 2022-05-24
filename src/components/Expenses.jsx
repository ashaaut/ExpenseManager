import "./../assets/css/Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
const Expenses = (props) => {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2021");
  let expenseContent = <h3>No Expenses Found</h3>;

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpensesData = () => {
    return expenses.filter(
      (expense) => expense.date.getFullYear().toString() == filteredYear
    );
  };

  if (filterExpensesData().length > 0) {
    expenseContent = filterExpensesData().map((expense) => (
      <ExpenseItem expense={expense} />
    ));
  }
  return (
    <div className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        filterChangeHandler={filterChangeHandler}
      />
      {expenseContent}
    </div>
  );
};
export default Expenses;
