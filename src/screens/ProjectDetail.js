import React, { useEffect, useState } from 'react'

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
        <div>
          <section>
            <h2>{project[0].data.title}</h2>
            <p>{project[0].data.summary}</p>
            <p>Type: {project[0].data.details[4].organization}</p>
            <p>Role:</p>
            <ul>
              {project[0].data.details[2].roles.map((role, i) => (
                <li key={i}>{role}</li>
              ))}
            </ul>
            <p>Stack:</p>
            <ul>
              {project[0].data.tech_stack.map((stack, i) => (
                <li key={i}>{stack}</li>
              ))}
            </ul>
            <p>
              Demo:{' '}
              <a
                href={project[0].data.details[1].demo[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{project[0].data.details[1].demo[0]}</span>
              </a>
            </p>

            <p>
              Source code:{' '}
              <a
                href={project[0].data.details[0].source_code}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{project[0].data.details[0].source_code}</span>
              </a>
            </p>
          </section>

          <section>
            <h3>Overview </h3>
            <p>{project[0].data.details[7].description}</p>

            <h3>Purpose & Goal</h3>
            <h3>Thought process</h3>
            <h3>Takeaways</h3>
          </section>
        </div>
      ) : (
        <div>No project</div>
      )}
    </div>
  )
}

export default ProjectDetail
