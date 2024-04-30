import React, { useReducer } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'
import { createContext } from 'react'


import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import About from './About'
import App from './App'
import ErrorPage from './ErrorPage'
import Header from './Header'
import Footer from './Footer'

const initialState = {
  team: [],
  error: null
}
const teamReducer = (state, action) => {
  switch(action.type) {
    case 'addMember':
      return state.team.length >= 4 ? (
        {
          ...state,
          error: 'Too many!'
        }
      ) : (
        {
          ...state,
          team: [...state.team,{name: action.name, health: action.health, attack: action.attack, speed: action.speed}]
        }
      )
      default: 
      throw new Error('Skill issue')
    }
  }

  export const TeamContext = createContext()
  
  const TeamProvider = ({ children }) => {
    const [state, dispatch] = useReducer(teamReducer, initialState)
    
    return (
      <TeamContext.Provider value={{ state, dispatch }}>
        {children}
      </TeamContext.Provider>
    )}
  
  
    
    // project styles

  function Layout() {
    return (
      <>
        <Header />
        <div id='page-content'>
          <Outlet />
        </div>
        <Footer />
      </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
      },
      {
        path: '/about',
        element: <About />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <TeamProvider>
    <RouterProvider router={router} />
  </TeamProvider>
)
