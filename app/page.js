"use client"
import { useState } from "react"
import TodoList from "../components/TodoList"

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")

  const addTask = () => {
    if (newTask.trim() === "") return
    setTasks([...tasks, newTask])
    setNewTask("")
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <section style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto" }}>
      <h1>📝 To-Do App</h1>
      <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Enter a task..." 
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button onClick={addTask} style={{ padding: "0.5rem 1rem" }}>
          Add
        </button>
      </div>
      <TodoList tasks={tasks} onDelete={deleteTask} />
    </section>
  )
}
