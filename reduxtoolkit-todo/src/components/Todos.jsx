import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul  className="list-none">
      {todos.map((todo) => (
          <li key={todo.id} className="mt-4 flex justify-between items-center text-gray-100 bg-gray-800 px-4 py-2 rounded">
              {todo.text}
              <button
              onClick={() => dispatch(removeTodo(todo.id))}
              >X</button>
          </li>
      ))}
      </ul>
    </>
  );
};

export default Todos;
