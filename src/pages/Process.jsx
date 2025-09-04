export default function Process(){
  const steps = [
    ['Brief & Finance','Investor brief, budget, buffers. Finance readiness & broker intro if required.'],
    ['Land & Design','We source titled land and match the optimal Simvest design for rental demand.'],
    ['Price Lock','Fixed-price contract and inclusions pack issued for signing & due-diligence.'],
    ['Build to Handover','Scheduled site start, stage QA, and pre-leasing setup to keys to your PM.'],
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">How it Works</h2>
      <div className="grid md:grid-cols-4 gap-5">
        {steps.map((s,idx)=>(
          <div key={idx} className="p-6 rounded-2xl bg-brand-blue border border-white/10 shadow-card">
            <div className="text-sm text-blue-200 mb-1">{String(idx+1).padStart(2,'0')}</div>
            <h3 className="font-semibold text-white">{s[0]}</h3>
            <p className="text-sm text-blue-200">{s[1]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}