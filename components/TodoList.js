export default function TodoList({ tasks, onDelete }) {
  return (
    <ul style={{ marginTop: "1.5rem", padding: 0, listStyle: "none" }}>
      {tasks.map((task, index) => (
        <li 
          key={index} 
          style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            marginBottom: "0.5rem", 
            padding: "0.5rem", 
            border: "1px solid #ddd",
            borderRadius: "4px"
          }}
        >
          {task}
          <button 
            onClick={() => onDelete(index)} 
            style={{ background: "red", color: "white", border: "none", padding: "0.3rem 0.6rem", borderRadius: "4px", cursor: "pointer" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}
