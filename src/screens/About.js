import React, { useEffect } from 'react'
import aboutMe from '../data/about.md'
import matter from 'gray-matter'

const About = (props) => {
  useEffect(() => {
    // load md into react: https://stackoverflow.com/a/53975297/6055581
    fetch(aboutMe)
      .then((res) => res.text())
      .then((text) => getMarkdown(text))
      .catch((err) => console.error(err))

    // eslint-disable-next-line
  }, [])

  const getMarkdown = (text) => {
    //console.log('text', text)
  }
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

export default About
