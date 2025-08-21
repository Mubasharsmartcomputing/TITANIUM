import './App.css'
import './i18n' // Import i18n configuration - ADD THIS LINE
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { ErrorPage } from './pages/ErrorPage'
import { AppLayout } from './components/layout/AppLayout'
import Services from './pages/Services'
import Consultant from './pages/Consultant'
import Projects from './pages/Projects'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/blog',
        element: <Blog/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/services',
        element: <Services/>,
      },
      {
        path: '/consultant',
        element: <Consultant/>,
      },
      {
        path: '/projects',
        element: <Projects/>,
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App