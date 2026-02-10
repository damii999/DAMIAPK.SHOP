interface Review {
  id: number;
  title: string;
  author: string;
  text: string;
  rating: number;
  date?: string;
  apkName?: string;
}

const reviews: Review[] = [
  { id: 1, title: 'Warframe Mobile is INSANE!', author: 'MobileGamerPro', text: 'Finally on Android! Runs smooth on my device. Co-op works perfectly. This is the future of mobile gaming.', rating: 5, date: 'Feb 8, 2026', apkName: 'Warframe Mobile' },
  { id: 2, title: 'CapCut MOD Changed My Life', author: 'ContentCreator22', text: 'No watermark is a game changer. All premium effects free. Best video editor for Android hands down.', rating: 4.5, date: 'Feb 7, 2026', apkName: 'CapCut MOD' },
  { id: 3, title: 'Brawl Stars MOD Works Great', author: 'ProGamer_YT', text: 'Unlimited gems and no ban. Been using for weeks. All brawlers unlocked instantly.', rating: 4.8, date: 'Feb 6, 2026', apkName: 'Brawl Stars MOD' },
  { id: 4, title: 'TikTok MOD is Perfect', author: 'SocialMediaKing', text: 'Download videos without watermark. No ads. All premium features unlocked. Highly recommend!', rating: 5, date: 'Feb 5, 2026', apkName: 'TikTok MOD' },
  { id: 5, title: 'Dragon Ball Legends MOD Rocks', author: 'DBZFan2026', text: 'God mode works perfectly. One-hit kill is amazing. All characters unlocked from start.', rating: 4.7, date: 'Feb 4, 2026', apkName: 'Dragon Ball Legends MOD' },
  { id: 6, title: 'Pixel Gun 3D Unlimited Ammo', author: 'FPSMaster', text: 'Anti-ban system works. All weapons unlocked. Best MOD for this game I have found.', rating: 4.6, date: 'Feb 3, 2026', apkName: 'Pixel Gun 3D MOD' },
];

export function Reviews() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
            User Reviews
          </h1>
          <p className="text-xl text-gray-400">Real reviews from our community members</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2">{review.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="font-semibold text-cyan-400">{review.author}</span>
                    <span>•</span>
                    <span>{review.date}</span>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              
              {review.apkName && (
                <div className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm mb-3">
                  {review.apkName}
                </div>
              )}
              
              <p className="text-gray-300 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Write Review CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-gray-400 mb-6">Help others by writing a review of your favorite APK</p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-400/40 transition-all duration-300 font-semibold text-lg">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
}
