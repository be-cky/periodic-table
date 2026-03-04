import { useState } from 'react'

const InputComponent = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState('')

  const handleAddTask =(e) => {
     e.preventDefault()
     setTaskList([...taskList, input]);
     setInput("");
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </form>
  )
}

export default InputComponent
