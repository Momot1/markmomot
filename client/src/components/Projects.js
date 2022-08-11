import { useState } from "react";
import AddProjectForm from "./AddProjectForm";

function Projects({ projects, user, setProjects }) {
  const [isClicked, setIsClicked] = useState(false);

  if (!projects) {
    return <></>;
  }

  function onDeleteProject(id) {
    if (window.confirm("Are you sure you want to delete this project? It cannot be undone") === true) {
      fetch(`/projects/${id}`, {
        method: "DELETE",
      })
        .then((resp) => resp.json())
        .then(() => {
          const updatedProjects = projects.filter((project) => project.id !== id);
          setProjects(updatedProjects);
        });
    }
  }

  const projectElements = projects.map((project) => (
    <div key={project.id}>
      <h3>
        {project.name}{" "}
        {user && user.is_admin ? (
          <button className="btn btn-dark" onClick={() => onDeleteProject(project.id)}>
            Delete
          </button>
        ) : null}
      </h3>
      <a href={`${project.project_url}`} target="_blank">
        Project Link
      </a>
      <br />
      <a href={`${project.github_url}`} target="_blank">
        Github Link
      </a>
      <p>{project.description}</p>
    </div>
  ));

  function onAddProject(formData) {
    fetch("/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((project) => {
        setIsClicked(false);
        setProjects([...projects, project]);
      });
  }

  return (
    <div id="project-div">
      {projectElements}
      {user && user.is_admin && !isClicked ? (
        <button className="btn btn-dark btn-lg" onClick={() => setIsClicked(!isClicked)}>
          Add Project
        </button>
      ) : null}
      {!(user && user.is_admin && isClicked) ? null : <AddProjectForm onAddProject={onAddProject} setIsClicked={setIsClicked} />}
    </div>
  );
}

export default Projects;
