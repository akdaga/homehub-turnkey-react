export default function Footer(){
  return (
    <footer className="bg-brand-navy text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-brand-gold to-brand-blue2" />
            <div className="font-bold">HomeHub Living Turnkey</div>
          </div>
          <p className="text-sm text-blue-200 mt-3">Simvest-backed turnkey house & land packages for investors and channel partners.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            <li><a href="/packages">Packages</a></li>
            <li><a href="/process">How it Works</a></li>
            <li><a href="/partners">Channel Partners</a></li>
            <li><a href="/resources">Resources</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Disclaimer</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            <li>Email: hello@homehubliving.com.au</li>
            <li>Melbourne, Victoria</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-blue-200 pb-8">© {new Date().getFullYear()} HomeHub Living. All rights reserved.</div>
    </footer>
  )
}