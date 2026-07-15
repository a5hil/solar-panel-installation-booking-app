import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddTeam from './components/AddTeam'
import ViewCustomer from './components/ViewCustomer'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <AddTeam/>
    <ViewCustomer/>
    <Home/>
    </>
  )
}

export default App
