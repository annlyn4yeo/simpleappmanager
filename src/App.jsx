import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import ProjectSideBar from "./components/ProjectSideBar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const HandleStartAddProjects = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={HandleStartAddProjects} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={HandleStartAddProjects} />
      {content}
    </main>
  );
}

export default App;
