JSL03 Project Brief: Console-Based Task Manager
📌 Important Prerequisite

Before starting this challenge:

Review and correct your JSL02 project using the provided solution. Your prompts for entering task details must be functional and properly validated.

Check the project user stories in your student dashboard and make sure you understand what is required for each feature.

📖 Overview

This project involves creating a simple console-based task management system where users can add up to three new tasks to an existing task array.

Tasks are stored as objects in an array, each with a unique incremental ID.

Users enter task details (title, description, status) via prompts.

A filter function allows users to view only tasks with a done status.

The project focuses on:

Array manipulation

User interaction via prompts and alerts

Console logging for task tracking

🎯 Key Objectives
Logic & User Interaction

Store tasks as objects inside an array for structured data management.

Allow users to add up to three new tasks to the existing task list.

Ensure each new task has a unique incremental ID based on the last task in the array.

Prompt users to enter:

Task title

Task description

Task status (todo, doing, done)

Validate the status input to accept only todo, doing, or done.

Alert users when they reach the task limit:

"There are enough tasks on your board, please check them in the console."

Log all tasks in the console with a clear All tasks label.

Filter and log only completed tasks (status: "done") under a Completed Tasks label.

Code Quality & Maintainability

Use meaningful variable and function names for readability.

Follow consistent indentation and formatting.

Add comments explaining key logic and functionality.

✅ Expected Outcome

A structured, limited task management system that lets users add, review, and filter tasks efficiently while keeping the code clean, documented, and maintainable.

🖥️ Console Output Example

Example after adding two new tasks (one completed, one in progress):

All tasks: [
{ id: 1, title: "Launch Epic Career", description: "Create a killer Resume", status: "todo" },
{ id: 2, title: "Master JavaScript", description: "Get comfortable with the fundamentals", status: "doing" },
{ id: 3, title: "Contribute to Open Source Projects", description: "Gain practical experience and collaborate", status: "done" },
{ id: 4, title: "Build Portfolio Website", description: "Showcase projects online", status: "done" },
{ id: 5, title: "Read ES6 Guide", description: "Learn new JavaScript features", status: "doing" }
]

Completed Tasks: [
{ id: 3, title: "Contribute to Open Source Projects", description: "Gain practical experience and collaborate", status: "done" },
{ id: 4, title: "Build Portfolio Website", description: "Showcase projects online", status: "done" }
]

🚀 Technologies Used

HTML5 – Base structure

CSS3 – (Optional) Styling support if extended

JavaScript – Core logic, interactivity, validation, and task management

✨ Features

Predefined task list with different statuses

Add up to three new tasks

Automatically assign unique incremental IDs

Validate status input (todo, doing, done)

Alerts user when task limit is reached

Logs all tasks and completed tasks to the console

🧰 Setup Instructions

To run this project locally:

Ensure your JSL02 project is corrected.

Clone this repository or download the project folder.

Open the index.html file in your browser.

Open the Developer Console (Ctrl+Shift+I / Cmd+Option+I) to interact with prompts and view logs.

📁 Folder Structure
project-folder/
│
├── index.html # Main HTML file
├── style.css # Optional CSS file
├── script.js # JavaScript file with all logic
└── README.md # Project documentation

📋 User Stories

As a user, I want to add up to three tasks so I can extend my task list.

As a user, I want invalid statuses to be rejected so my inputs stay correct.

As a user, I want to see completed tasks separately to track progress.

As a developer, I want the code to be clean and maintainable for future improvements.

🧼 Code Quality Notes

Descriptive variable and function names.

Consistent indentation and formatting.

Inline comments for logic and validation steps.

Separation of all tasks vs completed tasks in logs.

🕓 Commit History

Add initial predefined task array

Implement addTask() function with prompts and validation

Add loop to allow up to three new tasks

Add alert for task limit reached

Implement filter for completed tasks

Log all tasks and completed tasks in console

Refactor for readability and maintainability

Add inline comments for clarity

Update README.md with setup, usage, and console examples
