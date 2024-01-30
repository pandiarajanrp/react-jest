import { useEffect, useState } from "react";

const APIFetch = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    setTimeout(() => {
      setError("This is error text")
    }, 2000)
    
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="todo-list">
      <p>List of Todos</p>
      <ul>
        {todos.map((item) => (
          <li key={`item_${item.id}`}>{item.title}</li>
        ))}
      </ul>
      {error && <p>{error}</p>}
    </div>
  );
};

export default APIFetch;
