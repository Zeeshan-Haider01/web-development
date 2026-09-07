import { useState } from "react";

function ExpenseTracker() {
    let [title, setTitle] = useState("");
    let [amount, setAmount] = useState("");
    let [expenses, setExpenses] = useState([]);

    function addExpense() {
        let newExpense = {
            title: title,
            amount: Number(amount)
        }
        setExpenses((prevExpenses) => {
            return [...prevExpenses, newExpense]
        })
        setTitle("")
        setAmount("")
    }

    function handleDelete(index) {
        let newExpenses = expenses.filter((_, i) => i !== index)
        setExpenses(newExpenses)
    }

    function handleEdit(index) {
        let newExpenses = [...expenses]
        let newTitle = prompt( "Enter expense name", newExpenses[index].title )
        let newAmount = prompt( "Enter amount", newExpenses[index].amount )
        if (newTitle !== null && newAmount !== null) {
            newExpenses[index].title = newTitle
            newExpenses[index].amount = Number(newAmount)
            setExpenses(newExpenses)
        }
    }

    let total = expenses.reduce(function(sum, expense) {
        return sum + expense.amount
    }, 0)

    return (
        <>
            <input
                type="text"
                placeholder="Expense name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={addExpense}> Add Expense </button>
            <h3>Total: {total}</h3>
            {
                expenses.map(function(expense, index) {
                    return (
                        <div key={index}>
                            <p> {expense.title} - Rs. {expense.amount} </p>
                            <button onClick={() => handleEdit(index)} > Edit </button>
                            <button onClick={() => handleDelete(index)} > Delete </button>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default ExpenseTracker;