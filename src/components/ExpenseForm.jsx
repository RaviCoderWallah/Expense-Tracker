const ExpenseForm = ({setExpense}) => {

    const handleSubmitForm = (e) => {
        e.preventDefault();
        getFormData(e.target)
        setExpense((prevState) => [...prevState, getFormData(e.target)]);
    }

    const getFormData = (form) => {
        const formData = new FormData(form);
        const data = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        return data;
    }

    return (
        <div id="expense-form">
            <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
                <div className="" id="expense-title-container">
                    <label className="font-semibold" htmlFor="expense-title">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full h-8 px-2 outline-1 outline-cyan-700 rounded-sm mt-2"
                        placeholder="expense title"
                        required
                    />
                </div>
                <div id="expense-category-container">
                    <label className="font-semibold" htmlFor="expense-category">Category</label>
                    <select
                        name="category"
                        className="w-full h-8 outline-1 outline-cyan-700 rounded-sm mt-2"
                        required
                    >
                        <option value="" hidden>Selected Category</option>
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
                        type="number"
                        name="amount"
                        className="w-full h-8 px-2 outline-1 outline-cyan-700 rounded-sm mt-2"
                        placeholder=" expense amount"
                        required
                    />
                </div>
                <button className="bg-cyan-800 text-white py-2 rounded-sm cursor-pointer">Add</button>
            </form>
        </div>
    )
}

export default ExpenseForm
