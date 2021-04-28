import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = (props) => {
  const { projects } = props

  const setDetails = (project, title, id, idx) => {
    let slugify = [...title].map((char) =>
      char === ' ' ? (char = '-') : char.toLowerCase()
    )
    props.history.push(`/projects/${slugify.join('')}`)
  }

  return (
    <main>
      <section className="projects__wrapper">
        <h2>Projects</h2>
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
    </main>
  )
}

export default Projects
