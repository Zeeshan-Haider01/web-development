// ==========================================
// 1. SELECT ELEMENTS
// ==========================================

const addTaskBtn = document.getElementById("addTaskBtn");
const taskModal = document.getElementById("taskModal");
const closeModal = document.getElementById("closeModal");
const taskForm = document.getElementById("taskForm");
const modalTitle = document.getElementById("modalTitle");
const taskId = document.getElementById("taskId");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskPriority = document.getElementById("taskPriority");
const taskDueDate = document.getElementById("taskDueDate");
const taskStatus = document.getElementById("taskStatus");
const searchInput = document.getElementById("searchInput");
const priorityFilter = document.getElementById("priorityFilter");
const sortSelect = document.getElementById("sortSelect");
const clearAllBtn = document.getElementById("clearAllBtn");


// Task containers

const todoTasks = document.getElementById("todoTasks");
const progressTasks = document.getElementById("progressTasks");
const completedTasks = document.getElementById("completedTasks");


// Counters

const todoCount = document.getElementById("todoCount");
const progressCount = document.getElementById("progressCount");
const completedCount = document.getElementById("completedCount");


// ==========================================
// 2. DATA
// ==========================================

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// ==========================================
// 3. INITIALIZE
// ==========================================

renderTasks();


// ==========================================
// 4. OPEN MODAL
// ==========================================

addTaskBtn.addEventListener("click", function () {
    openAddModal();

});


// ==========================================
// 5. CLOSE MODAL
// ==========================================

closeModal.addEventListener("click", function () {

    closeTaskModal();

});


// Close when clicking outside modal

taskModal.addEventListener("click", function (event) {

    if (event.target === taskModal) {

        closeTaskModal();

    }

});


// ==========================================
// 6. ADD / EDIT TASK
// ==========================================

taskForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const title =
        taskTitle.value.trim();

    const description =
        taskDescription.value.trim();

    const priority =
        taskPriority.value;

    const dueDate =
        taskDueDate.value;

    const status =
        taskStatus.value;


    // Validation

    if (title === "") {

        alert("Please enter a task title.");

        return;

    }


    // ======================================
    // EDIT EXISTING TASK
    // ======================================

    if (taskId.value) {

        const id =
            Number(taskId.value);

        const task =
            tasks.find(function (task) {

                return task.id === id;

            });


        if (task) {

            task.title = title;

            task.description = description;

            task.priority = priority;

            task.dueDate = dueDate;

            task.status = status;

        }

    }


    // ======================================
    // CREATE NEW TASK
    // ======================================

    else {

        const newTask = {

            id: Date.now(),

            title: title,

            description: description,

            priority: priority,

            dueDate: dueDate,

            status: status,

            createdAt: new Date().toISOString()

        };


        tasks.push(newTask);

    }


    // Save

    saveTasks();


    // Render

    renderTasks();


    // Close

    closeTaskModal();

});


// ==========================================
// 7. RENDER TASKS
// ==========================================

function renderTasks() {

    // Clear old DOM

    todoTasks.innerHTML = "";

    progressTasks.innerHTML = "";

    completedTasks.innerHTML = "";


    // Get filtered tasks

    let filteredTasks =
        getFilteredTasks();


    // Sort

    filteredTasks =
        sortTasks(filteredTasks);


    // Render each task

    filteredTasks.forEach(function (task) {

        const taskElement =
            createTaskElement(task);


        if (task.status === "todo") {

            todoTasks.appendChild(taskElement);

        }

        else if (task.status === "progress") {

            progressTasks.appendChild(taskElement);

        }

        else if (task.status === "completed") {

            completedTasks.appendChild(taskElement);

        }

    });


    // Empty states

    showEmptyState( todoTasks, "No todo tasks" );
    showEmptyState( progressTasks, "No tasks in progress" );
    showEmptyState( completedTasks, "No completed tasks" );

    // Update counters

    updateCounters();

}


// ==========================================
// 8. CREATE TASK ELEMENT
// ==========================================

