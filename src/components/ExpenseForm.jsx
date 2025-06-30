const ExpenseForm = () => {
    return (
        <div id="expense-form">
            <form className="flex flex-col gap-4">
                <div className="" id="expense-title-container">
                    <label className="font-semibold" htmlFor="expense-title">Title</label>
                    <input
                        type="text"
                        name="expense-title"
                        className="w-full h-8 px-2 outline-1 outline-cyan-700 rounded-sm mt-2"
                        placeholder="expense title"
                    />
                </div>
                <div id="expense-category-container">
                    <label className="font-semibold" htmlFor="expense-category">Category</label>
                    <select name="expense-category" className="w-full h-8 outline-1 outline-cyan-700 rounded-sm mt-2" id="">
                        <option value="all" selected>All</option>
                        <option value="grocery">Grocery</option>
                        <option value="education">Education</option>
                        <option value="bills">Bills</option>
                        <option value="clothes">Clothes</option>
                        <option value="medicine">Medicine</option>
                    </select>
                </div>
                <div id="expense-amount-container">
                    <label className="font-semibold" htmlFor="expense-amount">Amount</label>
                    <input
                        type="text"
                        name="expense-amount"
                        className="w-full h-8 px-2 outline-1 outline-cyan-700 rounded-sm mt-2"
                        placeholder=" expense amount"
                    />
                </div>
                <button className="bg-cyan-800 text-white py-2 rounded-sm cursor-pointer" >Add</button>
            </form>
        </div>
    )
}

export default ExpenseForm
