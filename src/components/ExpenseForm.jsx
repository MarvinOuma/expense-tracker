import { useState } from "react";

function ExpenseForm({ setExpenses }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setExpenses((prev) => [...prev, formData]);
    setFormData({
      name: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Expense</h3>
      <input
        type="text"
        name="name"
        placeholder="Expense name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Enter expense description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Enter category"
        value={formData.category}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Enter amount"
        value={formData.amount}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;
