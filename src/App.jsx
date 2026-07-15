import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import AddCustomer from './components/AddCustomer'
import ViewCustomer from './components/ViewCustomer'
import AddSolar from './components/AddSolar'
import ViewSolar from './components/ViewSolar'
import AddTeam from './components/AddTeam'
import ViewTeam from './components/ViewTeam'
import AddPayment from './components/AddPayment'
import ViewPayment from './components/ViewPayment'

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
