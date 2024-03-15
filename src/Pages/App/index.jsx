import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import './App.css'

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/my-account" element={<MyAccount/>} />
        <Route path="/my-order" element={<MyOrder/>} />
        <Route path="/my-orders" element={<MyOrders/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
