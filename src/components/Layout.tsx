import { Link, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="dark min-h-screen bg-gradient-to-br from-gray-900 via-black/50 to-gray-950 text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-white rounded-xl p-2 shadow-lg shadow-cyan-500/30">
                <img 
                  src="/main logo.png.png" 
                  alt="DamiAPK Logo" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent tracking-tight">DamiAPK</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                to="/" 
                className={`transition-colors duration-300 font-medium ${isActive('/') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}
              >
                Home
              </Link>
              <Link 
                to="/downloads" 
                className={`transition-colors duration-300 font-medium ${isActive('/downloads') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}
              >
                Downloads
              </Link>
              <Link 
                to="/reviews" 
                className={`transition-colors duration-300 font-medium ${isActive('/reviews') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}
              >
                Reviews
              </Link>
              <Link 
                to="/guides" 
                className={`transition-colors duration-300 font-medium ${isActive('/guides') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}
              >
                Guides
              </Link>
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300 font-medium">
                Upload APK
              </button>
            </div>
            
            <div className="md:hidden">
              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">☰</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white rounded-lg p-2">
                  <img 
                    src="/main logo.png.png" 
                    alt="DamiAPK Logo" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">DamiAPK</span>
              </div>
              <p className="text-gray-400 text-sm">Your trusted source for safe APK downloads and mobile gaming.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</Link></li>
                <li><Link to="/downloads" className="text-gray-400 hover:text-cyan-400 transition-colors">Downloads</Link></li>
                <li><Link to="/reviews" className="text-gray-400 hover:text-cyan-400 transition-colors">Reviews</Link></li>
                <li><Link to="/guides" className="text-gray-400 hover:text-cyan-400 transition-colors">Guides</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Action Games</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">RPG Games</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">MOD APKs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Productivity</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">DMCA</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 DamiAPK.shop. All rights reserved. Safe APK downloads.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
