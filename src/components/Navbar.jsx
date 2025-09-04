import { Link, NavLink } from 'react-router-dom'
import { useIdentity } from '../lib/auth'
import netlifyIdentity from 'netlify-identity-widget'

export default function Navbar(){
  const { user } = useIdentity()
  return (
    <header className="bg-brand-navy border-b border-white/10 sticky top-0 z-40 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          <div className="leading-tight">
            <div className="font-extrabold text-lg">HomeHub Living</div>
            <div className="text-xs text-blue-200">Turnkey House & Land</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/packages" className={({isActive}) => (isActive?'text-brand-gold font-semibold':'text-blue-200 hover:text-brand-gold')}>Packages</NavLink>
          <NavLink to="/process" className={({isActive}) => (isActive?'text-brand-gold font-semibold':'text-blue-200 hover:text-brand-gold')}>Process</NavLink>
          <NavLink to="/partners" className={({isActive}) => (isActive?'text-brand-gold font-semibold':'text-blue-200 hover:text-brand-gold')}>Partners</NavLink>
          <NavLink to="/resources" className={({isActive}) => (isActive?'text-brand-gold font-semibold':'text-blue-200 hover:text-brand-gold')}>Resources</NavLink>
          <NavLink to="/faq" className={({isActive}) => (isActive?'text-brand-gold font-semibold':'text-blue-200 hover:text-brand-gold')}>FAQ</NavLink>
          <NavLink to="/portal" className={({isActive}) => (isActive?'text-brand-gold font-semibold':'text-blue-200 hover:text-brand-gold')}>Partner Portal</NavLink>
          <a href="/admin" className="text-blue-200 hover:text-brand-gold">Admin</a>
        </nav>
        <div className="flex items-center gap-3">
          {!user ? (
            <button onClick={() => netlifyIdentity.open('login')} className="px-4 py-2 rounded-xl bg-brand-gold text-brand-blue font-semibold shadow">
              Partner Login
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-sm text-blue-200">Hi, {user.user_metadata?.full_name || user.email}</span>
              <button onClick={() => netlifyIdentity.logout()} className="px-3 py-2 rounded-xl border border-white/20">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}