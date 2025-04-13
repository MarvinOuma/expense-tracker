import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSortedExpenses = () => {
    const sorted = [...filteredExpenses];
    if (!sortBy) return sorted;

    sorted.sort((a, b) => {
      if (sortBy === "amount") {
        return sortDirection === "asc"
          ? a.amount - b.amount
          : b.amount - a.amount;
      } else if (sortBy === "date") {
        return sortDirection === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      } else {
        return sortDirection === "asc"
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      }
    });

    return sorted;
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(field);
      setSortDirection("asc");
    }
  };

  const handleDeleteExpense = (indexToDelete) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <ExpenseForm setExpenses={setExpenses} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseTable
        expenses={getSortedExpenses()}
        onSort={handleSort}
        onDelete={handleDeleteExpense} 
      />
    </div>
  );
}

export default App;