import React, { useEffect, useState } from 'react'
import introText from '../content/intro/intro.md'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const Introduction = (props) => {
  const [intro, setIntro] = useState('')
  useEffect(() => {
    // load md into react: https://stackoverflow.com/a/53975297/6055581
    fetch(introText)
      .then((res) => res.text())
      .then((text) => {
        let gmtext = matter(text)
        setIntro(gmtext)
      })
      .catch((err) => console.error(err))

    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {intro ? (
        <ReactMarkdown remarkPlugins={[gfm]}>{intro.content}</ReactMarkdown>
      ) : (
        'Hello.'
      )}
    </div>
  )
}

export default Introduction

// import React from 'react'
// import homeprofile from '../assets/profile-homepage.png'

// const Introduction = () => {
//   return (
//     <div>
//       <section>
//         <h2>I'm Christina, a full-stack developer based in Chicago.</h2>
//         <p>
//           I cultivated an interest in web development after several years of
//           working as a tech support specialist. Here are some things I've made.
//         </p>
//         <figure>
//           <img
//             // src={homeprofile}
//             alt="Homemade headshot. Styled in halftone dots."
//             title="Christina Padilla"
//           />
//         </figure>
//       </section>
//       <section>
//         <p>This website is under construction.</p>
//         <p>
//           I am in the process of building out my portfolio, so you might notice
//           some funky things on the site. Check my progress{' '}
//           <a
//             href="https://github.com/hipstina/christinapadilla"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             on GitHub
//           </a>
//           .
//         </p>
//       </section>
//     </div>
//   )
// }

// export default Introduction
