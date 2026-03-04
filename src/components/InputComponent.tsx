import { useState } from 'react'
import type { Dispatch, FormEvent, SetStateAction } from 'react'

type Props = {
  taskList: string[]
  setTaskList: Dispatch<SetStateAction<string[]>>
}

const InputComponent = ({ taskList, setTaskList }: Props) => {
  const [input, setInput] = useState('')

  const handleAddTask =(e: FormEvent<HTMLButtonElement>) => {
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
