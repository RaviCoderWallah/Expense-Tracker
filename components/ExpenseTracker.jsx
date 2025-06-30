import { useState } from "react"
import ExpenseDetails from "../components/ExpenseDetails"
import ExpenseResult from '../components/ExpenseResult'
import expenseData from "../expenseData"

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState(expenseData);

  return (
    <div className="container">
    <h1>Track Your Expense</h1>
    <div className="expense-tracker-container">
      <ExpenseDetails setExpenses={setExpenses}/>
      <ExpenseResult expenses={expenses}/>
    </div>
  </div>
  )
}

export default ExpenseTracker;
