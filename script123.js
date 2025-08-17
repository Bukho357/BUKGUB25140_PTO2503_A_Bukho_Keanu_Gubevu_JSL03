//  // Initial array of tasks
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo", // Initial task with status "todo"
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// Function to add a task
function addTask() {
  const lastId = initialTasks[initialTasks.length - 1].id;
  const title = prompt("Enter task title:");
  const description = prompt("Enter task description:");

  let status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  while (!["todo", "doing", "done"].includes(status)) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }

  initialTasks.push({ id: lastId + 1, title, description, status });
}

// Allow only 3 new tasks
for (let i = 0; i < 3; i++) {
  if (initialTasks.length >= 6) {
    alert(
      "There are enough tasks on your board, please check them in the console."
    );
    break;
  }
  addTask();
}

// Log all tasks
console.log("All tasks:", initialTasks);

// Filter and log completed tasks
const completedTasks = initialTasks.filter((task) => task.status === "done");
console.log("Completed Tasks:", completedTasks); // Log completed tasks
