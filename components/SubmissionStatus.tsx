import React, { useState, useEffect } from 'react';

interface SubmissionStatusProps {
  isOpen: boolean;
  onClose: () => void;
  onTrack: () => void;
}

export const SubmissionStatus: React.FC<SubmissionStatusProps> = ({ 
  isOpen, 
  onClose, 
  onTrack 
}) => {
  const [status, setStatus] = useState<'loading' | 'success'>('loading');

  useEffect(() => {
    if (isOpen) {
      // Simulate submission process
      const timer = setTimeout(() => {
        setStatus('success');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleTrackClick = () => {
    onTrack();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative bg-black/90 border border-[#39FF14]/20 rounded-xl p-12 max-w-md w-full mx-4 flex flex-col items-center">
        {status === 'loading' ? (
          // Loading Animation
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-4 border-[#39FF14]/20 rounded-full" />
            <div className="absolute inset-0 border-4 border-[#39FF14] rounded-full border-t-transparent animate-spin" />
          </div>
        ) : (
          // Success State
          <div className="flex flex-col items-center">
            {/* Success Check Mark */}
            <div className="w-24 h-24 rounded-full border-4 border-[#39FF14] flex items-center justify-center mb-6">
              <svg 
                className="w-12 h-12 text-[#39FF14] animate-success-check" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            
            <h3 className="text-2xl font-medium text-[#39FF14] mb-2">
              Submission Successful!
            </h3>
            <p className="text-gray-400 text-center mb-8">
              Your research paper has been successfully submitted for review.
            </p>
            
            <button
              onClick={handleTrackClick}
              className="bg-[#39FF14]/10 border-2 border-[#39FF14] text-[#39FF14] 
                       px-8 py-3 rounded-xl hover:bg-[#39FF14]/20 
                       transition-all duration-300 font-medium"
            >
              Track Submission
            </button>
          </div>
        )}
      </div>
    </div>
  );
}; 