import { Link } from 'react-router-dom'
export default function Packages(){
  const stock = [
    { suburb: 'Tarneit', estate: 'Riverdale', lot: 'Lot 142', house: 'Arklay 17', frontage: '10.5m', land: '294 m²', price: 679900, rent: 550, image: '/images/house-2.svg' },
    { suburb: 'Clyde North', estate: 'Eliston', lot: 'Lot 318', house: 'Barton 19', frontage: '10.5m', land: '350 m²', price: 739900, rent: 600, image: '/images/house-3.svg' },
    { suburb: 'Werribee', estate: 'Harpley', lot: 'Lot 55', house: 'Varcoe 17', frontage: '12.5m', land: '375 m²', price: 719900, rent: 580, image: '/images/house-4.svg' },
    { suburb: 'Officer', estate: 'Timbertop', lot: 'Lot 92', house: 'Canning 22', frontage: '12.5m', land: '400 m²', price: 799900, rent: 640, image: '/images/house-1.svg' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Featured Packages</h2>
      <p className="text-blue-200 mb-6">Request current stock and we’ll supply fixed-price H&L packages with full turnkey inclusions.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stock.map((p,i)=>(
          <article key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-brand-blue shadow-card">
            <img src={p.image} alt="" width="1200" height="300" className="h-44 w-full object-cover no-flicker-img" />
            <div className="p-5">
              <h3 className="font-semibold text-white">{p.house} — {p.frontage}</h3>
              <p className="text-sm text-blue-200 mt-1">{p.suburb} ({p.estate}) • {p.lot} • Land {p.land}</p>
              <ul className="mt-3 text-xs text-blue-100 space-y-1">
                <li>• Fixed site costs* & turnkey inclusions</li>
                <li>• Energy-efficient & NCC 2022 compliant</li>
                <li>• Estimated rent ~ ${p.rent}/wk</li>
              </ul>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-blue-100">Package <strong>${p.price.toLocaleString()}</strong></span>
                <Link to="/portal" className="px-3 py-2 rounded-lg bg-brand-gold text-brand-blue font-semibold">Request Files</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 text-xs text-blue-300">Images are indicative only. Pricing & availability subject to change and eligibility.</p>
    </div>
  )
}