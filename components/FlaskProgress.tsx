import React from 'react';

interface FlaskProgressProps {
  current: number;
  target: number;
}

export const FlaskProgress: React.FC<FlaskProgressProps> = ({ current, target }) => {
  const percentage = (current / target) * 100;
  
  return (
    <div className="relative w-full h-[500px] flex flex-col items-center">

      <div className="relative w-full h-full flex justify-center mt-16">
        {/* Measurement Scale - moved closer to flask */}
        <div className="absolute left-[calc(50%-200px)] h-[340px] top-[68px] w-16 flex flex-col justify-between">
          {/* Scale Lines */}
          <div className="relative h-full w-1">
            {/* Main vertical line */}
            <div className="absolute left-0 h-full w-[2px] bg-[#39FF14]/30" />
            
            {/* Scale markers */}
            {[...Array(11)].map((_, i) => (
              <div key={i} className="absolute left-0 flex items-center gap-2" 
                   style={{ bottom: `${(i * 10)}%`, height: '20px' }}>
                <span className="text-[#389927] text-sm whitespace-nowrap ml-2 order-1">
                  {i % 5 === 0 && Math.round((target * (i * 10)) / 100)} {i % 5 === 0 && 'SOL'}
                </span>
                <div className={`h-[2px] ${i % 5 === 0 ? 'w-6' : 'w-3'} bg-[#39FF14]/30 order-2`} />
              </div>
            ))}

            {/* Current value marker */}
            <div className="absolute left-0 flex items-center gap-2"
                 style={{ bottom: `${percentage}%`, height: '20px' }}>
              <span className="text-[#39FF14] font-medium text-sm whitespace-nowrap ml-2 order-1">
                {current} SOL
              </span>
              <div className="h-[2px] w-8 bg-[#39FF14] order-2" />
            </div>
          </div>
        </div>

        {/* Flask Container - adjusted margin */}
        <div className="relative w-[300px] h-[400px] ml-12">
          {/* Flask Neck */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40px] h-[60px] 
                        border-[3px] border-[#39FF14] border-b-0
                        bg-black/20 backdrop-blur-sm
                        shadow-[0_0_10px_rgba(57,255,20,0.3)]">
            {/* Inner neck highlight */}
            <div className="absolute top-0 left-1 w-[1px] h-full bg-[#39FF14]/30" />
          </div>

          {/* Flask Body */}
          <div className="absolute top-[58px] left-1/2 -translate-x-1/2 
                        w-[260px] h-[340px] 
                        bg-black/20 backdrop-blur-sm
                        border-[3px] border-[#39FF14]
                        shadow-[0_0_10px_rgba(57,255,20,0.3)]
                        rounded-b-[100px]">
            {/* Liquid Container */}
            <div className="absolute bottom-0 left-0 right-0 
                          bg-gradient-to-b from-[#39FF14]/20 to-[#39FF14]/40
                          rounded-b-[97px]
                          transition-all duration-1000 ease-in-out"
                 style={{ 
                   height: `${percentage}%`
                 }}>
              {/* Bubbles */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-[#39FF14]/40 animate-bubble"
                  style={{
                    width: `${Math.random() * 15 + 5}px`,
                    height: `${Math.random() * 15 + 5}px`,
                    left: `${Math.random() * 80 + 10}%`,
                    bottom: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 