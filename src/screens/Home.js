import React from 'react'
import Introduction from '../components/Introduction'
import ProjectCard from '../components/ProjectCard'

const Home = (props) => {
  const { featured, dispatch } = props

  const renderFeatured = (project, title, id) => {
    if (project.metadata.id) {
      let slugify = [...title].map((char, idx) =>
        char === ' ' ? (char = '-') : char.toLowerCase()
      )
      dispatch({ type: 'projectDetail', payload: id })
      props.history.push(`/projects/${slugify.join('')}`)
    }
  }

  return (
    <div>
      <section>
        <Introduction />
      </section>
      <section className="featured-projects-wrapper">
        {featured.map((project, idx) => (
          <div
            key={idx}
            onClick={() =>
              renderFeatured(project, project.title, project.metadata.id)
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
    </div>
  )
}

export default Home
