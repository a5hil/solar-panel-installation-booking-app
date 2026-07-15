import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ViewCustomer from './components/ViewCustomer'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <ViewCustomer/>
    <Home/>
    </>
  )
}

export default App
