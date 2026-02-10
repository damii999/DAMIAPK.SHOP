import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-white to-purple-500 bg-clip-text text-transparent mb-6 tracking-tight">
            Trending APKs February 2026
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Download viral MOD APKs, latest mobile games & apps. Warframe Mobile, Tomb Raider, CapCut MOD & more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/downloads" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-2xl shadow-lg shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-400/40 transition-all duration-300 font-semibold text-lg">
              Browse Downloads
            </Link>
            <Link to="/guides" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition-all duration-300 font-semibold text-lg">
              View Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">500+</div>
              <div className="text-gray-400 mt-2">APKs Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">1M+</div>
              <div className="text-gray-400 mt-2">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">24/7</div>
              <div className="text-gray-400 mt-2">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">100%</div>
              <div className="text-gray-400 mt-2">Safe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-16">
            Why Choose DamiAPK?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Fast Downloads</h3>
              <p className="text-gray-400">Lightning-fast download speeds with multiple mirror links for reliability.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-3">Virus Scanned</h3>
              <p className="text-gray-400">Every APK is scanned for malware and verified before upload.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold mb-3">Daily Updates</h3>
              <p className="text-gray-400">New APKs and MODs added every day. Never miss an update.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
