import { useState } from "react";

const ExpenseDetails = ({ setExpenses }) => {
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(expense)
    // const expense = { title, category, amount, id: crypto.randomUUID() };
    setExpenses((prevState => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() }
    ]));

    setExpense({
      title: '',
      category: '',
      amount: ''
    })

  }

  const handleChange = (e) => setExpense((prevState) => ({ ...prevState, title: e.target.value }));

  return (
    <div className="expense-tracker-input-fields">
      <form onSubmit={handleSubmit}>

        <div className="expense-title">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name='title'
            id='title'
            value={expense.title}
            onChange={handleChange} />
        </div>

        <div className="expense-category">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={expense.category}
            onChange={handleChange} >
            <option value="" hidden>Choose Your Category</option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
        </div>

        <div className="expense-amount">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name='amount'
            id='amount'
            value={expense.amount}
            onChange={handleChange} />
        </div>

        <div className="add-btn-container">
          <button id='add-btn'>Add</button>
        </div>

      </form>
    </div>
  )
}

export default ExpenseDetails;