import "./index.scss";
import React, { useState } from "react";
import TodoContent from "./TodoContent";
import store from "./store";

type TodoItemProps = {
  id: string;
  title: string;
  content: string;
  isCompleted: boolean;
  DeleteTodoItem: any;
};

const TodoItem = ({ title, content, id, DeleteTodoItem, isCompleted }: TodoItemProps) => {
  const [showContent, setShowContent] = useState(false);
  const [todos, setTodos] = useState(store);

  return (
    <div>
      <div className="ItemAndCloser">
        <button
          id={id}
          value={title}
          onClick={(e) => setShowContent(!showContent)}
          className="TodoCustomButton"
        >
          {title}
        </button>
        <button id={id} onClick={() => DeleteTodoItem(id)} className="TodoCustomButton">
          x
        </button>
      </div>
      {showContent && <TodoContent id={id} content={content} />}
    </div>
  );
};

export default TodoItem;
