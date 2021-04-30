import React from 'react'
import Contact from './Contact'
import '../styles/components/Footer.css'

const Footer = () => {
  const socials = [
    'https://github.com/hipstina',
    'https://twitter.com/hipstina',
    'https://codepen.io/hipstina'
  ]
  return (
    <footer className="footer__container">
      <div className="footer__copyright">© 2021 Christina Padilla</div>
      <Contact />

      <ul className="footer__socials__wrapper">
        {socials.map((link, i) => (
          <li>
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__socials__item"
            >
              {link.substring(8, 15)[link.substring(8, 15).length - 1] === '.'
                ? link.substring(8, 14)
                : link.substring(8, 15)}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
