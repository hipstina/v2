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
        {projects.map((project, idx) => (
          <div
            key={idx}
            onClick={() =>
              setDetails(
                project,
                project.data.title,
                project.data.metadata[0].id,
                idx
              )
            }
          >
            <ProjectCard
              {...props}
              title={project.data.title}
              summary={project.data.summary}
              thumbnail={project.data.thumbnail}
              tech_stack={project.data.tech_stack}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Projects
