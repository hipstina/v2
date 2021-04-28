import React from 'react'
import Introduction from '../components/Introduction'
import ProjectCard from '../components/ProjectCard'

const Home = (props) => {
  const { featured } = props

  const renderFeatured = (project, title, id) => {
    if (project.data.metadata[0].id) {
      let slugify = [...title].map((char, idx) =>
        char === ' ' ? (char = '-') : char.toLowerCase()
      )
      // dispatch({ type: 'project', payload: id })
      props.history.push(`/projects/${slugify.join('')}`)
    }
  }

  return (
    <div>
      <section>
        <Introduction />
      </section>
      <section className="featured-projects-wrapper">
        {featured.length > 0
          ? featured.map((project, idx) => (
              <div
                key={idx}
                onClick={() =>
                  renderFeatured(
                    project,
                    project.data.title,
                    project.data.metadata[0].id
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
            ))
          : 'no featured projects yet'}
      </section>
    </div>
  )
}

export default Home