function createTaskElement(task) {

    // Create main div

    const div =
        document.createElement("div");


    div.classList.add("task");


    // Important for Drag & Drop

    div.draggable = true;


    // Store task ID in DOM

    div.dataset.id = task.id;


    // Check overdue

    const isOverdue =
        checkOverdue(task);


    div.innerHTML = `

        <h3>${escapeHTML(task.title)}</h3>

        <p class="task-description">
            ${escapeHTML(
                task.description || "No description"
            )}
        </p>

        <div class="task-meta">

            <span class="priority priority-${task.priority}">
                ${capitalize(task.priority)}
            </span>

            <span class="due-date ${
                isOverdue ? "overdue" : ""
            }">

                ${
                    task.dueDate
                    ? formatDate(task.dueDate)
                    : "No due date"
                }

            </span>

        </div>

        <div class="task-actions">

            <button
                data-action="edit"
                data-id="${task.id}"
            >
                Edit
            </button>

            <button
                data-action="delete"
                data-id="${task.id}"
            >
                Delete
            </button>

        </div>

    `;


    // Drag events

    div.addEventListener(
        "dragstart",
        handleDragStart
    );


    div.addEventListener(
        "dragend",
        handleDragEnd
    );


    return div;

}


// ==========================================
// 9. EVENT DELEGATION
// ==========================================

document.addEventListener("click", function (event) {

    const button =
        event.target.closest("button[data-action]");


    if (!button) {

        return;

    }


    const action =
        button.dataset.action;

    const id =
        Number(button.dataset.id);


    if (action === "edit") {

        editTask(id);

    }


    if (action === "delete") {

        deleteTask(id);

    }

});


// ==========================================
// 10. EDIT TASK
// ==========================================

function editTask(id) {

    const task =
        tasks.find(function (task) {

            return task.id === id;

        });


    if (!task) {

        return;

    }


    modalTitle.textContent =
        "Edit Task";


    taskId.value =
        task.id;

    taskTitle.value =
        task.title;

    taskDescription.value =
        task.description;

    taskPriority.value =
        task.priority;

    taskDueDate.value =
        task.dueDate;

    taskStatus.value =
        task.status;


    taskModal.classList.add("active");

}


// ==========================================
// 11. DELETE TASK
// ==========================================

function deleteTask(id) {

    const confirmed = confirm( "Are you sure you want to delete this task?" );

    if (!confirmed) {
        return;
    }

    tasks = tasks.filter(function (task) {
            return task.id !== id;
        });

    saveTasks();
    renderTasks();

}


// ==========================================
// 12. FILTER
// ==========================================

function getFilteredTasks() {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    const priority =
        priorityFilter.value;


    return tasks.filter(function (task) {

        const matchesSearch =
            task.title
                .toLowerCase()
                .includes(search);


        const matchesPriority =
            priority === "all"
            || task.priority === priority;


        return (
            matchesSearch &&
            matchesPriority
        );

    });

}


// ==========================================
// 13. SEARCH
// ==========================================

searchInput.addEventListener(
    "input",
    function () {

        renderTasks();

    }
);


// ==========================================
// 14. PRIORITY FILTER
// ==========================================

priorityFilter.addEventListener(
    "change",
    function () {

        renderTasks();

    }
);


// ==========================================
// 15. SORT
// ==========================================

sortSelect.addEventListener(
    "change",
    function () {

        renderTasks();

    }
);


function sortTasks(taskArray) {

    const sort =
        sortSelect.value;


    const sorted =
        [...taskArray];


    if (sort === "title") {

        sorted.sort(function (a, b) {

            return a.title
                .localeCompare(b.title);

        });

    }


    if (sort === "date") {

        sorted.sort(function (a, b) {

            return (
                new Date(a.dueDate || "9999-12-31")
                -
                new Date(b.dueDate || "9999-12-31")
            );

        });

    }


    if (sort === "priority") {

        const priorityValue = {

            high: 1,

            medium: 2,

            low: 3

        };


        sorted.sort(function (a, b) {

            return (
                priorityValue[a.priority]
                -
                priorityValue[b.priority]
            );

        });

    }


    return sorted;

}


