import { Link } from 'react-router-dom'
export default function Resources(){
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Resources</h2>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl bg-brand-blue border border-white/10 shadow-card">
          <h3 className="font-semibold text-white">Investor Guide (PDF)</h3>
          <p className="text-sm text-blue-200">What “turnkey” covers, finance tips, and how to read a package.</p>
          <Link to="/portal" className="inline-block mt-3 text-brand-gold underline">Available in Partner Portal</Link>
        </div>
        <div className="p-6 rounded-2xl bg-brand-blue border border-white/10 shadow-card">
          <h3 className="font-semibold text-white">Floorplan Library</h3>
          <p className="text-sm text-blue-200">Popular layouts optimised for rental demand.</p>
          <Link to="/packages" className="inline-block mt-3 text-brand-gold underline">See examples</Link>
        </div>
        <div className="p-6 rounded-2xl bg-brand-blue border border-white/10 shadow-card">
          <h3 className="font-semibold text-white">Partner Playbook</h3>
          <p className="text-sm text-blue-200">How to package, submit requests, and track referrals.</p>
          <Link to="/portal" className="inline-block mt-3 text-brand-gold underline">Request access</Link>
        </div>
      </div>
    </div>
  )
}