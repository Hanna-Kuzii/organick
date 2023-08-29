import { Subscribe } from "../../components/Subscribe/Subscribe";
import projects from "../../json/projects.json";
import { Project } from "../../types/project";

export const Projects = () => {
  return (
    <>
      <div className="app__projects projects">
        <div className="projects__header headerText textH1">Projects</div>
        <div className="projects__list">
          {projects.map((project: Project) => (
            <div className="projects__item">
              <div className="projects__pic">
                <img
                  src={require("../../images/pages/projects/" + project.image)}
                  alt={project.name}
                  className="projects__image"
                />
                <div className="projects__hover">
                  <button className="projects__hover_button"></button>
                </div>
              </div>
              <div className="projects__name textH6">{project.name}</div>
              <div className="projects__categories italic">
                {project.categories}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Subscribe />
    </>
  );
};
