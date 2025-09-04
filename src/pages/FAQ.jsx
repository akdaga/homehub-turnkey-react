export default function FAQ(){
  const faqs=[
    ['What does “turnkey” include?','Packages typically include landscaping, blinds, appliances, driveways and fencing. Full inclusions are provided with your specific package and contract.'],
    ['Are prices fixed?','We issue fixed-price contracts with clear inclusions. Site conditions and upgrades may affect pricing.'],
    ['Do you work with channel partners?','Yes. We provide a transparent referral workflow, co-branded collateral, and simple communication cadence.'],
  ]
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((f,i)=>(
          <details key={i} className="group bg-brand-blue border border-white/10 rounded-2xl p-5 shadow-card">
            <summary className="font-semibold cursor-pointer list-none flex items-center justify-between text-white">{f[0]} <span className="text-blue-300 group-open:rotate-180 transition">▾</span></summary>
            <div className="mt-3 text-sm text-blue-200">{f[1]}</div>
          </details>
        ))}
      </div>
    </div>
  )
}