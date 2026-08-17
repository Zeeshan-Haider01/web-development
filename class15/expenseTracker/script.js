// ======================================================
// 1. SELECT DOM ELEMENTS
// ======================================================

const addTransactionBtn =
    document.getElementById("addTransactionBtn");

const transactionModal =
    document.getElementById("transactionModal");

const closeModalBtn =
    document.getElementById("closeModalBtn");

const transactionForm =
    document.getElementById("transactionForm");

const modalTitle =
    document.getElementById("modalTitle");


// Form fields

const transactionId =
    document.getElementById("transactionId");

const titleInput =
    document.getElementById("title");

const amountInput =
    document.getElementById("amount");

const typeInput =
    document.getElementById("type");

const categoryInput =
    document.getElementById("category");

const dateInput =
    document.getElementById("date");

const descriptionInput =
    document.getElementById("description");


// Filters

const searchInput =
    document.getElementById("searchInput");

const typeFilter =
    document.getElementById("typeFilter");

const categoryFilter =
    document.getElementById("categoryFilter");

const sortFilter =
    document.getElementById("sortFilter");


// Transaction list

const transactionList =
    document.getElementById("transactionList");


// Buttons

const clearAllBtn =
    document.getElementById("clearAllBtn");


// Summary

const balanceElement =
    document.getElementById("balance");

const totalIncomeElement =
    document.getElementById("totalIncome");

const totalExpenseElement =
    document.getElementById("totalExpense");

const transactionCountElement =
    document.getElementById("transactionCount");


// ======================================================
// 2. APPLICATION DATA
// ======================================================

let transactions =
    JSON.parse(
        localStorage.getItem("transactions")
    ) || [];


// ======================================================
// 3. START APPLICATION
// ======================================================

renderApp();


// ======================================================
// 4. RENDER ENTIRE APPLICATION
// ======================================================

function renderApp() {

    renderTransactions();

    updateSummary();

}


// ======================================================
// 5. RENDER TRANSACTIONS
// ======================================================

function renderTransactions() {

    transactionList.innerHTML = "";


    let filteredTransactions =
        getFilteredTransactions();


    filteredTransactions =
        sortTransactions(
            filteredTransactions
        );


    if (filteredTransactions.length === 0) {

        showEmptyState();

        return;

    }


    filteredTransactions.forEach(
        function (transaction) {

            const element =
                createTransactionElement(
                    transaction
                );


            transactionList.appendChild(
                element
            );

        }
    );

}


// ======================================================
// 6. CREATE TRANSACTION ELEMENT
// ======================================================

function createTransactionElement(
    transaction
) {

    const div =
        document.createElement("div");


    div.classList.add(
        "transaction"
    );


    const sign =
        transaction.type === "income"
            ? "+"
            : "-";


    const amountClass =
        transaction.type === "income"
            ? "income-amount"
            : "expense-amount";


    const icon =
        getCategoryIcon(
            transaction.category
        );


    div.innerHTML = `

        <div class="transaction-left">

            <div class="transaction-icon">
                ${icon}
            </div>

            <div class="transaction-info">

                <h3>
                    ${escapeHTML(
                        transaction.title
                    )}
                </h3>

                <p>
                    ${capitalize(
                        transaction.category
                    )}
                    •
                    ${formatDate(
                        transaction.date
                    )}
                </p>

                ${
                    transaction.description
                    ?
                    `<p>
                        ${escapeHTML(
                            transaction.description
                        )}
                    </p>`
                    :
                    ""
                }

            </div>

        </div>


        <div class="transaction-right">

            <div
                class="transaction-amount ${amountClass}"
            >
                ${sign}
                $${formatAmount(
                    transaction.amount
                )}
            </div>


            <div class="transaction-actions">

                <button
                    data-action="edit"
                    data-id="${transaction.id}"
                >
                    Edit
                </button>

                <button
                    data-action="delete"
                    data-id="${transaction.id}"
                >
                    Delete
                </button>

            </div>

        </div>

    `;


    return div;

}


// ======================================================
// 7. ADD TRANSACTION
// ======================================================

transactionForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        clearErrors();


        const isValid =
            validateForm();


        if (!isValid) {

            return;

        }


        const transactionData = {

            title:
                titleInput.value.trim(),

            amount:
                Number(amountInput.value),

            type:
                typeInput.value,

            category:
                categoryInput.value,

            date:
                dateInput.value,

            description:
                descriptionInput.value.trim()

        };


        // ==================================================
        // EDIT
        // ==================================================

        if (transactionId.value) {

            const id =
                Number(
                    transactionId.value
                );


            const index =
                transactions.findIndex(
                    function (transaction) {

                        return (
                            transaction.id === id
                        );

                    }
                );


            if (index !== -1) {

                transactions[index] = {

                    ...transactions[index],

                    ...transactionData

                };

            }

        }


        // ==================================================
        // ADD
        // ==================================================

        else {

            const newTransaction = {

                id: Date.now(),

                ...transactionData

            };


            transactions.push(
                newTransaction
            );

        }


        saveTransactions();


        renderApp();


        closeModal();

    }
);


