import React, { useEffect, useState } from 'react'
import aboutMe from '../content/about/about.md'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const About = (props) => {
  const [about, setAbout] = useState('')
  useEffect(() => {
    // load md into react: https://stackoverflow.com/a/53975297/6055581
    fetch(aboutMe)
      .then((res) => res.text())
      .then((text) => {
        let gmtext = matter(text)
        setAbout(gmtext)
      })
      .catch((err) => console.error(err))

    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {about ? (
        <ReactMarkdown remarkPlugins={[gfm]}>{about.content}</ReactMarkdown>
      ) : (
        'no about here'
      )}
    </div>
  )
}

export default About
