import { useState } from 'react';

interface Game {
  id: number;
  name: string;
  desc: string;
  rating: number;
  image: string;
  category: string;
  downloads: number;
}

interface Review {
  id: number;
  title: string;
  author: string;
  text: string;
  rating: number;
}

interface Guide {
  id: number;
  title: string;
  desc: string;
  image: string;
  readTime: string;
}

const games: Game[] = [
  { id: 1, name: 'PUBG Mobile MOD Unlimited UC', desc: 'Battle royale with premium unlocks and no ads.', rating: 4.8, image: 'https://images.unsplash.com/photo-1611606066626-b9b11ed6a2b0?w=300&h=400&fit=crop', category: 'Action', downloads: 1.2 },
  { id: 2, name: 'Genshin Impact v5.1 APK', desc: 'Open-world adventure with stunning graphics.', rating: 4.9, image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=400&fit=crop', category: 'RPG', downloads: 850 },
  { id: 3, name: 'Candy Crush Saga MOD', desc: 'Unlimited lives and boosters unlocked.', rating: 4.7, image: 'https://images.unsplash.com/photo-1579044373921-f9a455a7aa54?w=300&h=400&fit=crop', category: 'Puzzle', downloads: 2.1 },
  { id: 4, name: 'Call of Duty Mobile Season 10', desc: 'Multiplayer FPS with new maps.', rating: 4.6, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=400&fit=crop', category: 'Shooter', downloads: 950 },
  { id: 5, name: 'Subway Surfers v4.0 MOD', desc: 'Endless runner with all characters free.', rating: 4.5, image: 'https://images.unsplash.com/photo-1581235684510-1c14ee66fdc5?w=300&h=400&fit=crop', category: 'Arcade', downloads: 1.8 },
  { id: 6, name: 'Clash of Clans APK Latest', desc: 'Strategy base builder with max gems.', rating: 4.9, image: 'https://images.unsplash.com/photo-1570549717069-d1ce23b3f722?w=300&h=400&fit=crop', category: 'Strategy', downloads: 3.2 },
  { id: 7, name: 'Free Fire MAX Diamond Hack', desc: 'Battle royale with auto headshot.', rating: 4.4, image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=400&fit=crop', category: 'Action', downloads: 2.5 },
  { id: 8, name: 'Among Us MOD All Skins', desc: 'Imposter mode with custom cosmetics.', rating: 4.7, image: 'https://images.unsplash.com/photo-1605818427530-7e268bbffcaf?w=300&h=400&fit=crop', category: 'Multiplayer', downloads: 1.1 },
];

const reviews: Review[] = [
  { id: 1, title: 'Best PUBG MOD Ever!', author: 'GamerProX', text: 'Smooth gameplay, legit unlimited UC. No bans detected.', rating: 5 },
  { id: 2, title: 'Genshin APK Rocks', author: 'OtakuQueen', text: 'Updated characters without root. Highly recommend.', rating: 4.5 },
  { id: 3, title: 'Candy Crush Hack Works', author: 'SweetTooth', text: 'Infinite boosters make it fun forever.', rating: 4.8 },
];

const guides: Guide[] = [
  { id: 1, title: 'How to Install XAPK Files Safely', desc: 'Step-by-step guide with Split APKs.', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop', readTime: '5 min' },
  { id: 2, title: 'Best Settings for PUBG Mobile 2026', desc: 'Optimize FPS and graphics for low-end devices.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop', readTime: '7 min' },
  { id: 3, title: 'Top 10 Android Games Free Download', desc: 'Curated list with direct MOD links.', image: 'https://images.unsplash.com/photo-1464822759023-fed622b8be9b?w=300&h=200&fit=crop', readTime: '10 min' },
];

const categories = ['Action', 'RPG', 'Puzzle', 'Shooter', 'Arcade', 'Strategy', 'Multiplayer'];

export function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategory === 'All' || game.category === selectedCategory)
  );

  return (
    <div className="dark min-h-screen bg-gradient-to-br from-gray-900 via-black/50 to-gray-950 text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl shadow-lg shadow-cyan-500/50 animate-pulse" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent tracking-tight">DamiAPK</span>
            </div>
            <div className="hidden md:flex flex-1 justify-center max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search APKs, Games..."
                  className="w-full px-4 py-2 pl-12 pr-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-cyan-500/20"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <svg className="absolute left-4 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#featured" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">Downloads</a>
              <a href="#reviews" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">Reviews</a>
              <a href="#guides" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">Guides</a>
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300 font-medium">Upload APK</button>
            </div>
            <div className="md:hidden">
              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">☰</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-white to-purple-500 bg-clip-text text-transparent mb-6 tracking-tight">
            Premium APKs & Games
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Download MOD APKs, latest mobile games, expert reviews & installation guides. Safe, fast & free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <select
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option>All</option>
                {categories.map(cat => <option key={cat}>{cat}</option>)}
              </select>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-2xl shadow-lg shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-400/40 transition-all duration-300 font-semibold text-lg whitespace-nowrap">
              Browse Now
            </button>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section id="featured" className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Featured Downloads
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Top rated APKs & MOD Games this week
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.slice(0,8).map((game) => (
              <div
                key={game.id}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 overflow-hidden hover:scale-105 hover:rotate-1"
              >
                <div className="relative mb-4 h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-black">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-2 py-1 rounded-full text-sm font-bold shadow-lg">
                    {game.rating} ★
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">{game.name}</h3>
                <p className="text-gray-400 mb-4 text-sm line-clamp-2">{game.desc}</p>
                <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                  <span>{game.category}</span>
                  <span>{game.downloads}M DLs</span>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-2xl py-3 px-6 font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-400/40 transition-all duration-300 text-white">
                  Download APK
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Latest Reviews
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <h3 className="font-bold text-xl mb-3">{review.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{review.text}</p>
                <div className="text-right">
                  <span className="font-semibold text-cyan-400">— {review.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section id="guides" className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
              Pro Guides
            </h2>
            <p className="text-xl text-gray-400">Installation tips & game strategies</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div key={guide.id} className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-md border border-white/10 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img src={guide.image} alt={guide.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 line-clamp-2 group-hover:text-emerald-400">{guide.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{guide.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">{guide.readTime}</span>
                    <a href="#" className="text-emerald-400 hover:text-emerald-300 font-medium">Read →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">DamiAPK</span>
              <p className="text-gray-500 mt-2">© 2026 DamiAPK.shop. All rights reserved. Safe APK downloads.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}