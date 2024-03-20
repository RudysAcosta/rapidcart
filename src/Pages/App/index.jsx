import { BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'

import AppRoutes from '../../Components/AppRouter'



const App = () => {

  // const context = useContext(ShoppingCartContext)

  return (
  <ShoppingCartProvider>
   <BrowserRouter>
      <AppRoutes/>
      <Navbar />
      <CheckoutSideMenu />
   </BrowserRouter>
  </ShoppingCartProvider>
  )
}

export default App
