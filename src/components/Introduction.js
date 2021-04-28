import React, { useEffect, useState } from 'react'
import introText from '../content/intro/intro.md'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const Introduction = (props) => {
  const [intro, setIntro] = useState('')
  useEffect(() => {
    // load md into react: https://stackoverflow.com/a/53975297/6055581
    let isMounted = true
    fetch(introText)
      .then((res) => res.text())
      .then((text) => {
        let gmtext = matter(text)
        if (isMounted) setIntro(gmtext)
      })
      .catch((err) => console.error(err))

    return () => (isMounted = false)

    // eslint-disable-next-line
  }, [])

  return (
    <section>
      {intro ? (
        <ReactMarkdown
          remarkPlugins={[gfm]}
          components={{
            a: ({ node, ...props }) => (
              <a
                href={props.href}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              >
                {props.children[0]}
              </a>
            )
          }}
        >
          {intro.content}
        </ReactMarkdown>
      ) : (
        'Hello.'
      )}
    </section>
  )
}

export default Introduction
