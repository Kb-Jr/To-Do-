# To-DO with React

## Features
- Create Todos
- Delete Todos
- Mark as completed.

## Process
- The basic idea behind the implementation of this project is to create a list or an array of items which can be modified by the click of different buttons.
- The list created was stored in a state.
- An input field and a button was created. On clicking the button details on the input field are added to the list.
- When the user clicks on add todo, it will be added to the array and then rendered onto the screen.
- The todo being created is represented by a state. The value of that state is set by grabbing the values on the input field whenever an onChange event fires on the field.
- To create a task, a function was created which updates the current state of the todo list (a copy of the original list, because its not recommendeed to mutate an array in react) by adding a new task/todo.
- Use the .map method to render each child of the array.
- To delete a task, create a function that takes the item clicked on as an input. The function filters through the list of tasks checking each task if it matches the task selected. It then returns a new list of items that were not the same with the item selected. 
- To determine if a task is complete, the tasks were made objects which means each task could be assigned a property which was a boolean type. 
- To implement the completion of tasks, a function was implemented which when called sets the "completed" property of the task to true.
- Additional feature: Creating a todo by hitting the "enter" key after typing in the input field. This was done by calling the createtask function on the input field when the key pressed matches the keycode for enter key.


## Lessons Learnt
- Using the useRef hook to manipulate DOM elements.
- Executing functions on the KeyDown selected of keycodes (Keycode for Enter is 13).

## Built with
- React JS



