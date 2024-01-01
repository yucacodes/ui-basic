import './App.css'
import '@fontsource/ibm-plex-sans'
import '@fontsource/lato'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PageLayout } from './components/PageLayout'

// const Layout = React.lazy(() => import('./Layout'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        index: true,
        lazy: () => import('./pages/HomePage'),
      },
      {
        path: 'button',
        lazy: () => import('./pages/ButtonPage'),
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
}
