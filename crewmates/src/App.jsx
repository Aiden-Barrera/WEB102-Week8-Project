import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Sidebar from './pages/Sidebar'
import Home from './pages/Home'
import CreateCrewmate from './pages/CreateCrewmate'
import CrewmateGallery from './pages/CrewmateGallery'
import EditCrewmate from './pages/EditCrewmate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Sidebar />} >
          <Route index element={<Home />} />
          <Route path="/create" element={<CreateCrewmate />} />
          <Route path="/show" element={<CrewmateGallery />} />
          <Route path='/edit/:crew_id' element={<EditCrewmate />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
