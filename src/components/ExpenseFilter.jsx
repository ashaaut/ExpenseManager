import './../assets/css/ExpenseFilter.css'
const ExpenseFilter=()=>{
    return(
        <div className="expense-filter">
            <div className="expense-filter-control">
                <label className='expense-filter-label'>Filter By Year</label>
                <select>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}
export default ExpenseFilter