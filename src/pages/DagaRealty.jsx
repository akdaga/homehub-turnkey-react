import { Link } from 'react-router-dom'

export default function DagaRealty(){
  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-900">
              Discover your next home with <span className="text-brand-gold">Daga Realty</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Browse beautifully finished properties and connect with our experienced agents to find the right fit for your family.
            </p>
            <div className="mt-6 flex gap-4">
              <Link to="#listings" className="px-5 py-3 rounded-xl bg-brand-gold text-brand-blue font-semibold shadow">
                View Listings
              </Link>
              <Link to="#contact" className="px-5 py-3 rounded-xl border border-gray-300">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            <img src="/images/house-1.svg" alt="Featured property" className="w-full h-[360px] object-cover" loading="lazy" />
          </div>
        </div>
      </div>
      <div id="listings" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Featured Listings</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <img src={`/images/house-${i}.svg`} alt={`Listing ${i}`} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Modern Family Home {i}</h3>
                  <p className="text-sm text-gray-600 mb-3">3 Bed • 2 Bath • 2 Car</p>
                  <p className="text-brand-gold font-bold">$750,000</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="contact" className="py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900">Get in Touch</h2>
          <p className="mt-4 text-gray-700">Have questions about a property or want to book an inspection? Send us a message and our team will respond promptly.</p>
          <form className="mt-8 grid gap-4 text-left">
            <input type="text" placeholder="Name" className="p-3 border border-gray-300 rounded" />
            <input type="email" placeholder="Email" className="p-3 border border-gray-300 rounded" />
            <textarea placeholder="Message" rows="4" className="p-3 border border-gray-300 rounded" />
            <button type="submit" className="px-5 py-3 rounded-xl bg-brand-gold text-brand-blue font-semibold shadow">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
