import { useEffect, useRef, useState } from 'react';
import Table from './Table';

const TodoList = () => {
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);
  const inputRef = useRef(null);
  const [filter, setFilter] = useState("all");
  const [filterTasks, setFilterTasks] = useState([]);

  const addTask = () => {
    if (text.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      taskName: text,
      iscompleted: false,
    };
    setTask([...task, newTask]);
    inputRef.current.value = "";
    setText("");
  };

  useEffect(() => {
    let updated = [];

    if (filter === "all") {
      updated = task;
    } else if (filter === "pending") {
      updated = task.filter((item) => !item.iscompleted);
    } else {
      updated = task.filter((item) => item.iscompleted);
    }
    setFilterTasks(updated);
  }, [task, filter]);

  return (
    <>
      <h1 className='text-center text-fuchsia-950 font-bold text-3xl my-4'>Todo List 📑</h1>
      <div className='Container mx-auto'>
        <div className='mx-auto w-6/12'>
          <form className="flex items-center max-w-sm mx-auto">
            <div className="relative w-full">
              <input
                ref={inputRef}
                onChange={(e) => setText(e.target.value)}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter Any tasks"
                required
              />
            </div>
            <button
              type="button"         
              onClick={addTask}      
              className="p-2 ps-3 pe-3 ms-2  text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800">
              Add
            </button>
          </form>

          <div className="text-center rounded-md shadow-xs mt-5" role="group">
            <button onClick={() => setFilter("all")} type="button" className="px-4 py-2 text-sm font-medium border">
              All
            </button>
            <button onClick={() => setFilter("pending")} type="button" className="px-4 py-2 text-sm font-medium border">
              Pending
            </button>
            <button onClick={() => setFilter("completed")} type="button" className="px-4 py-2 text-sm font-medium border">
              Completed
            </button>
          </div>

          <Table tasks={filterTasks} setTasks={setTask} />
        </div>
      </div>
    </>
  );
};

export default TodoList;
