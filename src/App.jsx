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
import EditCustomer from './Components/EditCustomer'
import EditSolar from './Components/EditSolar'
import EditTeam from './Components/EditTeam'
import EditPayment from './Components/EditPayment'

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home /> } />
          <Route path='/add-customer' element={<AddCustomer /> } />
          <Route path='/view-customer' element={<ViewCustomer /> } />
          <Route path='/edit-customer' element={<EditCustomer /> } />
          <Route path='/add-installation' element={<AddSolar /> } />
          <Route path='/view-installation' element={<ViewSolar /> } />
          <Route path='/edit-installation' element={<EditSolar /> } />
          <Route path='/add-team' element={<AddTeam /> } />
          <Route path='/view-team' element={<ViewTeam /> } />
          <Route path='/edit-team' element={<EditTeam /> } />
          <Route path='/add-payment' element={<AddPayment /> } />
          <Route path='/view-payment' element={<ViewPayment /> } />
          <Route path='/edit-payment' element={<EditPayment /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
