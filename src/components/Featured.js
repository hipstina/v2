import React from 'react'
import ProjectCard from '../components/ProjectCard'
import '../styles/components/Featured.css'

const Featured = (props) => {
  const { featured } = props

  const renderFeatured = (project, title, id) => {
    if (project.data.metadata[0].id) {
      let slugify = [...title].map((char, idx) =>
        char === ' ' ? (char = '-') : char.toLowerCase()
      )
      props.history.push(`/projects/${slugify.join('')}`)
    }
  }

  return (
    <section className="featured__projects__wrapper">
      {featured.length > 0
        ? featured
            .map((project, idx) => (
              <div
                key={idx}
                date={project.data.metadata[3].date_launched}
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
            .sort((a, b) => new Date(a.props.date) < new Date(b.props.date))
        : 'no featured projects yet'}
    </section>
  )
}

export default Featured
