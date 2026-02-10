import { useState, useEffect } from 'react';

interface Game {
  id: number;
  name: string;
  desc: string;
  rating: number;
  image: string;
  category: string;
  downloads: number;
  downloadUrl?: string;
  telegramMessageId?: number;
  sourceChannel?: string;
}

const categories = ['All', 'Action', 'RPG', 'Puzzle', 'Shooter', 'Sports', 'Multiplayer', 'Social', 'Productivity'];

export function Downloads() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

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
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            All Downloads
          </h1>
          <p className="text-xl text-gray-400">Browse and download the latest APKs and MOD games</p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search APKs, Games..."
              className="w-full px-6 py-4 pl-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg className="absolute left-5 top-5 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* APK Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
            <p className="mt-4 text-gray-400">Loading APKs...</p>
          </div>
        ) : filteredGames.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No APKs found. Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 overflow-hidden hover:scale-105"
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
                <button
                  onClick={() => setSelectedGame(game)}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-2xl py-3 px-6 font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-400/40 transition-all duration-300 text-white"
                >
                  Download APK
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

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