// ======================================================
// 8. FORM VALIDATION
// ======================================================

function validateForm() {

    let valid = true;


    const title =
        titleInput.value.trim();


    const amount =
        Number(amountInput.value);


    const date =
        dateInput.value;


    if (title === "") {

        showError(
            "titleError",
            "Title is required."
        );

        valid = false;

    }


    if (amount <= 0 || isNaN(amount)) {

        showError(
            "amountError",
            "Enter a valid amount."
        );

        valid = false;

    }


    if (date === "") {

        showError(
            "dateError",
            "Please select a date."
        );

        valid = false;

    }


    return valid;

}


// ======================================================
// 9. SHOW ERROR
// ======================================================

function showError(
    elementId,
    message
) {

    const element =
        document.getElementById(
            elementId
        );


    element.textContent =
        message;

}


// ======================================================
// 10. CLEAR ERRORS
// ======================================================

function clearErrors() {

    document.querySelectorAll(
        ".error"
    ).forEach(
        function (element) {

            element.textContent = "";

        }
    );

}


// ======================================================
// 11. EVENT DELEGATION
// ======================================================

transactionList.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "button[data-action]"
            );


        if (!button) {

            return;

        }


        const action =
            button.dataset.action;


        const id =
            Number(
                button.dataset.id
            );


        if (action === "edit") {

            editTransaction(id);

        }


        if (action === "delete") {

            deleteTransaction(id);

        }

    }
);


// ======================================================
// 12. EDIT TRANSACTION
// ======================================================

function editTransaction(id) {

    const transaction =
        transactions.find(
            function (transaction) {

                return (
                    transaction.id === id
                );

            }
        );


    if (!transaction) {

        return;

    }


    modalTitle.textContent =
        "Edit Transaction";


    transactionId.value =
        transaction.id;


    titleInput.value =
        transaction.title;


    amountInput.value =
        transaction.amount;


    typeInput.value =
        transaction.type;


    categoryInput.value =
        transaction.category;


    dateInput.value =
        transaction.date;


    descriptionInput.value =
        transaction.description;


    transactionModal.classList.add(
        "active"
    );

}


// ======================================================
// 13. DELETE TRANSACTION
// ======================================================

function deleteTransaction(id) {

    const transaction =
        transactions.find(
            function (transaction) {

                return (
                    transaction.id === id
                );

            }
        );


    if (!transaction) {

        return;

    }


    const confirmed =
        confirm(
            `Delete "${transaction.title}"?`
        );


    if (!confirmed) {

        return;

    }


    transactions =
        transactions.filter(
            function (transaction) {

                return (
                    transaction.id !== id
                );

            }
        );


    saveTransactions();


    renderApp();

}


// ======================================================
// 14. SEARCH
// ======================================================

searchInput.addEventListener(
    "input",
    function () {

        renderTransactions();

    }
);


// ======================================================
// 15. TYPE FILTER
// ======================================================

typeFilter.addEventListener(
    "change",
    function () {

        renderTransactions();

    }
);


// ======================================================
// 16. CATEGORY FILTER
// ======================================================

categoryFilter.addEventListener(
    "change",
    function () {

        renderTransactions();

    }
);


// ======================================================
// 17. SORT
// ======================================================

sortFilter.addEventListener(
    "change",
    function () {

        renderTransactions();

    }
);


// ======================================================
// 18. FILTER TRANSACTIONS
// ======================================================

function getFilteredTransactions() {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    const selectedType =
        typeFilter.value;


    const selectedCategory =
        categoryFilter.value;


    return transactions.filter(
        function (transaction) {

            const matchesSearch =
                transaction.title
                    .toLowerCase()
                    .includes(search);


            const matchesType =
                selectedType === "all"
                ||
                transaction.type === selectedType;


            const matchesCategory =
                selectedCategory === "all"
                ||
                transaction.category ===
                    selectedCategory;


            return (
                matchesSearch
                &&
                matchesType
                &&
                matchesCategory
            );

        }
    );

}


// ======================================================
// 19. SORT TRANSACTIONS
// ======================================================

