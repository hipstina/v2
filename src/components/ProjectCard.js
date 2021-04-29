import React from 'react'
import '../styles/components/ProjectCard.css'

const ProjectCard = (props) => {
  const { title, summary, tech_stack, date } = props

  return (
    <div className="projectcard__wrapper">
      <h3 className="projectcard__title">{title}</h3>
      <p className="projectcard__summary">{summary}</p>

      <ul className="projectcard__stack__wrapper">
        {tech_stack &&
          tech_stack.map((tech, idx) =>
            tech ? (
              <li key={idx} className="projectcard__stacK__item">
                {tech}
              </li>
            ) : null
          )}
      </ul>
    </div>
  )
}

export default ProjectCard