// ==========================================
// 16. UPDATE COUNTERS
// ==========================================

function updateCounters() {

    const todo =
        tasks.filter(function (task) {

            return task.status === "todo";

        });


    const progress =
        tasks.filter(function (task) {

            return task.status === "progress";

        });


    const completed =
        tasks.filter(function (task) {

            return task.status === "completed";

        });


    todoCount.textContent =
        todo.length;

    progressCount.textContent =
        progress.length;

    completedCount.textContent =
        completed.length;

}


// ==========================================
// 17. DRAG & DROP
// ==========================================

let draggedTaskId = null;


// Drag Start

function handleDragStart(event) {

    draggedTaskId =
        Number(
            event.currentTarget.dataset.id
        );


    event.currentTarget.classList.add(
        "dragging"
    );

}


// Drag End

function handleDragEnd(event) {

    event.currentTarget.classList.remove(
        "dragging"
    );

    draggedTaskId = null;

}


// ==========================================
// 18. DROP ON COLUMNS
// ==========================================

const columns =
    document.querySelectorAll(".column");


columns.forEach(function (column) {

    column.addEventListener(
        "dragover",
        function (event) {

            event.preventDefault();

        }
    );


    column.addEventListener(
        "drop",
        function (event) {

            event.preventDefault();


            if (!draggedTaskId) {

                return;

            }


            const newStatus =
                column.dataset.status;


            const task =
                tasks.find(function (task) {

                    return (
                        task.id === draggedTaskId
                    );

                });


            if (task) {

                task.status =
                    newStatus;

            }


            saveTasks();

            renderTasks();

        }
    );

});


// ==========================================
// 19. LOCAL STORAGE
// ==========================================

function saveTasks() {
    localStorage.setItem( "tasks", JSON.stringify(tasks) );
}


// ==========================================
// 20. OPEN ADD MODAL
// ==========================================

function openAddModal() {
    modalTitle.textContent = "Add Task";
    taskForm.reset();
    taskId.value = "";
    taskPriority.value = "medium";
    taskStatus.value = "todo";
    taskModal.classList.add( "active" );
}


// ==========================================
// 21. CLOSE MODAL
// ==========================================

function closeTaskModal() {
    taskModal.classList.remove( "active" );
    taskForm.reset();
    taskId.value = "";
}

// ==========================================
// 22. EMPTY STATE
// ==========================================

function showEmptyState( container, message ) {
    if (container.children.length === 0) {
        const empty = document.createElement("div");
        empty.className = "empty";
        empty.textContent = message;
        container.appendChild(empty);
    }
}


// ==========================================
// 23. DATE FORMAT
// ==========================================

function formatDate(date) {
    const formatted =
        new Date(date).toLocaleDateString(
            "en-US",
            {
                month: "short",
                day: "numeric",
                year: "numeric"
            }
        );
    return formatted;
}


// ==========================================
// 24. OVERDUE CHECK
// ==========================================

function checkOverdue(task) {
    if (!task.dueDate) {
        return false;
    }

    if (task.status === "completed") {
        return false;
    }


    const today = new Date();

    today.setHours(
        0,
        0,
        0,
        0
    );

    const due = new Date(task.dueDate);

    due.setHours(
        0,
        0,
        0,
        0
    );

    return due < today;
}


// ==========================================
// 25. CAPITALIZE
// ==========================================

function capitalize(text) {
    return (
        text.charAt(0).toUpperCase()
        +
        text.slice(1)
    );

}


// ==========================================
// 26. HTML SECURITY
// ==========================================

function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}


// ==========================================
// 27. CLEAR ALL
// ==========================================

clearAllBtn.addEventListener( "click", function () {
        if (tasks.length === 0) {
            alert("There are no tasks.");
            return;
        }

        const confirmed = confirm( "Delete ALL tasks?" );

        if (!confirmed) {
            return;
        }

        tasks = [];
        saveTasks();
        renderTasks();

    }
);