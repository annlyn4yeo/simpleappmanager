import NewTasks from "./NewTasks";

export default function Tasks({ onAdd, onDelete, tasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTasks addTask={onAdd} />
      {tasks.length === 0 && <p className="text-stone-800 my-4">No Tasks Pending</p>}
      {tasks.length > 0 && (
        <ul className="p-3 mt-8 bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-3">
              <span>{task.createdTask}</span>
              <button className="text-stone-700 hover:text-red-700">Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
