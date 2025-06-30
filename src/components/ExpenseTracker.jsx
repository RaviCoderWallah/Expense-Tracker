const ExpenseTracker = () => {
    return (
        <div id="expense-tracker">
            <h1>Trak Your Expense</h1>
            <div id="expense-form">
                <form>
                    <div id="expense-title-container">
                        <label for="expense-title">Title</label>
                        <input type="text" name="expense-title" />
                    </div>
                    <div id="expense-category-container">
                        <label for="expense-category"></label>
                        <input type="text" name="expense-category" />
                    </div>
                    <div id="expense-amount-container">
                        <label for="expense-amount"></label>
                        <input type="text" name="expense-amount" />
                    </div>
                    <button>Add</button>
                </form>
            </div>
            <div class="expense-table"></div>
        </div>
    )
}

export default ExpenseTracker