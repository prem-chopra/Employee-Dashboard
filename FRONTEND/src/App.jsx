import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import Adduser from './Pages/Adduser'
import { ToastContainer } from 'react-toastify'
import UpdatePage from './Pages/UpdatePage'




function App() {
  return(
    <BrowserRouter>
    <ToastContainer />  
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/adduser' element={<Adduser/>}/>
        <Route path='/update/:id' element={<UpdatePage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  ) 
}

export default App
