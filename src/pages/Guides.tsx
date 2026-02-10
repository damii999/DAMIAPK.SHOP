interface Guide {
  id: number;
  title: string;
  desc: string;
  image: string;
  readTime: string;
  category: string;
  content?: string;
}

const guides: Guide[] = [
  { 
    id: 1, 
    title: 'How to Install MOD APKs Safely in 2026', 
    desc: 'Complete guide to installing modified apps without getting banned or infected.', 
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop', 
    readTime: '5 min',
    category: 'Installation'
  },
  { 
    id: 2, 
    title: 'Warframe Mobile: Beginner Guide', 
    desc: 'Everything you need to know before starting. Best frames, weapons, and mods for new players.', 
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop', 
    readTime: '8 min',
    category: 'Gaming'
  },
  { 
    id: 3, 
    title: 'Top 10 Trending Android Games February 2026', 
    desc: 'Latest viral games and MOD APKs everyone is downloading this month.', 
    image: 'https://images.unsplash.com/photo-1464822759023-fed622b8be9b?w=600&h=400&fit=crop', 
    readTime: '6 min',
    category: 'Gaming'
  },
  { 
    id: 4, 
    title: 'How to Avoid Bans in MOD Games', 
    desc: 'Pro tips to stay safe while using modified games and apps.', 
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop', 
    readTime: '7 min',
    category: 'Safety'
  },
  { 
    id: 5, 
    title: 'Best Video Editing Apps for Android 2026', 
    desc: 'Top apps like CapCut MOD, KineMaster, and more for content creators.', 
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop', 
    readTime: '10 min',
    category: 'Productivity'
  },
  { 
    id: 6, 
    title: 'Understanding APK Permissions', 
    desc: 'What permissions mean and which ones to watch out for.', 
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop', 
    readTime: '4 min',
    category: 'Safety'
  },
];

export function Guides() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
            Installation Guides & Tutorials
          </h1>
          <p className="text-xl text-gray-400">Learn how to safely install and use APKs</p>
        </div>

        {/* Featured Guide */}
        <div className="mb-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex flex-col justify-center">
              <div className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm mb-4 w-fit">
                Featured Guide
              </div>
              <h2 className="text-4xl font-bold mb-4">{guides[0].title}</h2>
              <p className="text-gray-300 text-lg mb-6">{guides[0].desc}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">{guides[0].readTime}</span>
                <span>{guides[0].category}</span>
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 rounded-2xl shadow-lg shadow-green-500/25 hover:shadow-2xl hover:shadow-green-400/40 transition-all duration-300 font-semibold text-lg w-fit">
                Read Guide →
              </button>
            </div>
            <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden">
              <img src={guides[0].image} alt={guides[0].title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.slice(1).map((guide) => (
            <div key={guide.id} className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-md border border-white/10 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
              <div className="relative h-48 overflow-hidden">
                <img src={guide.image} alt={guide.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                  {guide.readTime}
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs mb-3">
                  {guide.category}
                </div>
                <h3 className="font-bold text-xl mb-2 line-clamp-2 group-hover:text-emerald-400 transition-colors">{guide.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{guide.desc}</p>
                <button className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More 
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-gray-400 mb-6">Can't find what you're looking for? Contact our support team</p>
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-400/40 transition-all duration-300 font-semibold text-lg">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
