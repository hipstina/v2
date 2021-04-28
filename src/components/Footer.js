import React from 'react'
import Contact from './Contact'

const Footer = () => {
  const socials = [
    'https://github.com/hipstina',
    'https://twitter.com/hipstina',
    'https://codepen.io/hipstina'
  ]
  return (
    <footer>
      <Contact />

      <div>© 2021 Christina Padilla</div>
      <div>
        Links
        <ul>
          {socials.map((link, i) => (
            <a key={i} href={link} target="_blank" rel="noopener noreferrer">
              <li>{link.substring(8, 15)}</li>
            </a>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
