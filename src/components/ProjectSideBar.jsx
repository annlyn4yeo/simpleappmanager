import Button from "./Button";

export default function ProjectSideBar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>Add project + </Button>
      </div>
      <ul className="mt-6">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-4 py-2 my-1 rounded-md text-stone-400 hover:text-stone-100 hover:bg-stone-500">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
