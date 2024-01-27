import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import ProjectSideBar from "./components/ProjectSideBar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProjects = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleCancel = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const projectId = Math.floor(Math.random() * 1000);
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel}/>;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProjects} />;
  }
  return (
    <main className="h-screen flex gap-8">
      <ProjectSideBar
        onStartAddProject={handleStartAddProjects}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
