import React, { useEffect, useState } from 'react'
import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ProjectDetail from './screens/ProjectDetail'
import Projects from './screens/Projects'
import NotFoundPage from './screens/NotFoundPage.js'
import matter from 'gray-matter'

function App() {
  const [projects, setProjects] = useState([])
  const [featured, setFeatured] = useState([])

  const parseMds = async (files) => {
    // PARSE FETCHED FILES W/ GRAYMATTER
    // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f

    await Promise.all(
      Object.values(files).map((path) =>
        fetch(path.default).then((res) => res.text())
      )
    )
      .catch((err) => console.error(err))
      .then((n) => {
        let parsedPosts = n.map((m) => matter(m))
        setProjects(parsedPosts)
        let featuredPosts = parsedPosts.filter((project) =>
          project.data.metadata[2].featured ? true : false
        )
        setFeatured(featuredPosts)
      })
  }

  const fetchAllMds = (r) => {
    let mdfiles = {}
    r.keys().forEach((item) => {
      mdfiles[item.replace('./', '')] = r(item)
    })
    parseMds(mdfiles)
  }

  useEffect(() => {
    // IMPORT MULTIPLE FILES
    // https://stackoverflow.com/questions/44607396/importing-multiple-files-in-react
    fetchAllMds(require.context('./content/projects', false, /\.md$/))

    // eslint-disable-next-line
  }, [])

  return (
    <main className="App">
      <Nav />
      <Switch>
        <Route
          exact
          path="/"
          component={(routerProps) => (
            <Home {...routerProps} featured={featured} />
          )}
        />
        <Route exact path="/about" component={About} />

        <Route
          exact
          path="/projects"
          component={(routerProps) => (
            <Projects {...routerProps} projects={projects} />
          )}
        />
        <Route
          path="/projects/:name"
          component={(routerProps) => (
            <ProjectDetail {...routerProps} projects={projects} />
          )}
        />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </main>
  )
}

export default App
