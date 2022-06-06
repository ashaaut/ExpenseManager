import Chart from "./Chart"
import './../assets/css/ExpensesChart.css'
const ExpensesChart=(props)=>{
    
    const chartDataPoints=[
        {label:'Jan',value:0},
        {label:'feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'Jul',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0}

    ]
    for(const expense of props.expensesData){
        const expenseMonth=expense.date.getMonth();
        chartDataPoints[expenseMonth].value+=expense.amount
    }
    return(
        <div className="expenses-chart">
            <Chart dataPoints={chartDataPoints}/>
        </div>
    )
}
export default ExpensesChart