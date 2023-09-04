import { useState, useRef } from 'react'
import './App.css'

function App() {

  const [todoList, setTodoList] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const inputTask = useRef(null);

  function addTask(){
    setTodoList([...todoList, {task: currentTodo, completed: false}]);
    inputTask.current.value = ""; 
    setCurrentTodo("");
  }

    function deleteTask(taskToDelete){
      setTodoList(
        todoList.filter((todo) => {
         return todo.task !== taskToDelete;
        })
      );
    };

    function completeTask(taskToComplete){
      setTodoList(
        todoList.map ((todo)=>{ 
          return todo.task == taskToComplete ? { task:taskToComplete, completed: true} : { task:todo.task, completed: todo.completed ? true : false};  
        })
      );
    };


  return (
    <>
      <div className="App">
        <h3 id='heading'>Create Tasks!</h3>
        <div className="input-section">
          <input ref={inputTask} type="text" placeholder='To Do...' onChange={(e) => {
            setCurrentTodo(e.target.value)
          }} onKeyDown={(e)=> {if (e.keyCode == 13) addTask()}}/>
          <button onClick={addTask} id='add-button'>Add Task</button>
        </div>
        <hr />

        <ul>
          {todoList.map((todo) => {
            return(
              <div className="task" key={crypto.randomUUID()}>
                  <li>{todo.task}</li>
                  <button id='complete-button' onClick={()=> completeTask(todo.task)} title='Click if completed'>Completed</button>
                  <button id='delete-button' onClick={()=> deleteTask(todo.task)} title='Delete'>❌</button>
                  {todo.completed ? (<h3 id='tick'>✔</h3>) : (<h3 id='ex'>❌</h3>)}
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
