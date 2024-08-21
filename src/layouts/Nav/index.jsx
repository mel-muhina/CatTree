import { NavLink, Outlet } from "react-router-dom"
// import "./Nav.css"

export default function Nav() {
    // const logo = "https://cdn-icons-png.flaticon.com/512/7156/7156595.png"
  return (
    <>
        <nav className="navigation">
              {/* <img src={logo} className="logo"></img> */}
              <ul className="nav-links">
                   <li><NavLink to="/">Home</NavLink></li>
                   <li><NavLink to="/cats">Cats Avaliable</NavLink></li>
                   <li><NavLink to="/search">Search Cats</NavLink></li>
              </ul>
        </nav>
    
        <Outlet />
    </>
  )
}
