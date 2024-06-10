import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

// type AppProps = {}

const App = (props) => {
  return <RouterProvider router={router} />
}

export default App;