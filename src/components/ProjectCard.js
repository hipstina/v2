import React from 'react'

const ProjectCard = (props) => {
  const { title, summary, thumbnail, tech_stack } = props

  const renderDetailPage = () => {}

  return (
    <div className="project-card" onClick={renderDetailPage}>
      <h3>{title}</h3>
      <img src={thumbnail} alt={`${title} preview`} />
      <p>Project summary: {summary}</p>
      <button onClick={() => props.history.push(`/projects/${props.title}`)}>
        View More
      </button>
      <ul>
        {tech_stack.map((tech, idx) =>
          tech ? <li key={idx}>{tech}</li> : null
        )}
      </ul>
    </div>
  )
}

export default ProjectCard
