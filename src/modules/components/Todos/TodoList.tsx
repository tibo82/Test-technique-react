import "./index.scss";
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Counter from "./counter";
import store from "./store";
import uniqid from "uniqid";

const TodoList = () => {
  const items = store.items;
  const [todos, setTodos] = useState(items);
  const [textContent, setTextContent] = useState("");
  const [textTitle, setTextTitle] = useState("");

  const handleAddTodo = () => {
    let newTodo = {
      id: uniqid(),
      title: textTitle,
      content: textContent,
      isCompleted: true,
    };
    setTodos([...todos, newTodo]);
  };

  const DeleteTodoItem = (id: string, todos: any, setTodos: any) => {
    setTodos(todos.filter((todo: any) => todo.id != id));
  };

  return (
    <div className="TodoList">
      <Counter />

      <div className="TodoAddElements">
        <input
          type="text"
          placeholder="todo title ..."
          onChange={(e) => setTextTitle(e.target.value)}
        />

        <textarea
          placeholder="todo content (description,remarks) ..."
          onChange={(e) => setTextContent(e.target.value)}
        ></textarea>

        <button onClick={handleAddTodo}>add todo</button>
      </div>

      <div>
        <div className="ListItems">
          <ul>
            {todos.map((todo, i) => (
              <li key={i}>
                <TodoItem
                  title={todo.title}
                  content={todo.content}
                  id={todo.id}
                  isCompleted={todo.isCompleted}
                  DeleteTodoItem={(id: string) => DeleteTodoItem(id, todos, setTodos)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
