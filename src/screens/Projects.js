import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = (props) => {
  const { allProjects, dispatch } = props

  const renderDetails = (project, title, id) => {
    let slugify = [...title].map((char) =>
      char === ' ' ? (char = '-') : char.toLowerCase()
    )
    dispatch({ type: 'projectDetail', payload: id })
    props.history.push(`/projects/${slugify.join('')}`)
  }

  return (
    <main>
      <section className="featured-projects-wrapper">
        <h2>Projects</h2>
        {allProjects.map((project, idx) => (
          <div
            key={idx}
            onClick={() =>
              renderDetails(
                project,
                project.data.title,
                project.data.metadata.id
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
