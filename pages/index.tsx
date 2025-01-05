import { Geist } from "next/font/google";
import { ConnectWallet } from "../components/ConnectWallet";
import { useEffect, useState } from "react";

const geist = Geist({
  subsets: ["latin"],
});

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`${geist.className} min-h-screen bg-black text-white flex items-center relative overflow-hidden`}>
      {/* Animated Grid Background */}
      <div className="fixed inset-0">
        {/* Main grid */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(#39FF1405_1px,transparent_1px),linear-gradient(90deg,#39FF1405_1px,transparent_1px)]"
          style={{
            backgroundSize: '50px 50px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-100px)',
            animation: 'grid 20s linear infinite'
          }}
        />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.1)_0%,transparent_70%)]" />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#39FF14] rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animation: `float ${Math.random() * 10 + 5}s linear infinite`
              }}
            />
          ))}
        </div>

        {/* Mouse following glow */}
        <div 
          className="absolute w-[400px] h-[400px] pointer-events-none transition-transform duration-100 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(57,255,20,0.15) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`,
          }}
        />

        {/* Hexagon grid overlay */}
        <div 
          className="absolute inset-0 opacity-10 transition-opacity duration-300"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' stroke-width='1' stroke='%2339FF14' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            mask: `radial-gradient(circle ${200}px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
            WebkitMask: `radial-gradient(circle ${200}px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
            opacity: 0.3
          }}
        />

        {/* Bright hexagon grid overlay */}
        <div 
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' stroke-width='1' stroke='%2339FF14' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            mask: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
            WebkitMask: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
            opacity: 0.5
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-7xl md:text-8xl font-bold mb-8 animate-fade-in">
          <span className="text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">
            SOL/SciEarn
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl mb-9 max-w-3xl mx-auto animate-fade-in-delayed leading-relaxed">
          Empowering decentralized research, funding, and collaboration for a smarter future.
        </p>

        <div className="animate-fade-in-delayed-more">
          <ConnectWallet />
        </div>
      </div>

      <style jsx global>{`
        @keyframes grid {
          0% { transform: perspective(1000px) rotateX(60deg) translateY(-100px); }
          100% { transform: perspective(1000px) rotateX(60deg) translateY(-50px); }
        }
        
        @keyframes moveLight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, 10px); }
          50% { transform: translate(-5px, 20px); }
          75% { transform: translate(-15px, 10px); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fade-in-delayed {
          animation: fadeIn 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed-more {
          animation: fadeIn 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
