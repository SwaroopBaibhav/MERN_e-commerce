import { Route, Routes } from 'react-router-dom'
import {Homepage, Create} from './pages'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/create' element={<Create />}/>
      </Routes>
    </>
  )
}

export default App;