function sortTransactions(
    transactionArray
) {

    const sorted =
        [...transactionArray];


    const sort =
        sortFilter.value;


    if (sort === "newest") {

        sorted.sort(
            function (a, b) {

                return (
                    new Date(b.date)
                    -
                    new Date(a.date)
                );

            }
        );

    }


    if (sort === "oldest") {

        sorted.sort(
            function (a, b) {

                return (
                    new Date(a.date)
                    -
                    new Date(b.date)
                );

            }
        );

    }


    if (sort === "highest") {

        sorted.sort(
            function (a, b) {

                return (
                    b.amount - a.amount
                );

            }
        );

    }


    if (sort === "lowest") {

        sorted.sort(
            function (a, b) {

                return (
                    a.amount - b.amount
                );

            }
        );

    }


    if (sort === "az") {

        sorted.sort(
            function (a, b) {

                return a.title.localeCompare(
                    b.title
                );

            }
        );

    }


    return sorted;

}


// ======================================================
// 20. UPDATE SUMMARY
// ======================================================

function updateSummary() {

    const income =
        transactions
            .filter(
                function (transaction) {

                    return (
                        transaction.type ===
                        "income"
                    );

                }
            )
            .reduce(
                function (total, transaction) {

                    return (
                        total +
                        transaction.amount
                    );

                },
                0
            );


    const expenses =
        transactions
            .filter(
                function (transaction) {

                    return (
                        transaction.type ===
                        "expense"
                    );

                }
            )
            .reduce(
                function (total, transaction) {

                    return (
                        total +
                        transaction.amount
                    );

                },
                0
            );


    const balance =
        income - expenses;


    balanceElement.textContent =
        "$" + formatAmount(balance);


    totalIncomeElement.textContent =
        "$" + formatAmount(income);


    totalExpenseElement.textContent =
        "$" + formatAmount(expenses);


    transactionCountElement.textContent =
        transactions.length;

}


// ======================================================
// 21. LOCAL STORAGE
// ======================================================

function saveTransactions() {

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

}


// ======================================================
// 22. OPEN ADD MODAL
// ======================================================

addTransactionBtn.addEventListener(
    "click",
    function () {

        openAddModal();

    }
);


function openAddModal() {

    modalTitle.textContent =
        "Add Transaction";


    transactionForm.reset();


    transactionId.value = "";


    clearErrors();


    // Set today's date

    dateInput.value =
        new Date()
            .toISOString()
            .split("T")[0];


    transactionModal.classList.add(
        "active"
    );

}


// ======================================================
// 23. CLOSE MODAL
// ======================================================

closeModalBtn.addEventListener(
    "click",
    function () {

        closeModal();

    }
);


function closeModal() {

    transactionModal.classList.remove(
        "active"
    );

    transactionForm.reset();

    transactionId.value = "";

    clearErrors();

}


// ======================================================
// 24. CLOSE MODAL WHEN CLICKING OUTSIDE
// ======================================================

transactionModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            transactionModal
        ) {

            closeModal();

        }

    }
);


// ======================================================
// 25. CLEAR ALL
// ======================================================

clearAllBtn.addEventListener(
    "click",
    function () {

        if (transactions.length === 0) {

            alert(
                "There are no transactions."
            );

            return;

        }


        const confirmed =
            confirm(
                "Are you sure you want to delete all transactions?"
            );


        if (!confirmed) {

            return;

        }


        transactions = [];


        saveTransactions();


        renderApp();

    }
);


// ======================================================
// 26. EMPTY STATE
// ======================================================

function showEmptyState() {

    transactionList.innerHTML = `

        <div class="empty">

            <h3>
                No transactions found
            </h3>

            <p>
                Add your first transaction
                to get started.
            </p>

        </div>

    `;

}


// ======================================================
// 27. FORMAT AMOUNT
// ======================================================

function formatAmount(amount) {

    return Number(amount)
        .toLocaleString(
            "en-US",
            {
                minimumFractionDigits: 2,

                maximumFractionDigits: 2
            }
        );

}


// ======================================================
// 28. FORMAT DATE
// ======================================================

function formatDate(date) {

    return new Date(date)
        .toLocaleDateString(
            "en-US",
            {
                month: "short",

                day: "numeric",

                year: "numeric"
            }
        );

}


// ======================================================
// 29. CAPITALIZE
// ======================================================

function capitalize(text) {

    return (
        text.charAt(0).toUpperCase()
        +
        text.slice(1)
    );

}


// ======================================================
// 30. CATEGORY ICON
// ======================================================

function getCategoryIcon(
    category
) {

    const icons = {

        food: "🍔",

        transport: "🚕",

        shopping: "🛍️",

        bills: "💡",

        salary: "💼",

        freelance: "💻",

        other: "📦"

    };


    return icons[category] || "💰";

}


// ======================================================
// 31. ESCAPE HTML
// ======================================================

function escapeHTML(text) {

    const div =
        document.createElement("div");


    div.textContent = text;


    return div.innerHTML;

}