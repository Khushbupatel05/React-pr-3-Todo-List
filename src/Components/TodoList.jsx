import { useEffect, useRef, useState } from "react";
import Table from "./Table";

const TodoList = () => {
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);
  const inputRef = useRef(null);
  const [filter, setFilter] = useState("all");
  const [filterTasks, setFilterTasks] = useState([]);

  const addTask = () => {
    const input = inputRef.current;
    const inputValue = input.value.trim();

    if (!inputValue) {
      alert("Oops! Task is not defined.");
      return;
    }

    const newTask = { id: Date.now(), taskName: inputValue, iscompleted: false };
    setTask([...task, newTask]);
    inputRef.current.value = "";
    setText("");
  };


  const markTaskComplete = (id) => {
    const updatedTask = task.map((t) =>
      t.id === id ? { ...t, iscompleted: true } : t
    );
    setTask(updatedTask);
  };

  useEffect(() => {
    let updated = [];
    if (filter === "all") updated = task;
    else if (filter === "pending") updated = task.filter((item) => !item.iscompleted);
    else updated = task.filter((item) => item.iscompleted);
    setFilterTasks(updated);
  }, [task, filter]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-100 ">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-xl ">
        <div className="bg-gradient-to-r from-purple-400 to-indigo-900 rounded-t-2xl h-40  p-5">
          <h1 className="text-center text-2xl font-bold text-white">TODO List</h1>
        </div>

        <div className="p-4">
          <div className="rounded-2xl shadow-xl -translate-y-24 bg-white  p-4 ">
            <input
              type="text"
              ref={inputRef}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border  border-gray-300   rounded-md focus:outline-none"
              placeholder="Enter Any Task..."
            />
            <button
              onClick={addTask}
              className="block mx-auto mt-4 px-6 py-2 text-white bg-gradient-to-r from-pink-200 to-purple-400 rounded-md shadow-md hover:opacity-90"
            >
              Add
            </button>
          </div>

          <div className="flex justify-center  space-x-4">
            <button
              onClick={() => setFilter("all")}
              className="px-4 py-1 text-sm font-medium border rounded-md"
            >
              All
            </button>
            <button
              onClick={() => setFilter("pending")}
              className="px-4 py-1 text-sm font-medium border rounded-md"
            >
              Pending
            </button>
            <button
              onClick={() => setFilter("completed")}
              className="px-4 py-1 text-sm font-medium border rounded-md"
            >
              Completed
            </button>
          </div>


          <Table tasks={filterTasks} markTaskComplete={markTaskComplete} />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
