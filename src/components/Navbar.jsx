import { BsCart3, BsMoonFill, BsSunFill, BsPerson } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { FaBarsStaggered } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../features/user/userSlice'
import { Link, useNavigate } from 'react-router-dom'
import { clearCart } from '../features/cart/cartSlice'
import { logoutUser } from '../features/user/userSlice'
import { useQueryClient } from '@tanstack/react-query'
import logo from '../assets/logo.svg'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const user = useSelector((state) => state.userState.user)

  const handleLogout = () => {
    navigate('/')
    dispatch(clearCart())
    dispatch(logoutUser())
    queryClient.removeQueries()
  }

  const handleTheme = () => {
    dispatch(toggleTheme())
  }

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink to="/" className="hidden lg:flex btn text-3xl items-center">
            <img src={logo} alt="logo" />
          </NavLink>

          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-53">
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          {/* Theme setup */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />

            <BsMoonFill className="swap-off h-4 w-4" />
          </label>

          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
          {/* log in / log out */}
          {user ? (
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-sm">
                <div className="text-xs flex border-b-2 border-primary">
                  {user.username} <RiArrowDropDownLine className="text-lg" />{' '}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-26">
                <li>
                  <button
                    className="btn btn-outline btn-primary btn-sm"
                    onClick={() => handleLogout()}>
                    logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn text-3xl px-2 ml-1 rounded-full">
              <BsPerson />
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
