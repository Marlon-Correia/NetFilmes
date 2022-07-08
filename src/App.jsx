import { Outlet } from 'react-router-dom'
import { NavBar } from './components/NavBar'

function App() {

  return (
    <>
      <nav id="navbar">
        <NavBar />
      </nav>
      <Outlet />
    </>

  )
}

export default App