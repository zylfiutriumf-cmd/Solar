import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'

const activeLink = ({ isActive }) =>
  isActive
    ? 'text-yellow-300 underline decoration-yellow-300/40'
    : 'text-slate-300 hover:text-yellow-300 transition'

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.25em]">
          <NavLink to="/" className={activeLink} end>
            Home
          </NavLink>
          <NavLink to="/solar" className={activeLink}>
            Solar
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

