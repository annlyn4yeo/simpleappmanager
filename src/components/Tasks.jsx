import NewTasks from "./NewTasks";

export default function Tasks() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTasks />
      <p className="text-stone-800 my-4">NO TASKSSS</p>
      <ul>
        <li></li>
      </ul>
    </section>
  );
}
