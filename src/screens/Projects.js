import React from 'react'
import ProjectCard from '../components/ProjectCard'
import '../styles/screens/Projects.css'

const Projects = (props) => {
  const { projects } = props

  const setDetails = (project, title, id, idx) => {
    let slugify = [...title].map((char) =>
      char === ' ' ? (char = '-') : char.toLowerCase()
    )
    props.history.push(`/projects/${slugify.join('')}`)
  }

  return (
    <div className="projects__container">
      <h2 className="projects__label">A bunch of things I've worked on</h2>
      <section className="projects__wrapper">
        {projects
          .map((project, idx) => (
            <div
              key={idx}
              date={project.data.metadata[3].date_launched}
              onClick={() =>
                setDetails(
                  project,
                  project.data.title,
                  project.data.metadata[0].id,
                  idx
                )
              }
            >
              <p className="projects__project_date">
                {project.data.metadata[3].date_launched.substring(0, 3) +
                  ' ' +
                  project.data.metadata[3].date_launched.substring(
                    project.data.metadata[3].date_launched.length - 4
                  )}
              </p>
              <ProjectCard
                {...props}
                title={project.data.title}
                summary={project.data.summary}
                thumbnail={project.data.thumbnail}
                tech_stack={project.data.tech_stack}
              />
            </div>
          ))
          .sort((a, b) =>
            new Date(a.props.date) < new Date(b.props.date) ? 1 : -1
          )}
      </section>
    </div>
  )
}

export default Projects
