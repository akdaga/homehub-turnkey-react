export default function Partners(){
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="md:flex items-end justify-between gap-8 mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Channel Partners</h2>
          <p className="text-blue-200 max-w-2xl mt-2">We collaborate with finance brokers, buyers’ advocates, accountants, and wealth advisers. Access a ready-to-go inventory, co-branded sales assets, and a transparent referral model.</p>
        </div>
        <a href="/portal" className="text-brand-gold underline">Apply / Login »</a>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {['Wholesale','Retail','Property Managers'].map((t,i)=>(
          <div key={i} className="p-6 rounded-2xl bg-brand-blue border border-white/10 shadow-card">
            <h3 className="font-semibold mb-2 text-white">{t}</h3>
            <ul className="text-sm text-blue-200 space-y-2">
              <li>• Co-branded assets</li>
              <li>• Simple referral workflow</li>
              <li>• Milestone status updates</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}