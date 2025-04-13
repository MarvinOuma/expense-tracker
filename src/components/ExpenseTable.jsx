import React from 'react';

function ExpenseTable({ expenses, onSort, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => onSort("description")}>Expense</th>
          <th onClick={() => onSort("category")}>Category</th>
          <th onClick={() => onSort("amount")}>Amount</th>
          <th onClick={() => onSort("date")}>Date</th>
          <th>Actions</th> 
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>${Number(expense.amount).toFixed(2)}</td>
            <td>{expense.date}</td>
            <td>
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;