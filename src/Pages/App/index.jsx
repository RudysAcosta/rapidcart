import {BrowserRouter } from 'react-router-dom'
import {ShoppingCartProvider} from '../../Context'
import Navbar from '../../Components/Navbar'
import './App.css'

import AppRoutes from '../../Components/AppRouter'

const App = () => {
  return (
  <ShoppingCartProvider>
   <BrowserRouter>
      <AppRoutes/>
      <Navbar />
   </BrowserRouter>
  </ShoppingCartProvider>
  )
}

export default App
