import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from "../../Context"



const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeClass = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 ">
            <ul className="flex items-center gap-3">
                <li>
                    <NavLink to='/' className="font-semibold text-lg">
                        RapidCart
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/' 
                        className={({isActive}) => 
                            isActive ? activeClass : undefined
                    }> All </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes' 
                        className={({isActive}) => 
                            isActive ? activeClass : undefined
                    }>Clothes</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electonics'
                        className={({isActive}) => 
                            isActive ? activeClass : undefined
                        } >Electonics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/furnitures'
                        className={({isActive}) => 
                            isActive ? activeClass : undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/toys'
                        className={({isActive}) => 
                            isActive ? activeClass : undefined
                        }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others' 
                        className={({isActive}) => 
                            isActive ? activeClass : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    ncrousset926@gmail.com
                </li>
                <li>
                    <NavLink 
                        to='/my-Orders' 
                        className={({isActive}) => 
                            isActive ? activeClass : undefined
                    }>My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-Account' 
                        className={({isActive}) => 
                            isActive ? activeClass : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({isActive}) => 
                            isActive ? activeClass : undefined
                        }>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center"> 
                    <ShoppingBagIcon className="h-6 w-6 text-black" /> 
                    <div>{context.count}</div>                   
                </li>
            </ul>
        </nav>
    )
}

export default Navbar