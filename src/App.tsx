import { useState, useEffect } from 'react';

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

const reviews: Review[] = [
  { id: 1, title: 'Warframe Mobile is INSANE!', author: 'MobileGamerPro', text: 'Finally on Android! Runs smooth on my device. Co-op works perfectly. This is the future of mobile gaming.', rating: 5 },
  { id: 2, title: 'CapCut MOD Changed My Life', author: 'ContentCreator22', text: 'No watermark is a game changer. All premium effects free. Best video editor for Android hands down.', rating: 4.5 },
  { id: 3, title: 'Brawl Stars MOD Works Great', author: 'ProGamer_YT', text: 'Unlimited gems and no ban. Been using for weeks. All brawlers unlocked instantly.', rating: 4.8 },
];

const guides: Guide[] = [
  { id: 1, title: 'How to Install MOD APKs Safely in 2026', desc: 'Complete guide to installing modified apps without getting banned or infected.', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop', readTime: '5 min' },
  { id: 2, title: 'Warframe Mobile: Beginner Guide', desc: 'Everything you need to know before starting. Best frames, weapons, and mods for new players.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop', readTime: '8 min' },
  { id: 3, title: 'Top 10 Trending Android Games February 2026', desc: 'Latest viral games and MOD APKs everyone is downloading this month.', image: 'https://images.unsplash.com/photo-1464822759023-fed622b8be9b?w=300&h=200&fit=crop', readTime: '6 min' },
];

const categories = ['Action', 'RPG', 'Puzzle', 'Shooter', 'Sports', 'Multiplayer', 'Social', 'Productivity'];

export function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch APKs from backend API
  useEffect(() => {
    fetchAPKs();
  }, []);

  const fetchAPKs = async () => {
    try {
      const response = await fetch('https://bot-production-df1e.up.railway.app/api/apks');
      const data = await response.json();
      setGames(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch APKs:', error);
      setLoading(false);
    }
  };

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
            Trending APKs February 2026
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Download viral MOD APKs, latest mobile games & apps. Warframe Mobile, Tomb Raider, CapCut MOD & more. Safe, fast & free.
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
              Viral Downloads This Week
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Top trending APKs & MOD Games - February 2026
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {loading ? (
              <div className="col-span-full text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
                <p className="mt-4 text-gray-400">Loading APKs...</p>
              </div>
            ) : filteredGames.length === 0 ? (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-400 text-xl">No APKs found. Post something in your Telegram channel!</p>
              </div>
            ) : (
              filteredGames.slice(0,8).map((game) => (
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
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-2xl py-3 px-6 font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-400/40 transition-all duration-300 text-white"
                  onClick={() => setSelectedGame(game)}
                >
                  Download APK
                </button>
              </div>
            ))
            )}
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

      {/* Download Modal */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedGame(null)}>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-3xl p-8 max-w-lg w-full shadow-2xl shadow-cyan-500/20" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">{selectedGame.name}</h3>
              <button onClick={() => setSelectedGame(null)} className="text-gray-400 hover:text-white text-2xl">&times;</button>
            </div>
            
            <div className="mb-6">
              <img src={selectedGame.image} alt={selectedGame.name} className="w-full h-48 object-cover rounded-2xl mb-4" />
              <p className="text-gray-300 mb-4">{selectedGame.desc}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-gray-400 text-sm">Rating</p>
                  <p className="text-xl font-bold text-yellow-400">{selectedGame.rating} ★</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-gray-400 text-sm">Downloads</p>
                  <p className="text-xl font-bold text-cyan-400">{selectedGame.downloads}M+</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-gray-400 text-sm">Category</p>
                  <p className="text-xl font-bold text-purple-400">{selectedGame.category}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-gray-400 text-sm">Size</p>
                  <p className="text-xl font-bold text-green-400">~100MB</p>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
                <p className="text-yellow-400 text-sm font-semibold mb-2">⚠️ Important Instructions:</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Enable "Unknown Sources" in Settings</li>
                  <li>• Uninstall original app if installed</li>
                  <li>• Download may take 1-2 minutes</li>
                  <li>• Scan with antivirus after download</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              {selectedGame.downloadUrl && (
                <a 
                  href={selectedGame.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-2xl py-4 px-6 font-bold text-center shadow-lg shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-400/40 transition-all duration-300 text-white"
                >
                  📥 Download APK from Telegram
                </a>
              )}
              {selectedGame.telegramMessageId && (
                <a 
                  href={`https://t.me/${selectedGame.sourceChannel?.replace('@', '')}/${selectedGame.telegramMessageId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 hover:bg-blue-500 rounded-2xl py-4 px-6 font-bold text-center shadow-lg transition-all duration-300 text-white"
                >
                  📱 View in Telegram Channel
                </a>
              )}
              <a 
                href={`https://www.apkmirror.com/?s=${encodeURIComponent(selectedGame.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white/5 hover:bg-white/10 border border-white/20 rounded-2xl py-3 px-6 font-semibold text-center transition-all duration-300 text-gray-300"
              >
                🔍 Search on APKMirror
              </a>
              <button 
                onClick={() => setSelectedGame(null)}
                className="block w-full bg-white/5 hover:bg-white/10 border border-white/20 rounded-2xl py-3 px-6 font-semibold text-center transition-all duration-300 text-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}