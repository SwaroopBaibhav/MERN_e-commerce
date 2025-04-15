import { Routes, Route } from 'react-router-dom'
import { Box, useColorModeValue } from '@chakra-ui/react'
import {Homepage, Createpage} from './pages/index.js'
import Navbar from './components/Navbar.jsx'
// import {  } from './components/ui/color-mode'


function App() {

  return (
    <>
      <Box minH={'100vh'} bg={useColorModeValue('gray.100', 'gray.900')}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/create' element={<Createpage/>} />
        </Routes>
      </Box>
    </>
  )
}

export default App
