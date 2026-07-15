import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import AddCustomer from './Components/AddCustomer'
import ViewCustomer from './Components/ViewCustomer'
import AddSolar from './Components/AddSolar'
import ViewSolar from './Components/ViewSolar'
import AddTeam from './Components/AddTeam'
import ViewTeam from './Components/ViewTeam'
import AddPayment from './Components/AddPayment'
import ViewPayment from './Components/ViewPayment'

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home /> } />
          <Route path='/add-customer' element={<AddCustomer /> } />
          <Route path='/view-customer' element={<ViewCustomer /> } />
          <Route path='/add-installation' element={<AddSolar /> } />
          <Route path='/view-installation' element={<ViewSolar /> } />
          <Route path='/add-team' element={<AddTeam /> } />
          <Route path='/view-team' element={<ViewTeam /> } />
          <Route path='/add-payment' element={<AddPayment /> } />
          <Route path='/view-payment' element={<ViewPayment /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
