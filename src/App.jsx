import './App.css'
import './i18n' // Import i18n configuration - ADD THIS LINE
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ErrorPage } from './pages/ErrorPage'
import { AppLayout } from './components/layout/AppLayout'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const Services = lazy(() => import('./pages/Services'))
const Consultant = lazy(() => import('./pages/Consultant'))
const Projects = lazy(() => import('./pages/Projects'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<div>Loading...</div>}><Home/></Suspense>,
      },
      {
        path: '/about',
        element: <Suspense fallback={<div>Loading...</div>}><About/></Suspense>,
      },
      {
        path: '/blog',
        element: <Suspense fallback={<div>Loading...</div>}><Blog/></Suspense>,
      },
      {
        path: '/contact',
        element: <Suspense fallback={<div>Loading...</div>}><Contact/></Suspense>,
      },
      {
        path: '/services',
        element: <Suspense fallback={<div>Loading...</div>}><Services/></Suspense>,
      },
      {
        path: '/consultant',
        element: <Suspense fallback={<div>Loading...</div>}><Consultant/></Suspense>,
      },
      {
        path: '/projects',
        element: <Suspense fallback={<div>Loading...</div>}><Projects/></Suspense>,
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App