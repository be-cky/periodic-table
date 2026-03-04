import { useState } from "react";
import InputComponent from "../components/InputComponent"
import { Link } from "react-router-dom";


function ToDoBoard() {

    const [taskList, setTaskList] = useState([]);
 
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
        <h1>02- To Do Board</h1>
        <br></br>
        <InputComponent
        taskList={taskList}
        setTaskList={setTaskList}
        />
        <div>
            {taskList.map((task, index) => 
            <li key={index}>{task}</li>)}
        </div>
        <Link to="/" className="text-sm text-slate-500 hover:text-slate-800">
            Volver
        </Link>
       
    </div>
  )
}

export default ToDoBoard
