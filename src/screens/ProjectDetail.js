import React, { useEffect, useState } from 'react'
import '../styles/components/ProjectDetails.css'

const ProjectDetail = (props) => {
  const [project, setProject] = useState([])

  useEffect(() => {
    matchProj()
    // eslint-disable-next-line
  }, [props.match.params.name])

  const matchProj = () => {
    let match = props.projects.filter((project) => {
      let slugify = [...project.data.title].map((char) =>
        char === ' ' ? (char = '-') : char.toLowerCase()
      )
      return slugify.join('') === props.match.params.name ? true : false
    })
    setProject(match)
    return match
  }

  return (
    <div>
      {project[0] ? (
        <div className="project__details__wrapper">
          <section className="project__details__meta__wrapper">
            <div className="project__details__title">
              <h1>{project[0].data.title}</h1>
              <p>{project[0].data.summary}</p>
            </div>
            <div className="project__details__meta">
              <div className="project__details__meta__item">
                <p>Type: </p>
                <span>{project[0].data.details[4].organization}</span>
              </div>
              <div className="project__details__meta__item">
                <p>Role:</p>
                <ul className="project__details__meta__list">
                  {project[0].data.details[2].roles.map((role, i) => (
                    <li key={i} className="project__details__meta__listitem">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="project__details__meta__item">
                <p>Stack:</p>
                <ul className="project__details__meta__list">
                  {project[0].data.tech_stack.map((stack, i) => (
                    <li key={i} className="project__details__meta__listitem">
                      {stack}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="project__details__meta__item">
                <p>Demo: </p>
                <a
                  href={project[0].data.details[1].demo[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{project[0].data.details[1].demo[0]}</span>
                </a>
              </div>
              <div className="project__details__meta__item">
                <p>Source code: </p>
                <a
                  href={project[0].data.details[0].source_code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{project[0].data.details[0].source_code}</span>
                </a>
              </div>
            </div>
          </section>

          <section className="project__details__content">
            <h3>Overview </h3>
            <p>{project[0].data.details[7].description}</p>

            <h3>Purpose & Goal</h3>
            <code>coming soon</code>
            <h3>Thought process</h3>
            <code>coming soon</code>
            <h3>Takeaways</h3>
            <code>coming soon</code>
          </section>
        </div>
      ) : (
        <div>No project</div>
      )}
    </div>
  )
}

export default ProjectDetail
