import { Link } from 'react-router-dom'
export default function Home(){
  return (
    <section className="bg-brand-ink">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-12 md:pt-24">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-blue-200 mb-4">
              <span className="px-2 py-1 rounded-full border border-white/10">Retail & Wholesale Investors</span>
              <span className="px-2 py-1 rounded-full border border-white/10">Simvest-backed</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Fixed-price, rent-ready <span className="text-brand-gold">turnkey</span> packages.
            </h1>
            <p className="mt-5 text-lg text-blue-200">We source titled land, pair the optimal Simvest design, lock your price, and deliver a fully finished home that’s ready to lease on day one—backed by a 75-year heritage and lifetime structural guarantee*.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/packages" className="px-5 py-3 rounded-xl bg-brand-gold text-brand-blue font-semibold shadow">Browse Packages</Link>
              <Link to="/partners" className="px-5 py-3 rounded-xl border border-white/10">Partner with Us</Link>
            </div>
            <p className="mt-3 text-xs text-blue-300">*Subject to builder terms and eligibility.</p>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-card">
              <img loading="lazy" src="/images/house-1.svg" alt="Modern turnkey home" width="1600" height="360" className="w-full h-[360px] object-cover no-flicker-img"/>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-brand-blue border border-white/10">Front & rear landscaping</div>
              <div className="p-3 rounded-xl bg-brand-blue border border-white/10">Blinds & appliances</div>
              <div className="p-3 rounded-xl bg-brand-blue border border-white/10">Driveway & fencing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}