import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useIdentity } from '../lib/auth'

const files=[
  { label: 'Simvest Brochure 2025 (PDF)', name: 'simvest-brochure-2025.pdf' },
  { label: 'Agent Briefing Pack (PDF)', name: 'simvest-agent-briefing-pack.pdf' },
  { label: 'Contract Request Form (PDF)', name: 'simvest-contract-request-form.pdf' },
  { label: 'Referral Agreement (PDF)', name: 'simvest-referral-agreement-qld-vic.pdf' },
  { label: 'Commission Schedule (CSV)', name: 'commission-schedule-sample.csv' },
]

export default function Portal(){
  const { user, netlifyIdentity } = useIdentity()

  useEffect(()=>{
    if (!user) return
  },[user])

  if(!user){
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Partner Portal</h2>
        <p className="text-blue-200 mb-6">Log in to access commission schedules, brochures, and property packs.</p>
        <button onClick={() => netlifyIdentity.open('login')} className="px-5 py-3 rounded-xl bg-brand-gold text-brand-blue font-semibold shadow">Login / Sign up</button>
        <p className="text-xs text-blue-300 mt-3">Assign roles in Netlify Identity → user → Edit roles: <code>partner</code> or <code>admin</code>.</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Welcome to the Partner Portal</h2>
      <div className="mb-6"><Link to="/portal/commissions" className="px-4 py-2 rounded-xl bg-brand-gold text-brand-blue font-semibold">Commission Calculator</Link></div>
      <ul className="space-y-3">
        {files.map((f,i)=>(
          <li key={i} className="p-4 rounded-xl bg-brand-blue border border-white/10 shadow-card flex items-center justify-between">
            <span className="text-white">{f.label}</span>
            <a href={`/protected/${f.name}`} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg bg-brand-gold text-brand-blue font-semibold">Download</a>
          </li>
        ))}
      </ul>
    </div>
  )
}