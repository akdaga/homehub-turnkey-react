import { useState, useEffect } from 'react'
import { useIdentity } from '../lib/auth'

export default function Commissions(){
  const { user, netlifyIdentity } = useIdentity()
  const [price,setPrice]=useState(700000)
  const [rate,setRate]=useState(3.25)
  const [gst,setGst]=useState(true)

  useEffect(()=>{ if(!user) netlifyIdentity.open('login') },[user])
  if(!user) return null

  const commission= price*(rate/100)
  const gstAmt = gst? commission*0.1:0
  const total = commission + gstAmt

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Commission Calculator</h2>
      <p className="text-blue-200 mb-6">Typical partner commissions are <strong>3–4%</strong> of the house price. Adjust the inputs below.</p>
      <div className="space-y-4 p-6 rounded-2xl bg-brand-blue border border-white/10">
        <label className="block">
          <span className="text-sm text-blue-100">House Price (incl. GST)</span>
          <input type="number" value={price} onChange={e=>setPrice(Number(e.target.value||0))} className="mt-1 w-full px-4 py-3 rounded-xl bg-brand-blue border border-white/10 text-white" />
        </label>
        <label className="block">
          <span className="text-sm text-blue-100">Commission Rate: {rate.toFixed(2)}%</span>
          <input type="range" min="3" max="4" step="0.05" value={rate} onChange={e=>setRate(Number(e.target.value))} className="mt-2 w-full" />
        </label>
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" checked={gst} onChange={e=>setGst(e.target.checked)} />
          <span className="text-sm text-blue-100">Add 10% GST to payout</span>
        </label>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-xl bg-brand-blue border border-white/10">
            <div className="text-xs text-blue-200">Commission</div>
            <div className="text-xl font-bold text-white">${commission.toLocaleString()}</div>
          </div>
          <div className="p-4 rounded-xl bg-brand-blue border border-white/10">
            <div className="text-xs text-blue-200">GST</div>
            <div className="text-xl font-bold text-white">${gstAmt.toLocaleString()}</div>
          </div>
          <div className="p-4 rounded-xl bg-brand-blue border border-white/10">
            <div className="text-xs text-blue-200">Total Payout</div>
            <div className="text-xl font-bold text-white">${total.toLocaleString()}</div>
          </div>
        </div>
      </div>
      <p className="text-xs text-blue-300 mt-4">Final commissions are set in your partner agreement and may vary by deal type.</p>
    </div>
  )
}