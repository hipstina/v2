import React, { useReducer, useEffect } from 'react'
import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ProjectDetail from './screens/ProjectDetail'
import Projects from './screens/Projects'
import matter from 'gray-matter'

const initialState = {
  projectPaths: {},
  allProjects: [],
  featured: [],
  projectDetail: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'paths':
      return { ...state, projectPaths: action.payload }
    case 'projects':
      return { ...state, allProjects: action.payload }
    case 'project':
      return { ...state, projectDetail: action.payload }
    case 'featured':
      return { ...state, featured: action.payload }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const parseMds = async (files) => {
    // PARSE FETCHED FILES W/ GRAYMATTER
    // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f

    const posts = await Promise.all(
      Object.values(files).map((path) =>
        fetch(path.default).then((res) => res.text())
      )
    ).catch((err) => console.error(err))
    let parsedPosts = posts.map((post) => matter(post))

    await dispatch({ type: 'projects', payload: parsedPosts })
  }

  const fetchAllMds = (r) => {
    let mdfiles = {}
    r.keys().forEach((item) => {
      mdfiles[item.replace('./', '')] = r(item)
    })
    dispatch({ type: 'paths', payload: mdfiles })
    parseMds(mdfiles)
  }

  useEffect(() => {
    // IMPORT MULTIPLE FILES
    // https://stackoverflow.com/questions/44607396/importing-multiple-files-in-react
    fetchAllMds(require.context('./content/projects', false, /\.md$/))
    getFeatured()
    // eslint-disable-next-line
  }, [])

  const getFeatured = () => {
    if (Object.values(state.allProjects)) {
      let featured = state.allProjects.filter((project) =>
        project.data.metadata[2].featured ? true : false
      )
      dispatch({ type: 'featured', payload: featured })
    }
  }

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route
          exact
          path="/"
          component={(routerProps) => (
            <Home
              {...routerProps}
              featured={state.featured}
              dispatch={dispatch}
            />
          )}
        />
        <Route exact path="/about" component={About} />

        <Route
          exact
          path="/projects"
          component={(routerProps) => (
            <Projects
              {...routerProps}
              allProjects={state.allProjects}
              dispatch={dispatch}
            />
          )}
        />
        <Route
          exact
          path="/projects/:name"
          component={(routerProps) => (
            <ProjectDetail
              {...routerProps}
              projectDetail={state.projectDetail}
            />
          )}
        />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
