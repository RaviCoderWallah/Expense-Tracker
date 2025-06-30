const TableRow = ({title, category, amount}) => {
    return (
        <tr className="border-b border-gray-200">
            <td className="px-4 py-2">{title}</td>
            <td className="px-4 py-2 border-l border-gray-200">{category}</td>
            <td className="px-4 py-2 border-l border-gray-200">₹{amount}</td>
        </tr>
    )
}

export default TableRow