const Table = ({ tasks, markTaskComplete }) => {
  const getBorderColor = (index) => {
    const colors = ["border-l-purple-500", "border-l-blue-500", "border-l-purple-800"];
    return colors[index % colors.length];
  };

  return (
    <div className="mt-6 space-y-4">
      {tasks.map((task, index) => (
        <div
          key={task.id}
          className={`flex items-center justify-between px-4 py-3 rounded-xl shadow-md bg-white ${getBorderColor(
            index
          )} border-l-4`}
        >
          <span
            className={`text-md ${
              task.iscompleted ? "line-through text-gray-400" : "text-gray-700"
            }`}
          >
            {task.taskName}
          </span>

          {task.iscompleted ? (
            <span className="text-black font-semibold text-sm flex items-center">
              Completed
            </span>
          ) : (
            <button
              onClick={() => markTaskComplete(task.id)}
              className="text-gray-600 text-sm flex items-center font-medium"
            >
              Pending
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Table;
