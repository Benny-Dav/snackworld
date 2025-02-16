
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MenuPage from './MenuPage'

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<MenuPage/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
