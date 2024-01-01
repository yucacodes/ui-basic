import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// const Layout = React.lazy(() => import('./Layout'))

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Layout />,
    children: [
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
