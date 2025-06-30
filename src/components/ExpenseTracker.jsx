import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import expenseData from "../../expenseData"

const ExpenseTracker = () => {
    const [expense, setExpense] = useState(expenseData);

    return (
        <div className=" bg-white sm:rounded-2xl rounded-sm min-w-[60%] mx-auto p-8 sm:shadow-slate-500 sm:shadow-sm" id="expense-tracker">
            <h1 className="text-4xl text-teal-700 font-semibold" >Trak Your Expense</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-12 mt-8" id="form">
                <ExpenseForm setExpense={setExpense}/>
                <ExpenseTable expense={expense} />
            </div>

        </div>
    )
}

export default ExpenseTracker