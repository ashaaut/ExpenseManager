import './ExpenseItem.css'
function ExpenseItem(props) {
    const expenses=props.expenses
  return (
    <div className='expense-item'>
      <div className='expense-date'>March 28th 2021</div>
      <div className='expense-item-desc'>
        <h2>Bike Insurance</h2>
        <div className='expense-item-price'>$294.80</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
