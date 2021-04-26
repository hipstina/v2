import React from 'react'

const ProjectDetail = (props) => {
  const { projectDetail } = props

  return (
    <div>
      <section>
        <h2>{projectDetail.title}</h2>
        <p>A 1-line summary of the project</p>

        <ul>
          <p>Type: </p>
          <p>Role: </p>
          <p>Stack:</p>
          <p>Demo: </p>
          <p>Source code: </p>
        </ul>
      </section>

      <section>
        <h3>Overview</h3>
        <h3>Purpose & Goal</h3>
        <h3>Thought process</h3>
        <h3>Takeaways</h3>
      </section>
    </div>
  )
}

export default ProjectDetail
