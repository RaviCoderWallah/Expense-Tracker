import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";


const ExpenseTracker = () => {

    return (
        <div className=" bg-white sm:rounded-2xl rounded-sm min-w-[60%] mx-auto p-8 shadow-slate-500 shadow-sm" id="expense-tracker">
            <h1 className="text-4xl text-teal-700 font-semibold" >Trak Your Expense</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-12 mt-8" id="form">
                <ExpenseForm />
                <ExpenseTable />
            </div>

        </div>
    )
}

export default ExpenseTracker