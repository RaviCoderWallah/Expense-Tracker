import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import TableRow from "./TableRow"

const ExpenseTable = ({ expense }) => {
    return (
        <div className="expense-table">
            <table className="table-auto border border-gray-300 w-full text-left">
                <thead>
                    <tr className="bg-gray-100 border-b border-gray-300">
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2 border-l border-gray-200">
                            <select name="expense-category" className="border-none focus:outline-none focus:ring-0 focus:border-transparent" id="">
                                <option value="">All</option>
                                <option value="grocery">Grocery</option>
                                <option value="education">Education</option>
                                <option value="bills">Bills</option>
                                <option value="clothes">Clothes</option>
                                <option value="medicine">Medicine</option>
                            </select>
                        </th>
                        <th className="px-4 py-2 border-l flex gap-2 items-center border-gray-200">

                            Amount
                            <FaLongArrowAltUp className="cursor-pointer" />
                            <FaLongArrowAltDown className="cursor-pointer" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expense?.map(({ title, id, category, amount }) => {
                            return <TableRow title={title} key={id} category={category} amount={amount} />
                        })
                    }
                    <tr className="border-b border-gray-200">
                        <td className="px-4 py-2 font-bold">Total</td>
                        <td className="px-4 py-2 border-l border-gray-200"></td>
                        <td className="px-4 py-2 border-l border-gray-200">₹890</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}

export default ExpenseTable