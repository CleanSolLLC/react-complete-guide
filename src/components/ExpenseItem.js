import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
console.log(props)
const d = new Date(props.date);
const year = d.getFullYear();
const month = d.toLocaleString('en-US', {month: 'long'});
const day = d.toLocaleString('en-US', {day: 'numeric'});


//   const expenseType = 'Car Insurance';
//   const expenseAmount = 294.67;

  return  (

    <div className ='expense-item'>
        <div>
          <ExpenseDate 
             year={year}
             month={month}
             day={day}> 
          </ExpenseDate>
        </div>

        <div className = 'expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    </div> 
  )
}
export default ExpenseItem;
