import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import AddSolar from './components/AddSolar'

function App() {

  return (
    <>
    {/* <BrowserRouter>
    
    <Routes>

      <Route path='/' element={}/>
      <Route path='/add' element={}/>
      <Route path='/view' element={}/>
      <Route path='/addinstall' element={}/>
      <Route path='/viewintall' element={}/>
      <Route path='/addteam' element={}/>
      <Route path='/viewteam' element={}/>
      <Route path='/addpayment' element={}/>
      <Route path='/viewpayment' element={}/>



    </Routes>
    
    </BrowserRouter> */}

    <AddSolar/>
    </>
  )
}

export default App
