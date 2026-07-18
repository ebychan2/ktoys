export const runtime = 'edge';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white overflow-hidden selection:bg-indigo-500/30">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-20 pointer-events-none animate-pulse duration-[8000ms]"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full blur-[120px] opacity-15 pointer-events-none animate-pulse duration-[6000ms]"></div>
      
      {/* Foreground Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl">
        {/* Subtle decorative tag */}
        <span className="px-3 py-1 text-xs font-semibold tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-8 uppercase animate-fade-in">
          Premium Playthings
        </span>

        {/* Brand Name */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400 mb-6 drop-shadow-sm select-none">
          K TOYS
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 font-medium max-w-md mb-8 leading-relaxed">
          Crafting exceptional and imaginative worlds. Our collection of premium toys is arriving shortly.
        </p>

        {/* "Coming Soon" Badge and Progress */}
        <div className="flex flex-col items-center gap-4 w-full max-w-xs animate-pulse">
          <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Coming Soon
          </div>
          {/* Progress bar simulation */}
          <div className="h-1.5 w-full bg-slate-900 border border-slate-800/80 rounded-full overflow-hidden">
            <div className="h-full w-4/5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-xs text-slate-600 z-10">
        &copy; {new Date().getFullYear()} K TOYS. All rights reserved.
      </div>
    </main>
  );
}
