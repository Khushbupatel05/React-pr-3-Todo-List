const Table = ({ tasks, setTasks }) => {
  const updateStatus = (id) => {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, iscompleted: true } : task
    );
    setTasks(updatedTask); 
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="w-6/12 mx-auto">
        <h2 className="text-xl font-bold text-center text-fuchsia-950 mb-4">Tasks Table 📋</h2>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tasks List
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4">
                  {task.taskName}
                </th>
                {task.iscompleted ? (
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    Completed
                  </td>
                ) : (
                  <td
                    className="px-6 py-4 text-yellow-500 font-semibold cursor-pointer"
                    onClick={() => updateStatus(task.id)}
                  >
                    Pending
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
