import React, { useReducer, useEffect } from 'react'
import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ProjectDetail from './screens/ProjectDetail'
import Projects from './screens/Projects'
import data from './data/projects_data'

const initialState = {
  allProjects: data,
  featured: [],
  projectDetail: ''
}

const reducer = (state, action) => {
  switch (action.type) {
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

  useEffect(() => {
    getProjects()
    getFeatured()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getProjects = () => {
    dispatch({ type: 'allProjects', payload: data })
  }

  const getFeatured = () => {
    let featured = data.filter((project) =>
      project.metadata.featured ? true : false
    )
    dispatch({ type: 'featured', payload: featured })
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
        <Route
          exact
          path="/about"
          component={(routerProps) => <About {...routerProps} />}
        />

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
