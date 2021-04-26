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
              renderDetails(project, project.title, project.metadata.id)
            }
          >
            <ProjectCard
              {...props}
              title={project.title}
              summary={project.summary}
              thumbnail={project.thumbnail}
              tech_stack={project.tech_stack}
            />
          </div>
        ))}
      </section>
    </main>
  )
}

export default Projects
