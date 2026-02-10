import { useState, useEffect } from 'react';

interface APK {
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
  createdAt: string;
}

export function Admin() {
  const [apks, setApks] = useState<APK[]>([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ADMIN_PASSWORD = 'damiapk2026'; // Change this to your secure password

  useEffect(() => {
    if (isAuthenticated) {
      fetchAPKs();
    }
  }, [isAuthenticated]);

  const fetchAPKs = async () => {
    try {
      const response = await fetch('https://bot-production-df1e.up.railway.app/api/apks');
      const data = await response.json();
      setApks(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch APKs:', error);
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password!');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this APK?')) return;

    try {
      const response = await fetch(`https://bot-production-df1e.up.railway.app/api/apks/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setApks(apks.filter(apk => apk.id !== id));
        alert('APK deleted successfully!');
      } else {
        alert('Failed to delete APK');
      }
    } catch (error) {
      console.error('Error deleting APK:', error);
      alert('Error deleting APK');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Admin Login
          </h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter admin password"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-xl py-3 font-semibold shadow-lg transition-all duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-xl font-semibold transition-all"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
            <p className="mt-4 text-gray-400">Loading APKs...</p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-400 mb-4">Total APKs: {apks.length}</p>
            {apks.map((apk) => (
              <div
                key={apk.id}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-6"
              >
                <img
                  src={apk.image}
                  alt={apk.name}
                  className="w-24 h-24 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{apk.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{apk.desc}</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>⭐ {apk.rating}</span>
                    <span>📁 {apk.category}</span>
                    <span>📥 {apk.downloads}M</span>
                    <span>🆔 {apk.id}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(apk.id)}
                  className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-xl font-semibold transition-all duration-300"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
