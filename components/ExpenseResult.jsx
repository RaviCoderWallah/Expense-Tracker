const ExpenseResult = ({expenses}) => {
  return (
    <div className="expense-tracker-results">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select name="" id="category">
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map(({ id, title, category, amount }) => {
              return <tr key={id}>
                <td>{title}</td>
                <td>{category}</td>
                <td>Rs.{amount}</td>
              </tr>
            })
          }

          <tr>
            <td><b>Total</b></td>
            <td className='empty'></td>
            <td><b>3900</b></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ExpenseResult;
