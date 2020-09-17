import "./index.scss";
import React from "react";

type TodoContentProps = {
  id: string;
  content: string;
};

const TodoContent = ({ id, content }: TodoContentProps) => {
  return (
    <div className="TodoContentTextarea">
      <textarea id={id} value={content} />
      <div className="buttonContent">
        <input type="submit" value="close item" />
      </div>
    </div>
  );
};

export default TodoContent;
