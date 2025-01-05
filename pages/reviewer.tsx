import React, { useState } from 'react';

interface Paper {
  title: string;
  author: string;
  institution: string;
  submittedDate: string;
  deadline: string;
  abstract: string;
  status: string;
  progress: number;
}

const ReviewerPage = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState<Paper | null>(null);

  const handleViewDetails = (paper: Paper) => {
    setSelectedPaper(paper);
    setShowDetailsModal(true);
  };

  const handleStartReview = (paper: Paper) => {
    setSelectedPaper(paper);
    setShowReviewModal(true);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Background Effects */}
      <div className="fixed inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1A0B2E] to-black" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,20,229,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(255,20,229,0.075)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF14E5]/5 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF14E5]/5 rounded-full filter blur-[100px] animate-pulse delay-1000" />
        
        {/* Animated lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-[10%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF14E5] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '0s' }} />
          <div className="absolute left-[20%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF14E5] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
          <div className="absolute left-[30%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF14E5] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
          <div className="absolute left-[40%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF14E5] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '3s' }} />
          <div className="absolute left-[50%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF14E5] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '4s' }} />
          <div className="absolute left-[60%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF14E5] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '5s' }} />
          <div className="absolute left-[70%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF14E5] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '6s' }} />
          <div className="absolute left-[80%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF14E5] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '7s' }} />
        </div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {!isRegistered ? (
        // Registration Form
        <div className="max-w-2xl mx-auto p-6 glassmorphism neon-shadow rounded-xl transition-all duration-300">
          <h2 className="text-3xl text-[#39FF14] text-center mb-8 font-medium">Reviewer Registration</h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Full Name</label>
              <input
                type="text"
                className="w-full bg-black/40 rounded-lg px-4 py-3 
                         text-white focus:outline-none border border-[#00E5FF]/20
                         focus:border-[#00E5FF]/50 focus:neon-shadow
                         transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
              <input
                type="email"
                className="w-full bg-black/40 rounded-lg px-4 py-3 
                         text-white focus:outline-none border border-[#00E5FF]/20
                         focus:border-[#00E5FF]/50 focus:neon-shadow
                         transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">Expertise Area</label>
              <select
                className="w-full bg-black/40 rounded-lg px-4 py-3 
                         text-white focus:outline-none border border-[#00E5FF]/20
                         focus:border-[#00E5FF]/50 focus:neon-shadow
                         transition-all duration-300"
              >
                <option value="">Select your expertise</option>
                <option value="quantum">Quantum Computing</option>
                <option value="ai">Artificial Intelligence</option>
                <option value="biotech">Biotechnology</option>
                <option value="nanotech">Nanotechnology</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">LinkedIn Profile</label>
              <input
                type="url"
                className="w-full bg-black/40 rounded-lg px-4 py-3 
                         text-white focus:outline-none border border-[#00E5FF]/20
                         focus:border-[#00E5FF]/50 focus:neon-shadow
                         transition-all duration-300"
                placeholder="https://linkedin.com/in/your-profile"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">CV/Resume</label>
              <div className="border-2 border-dashed border-[#00E5FF]/20 rounded-lg p-4 text-center bg-black/40">
                <input type="file" accept=".pdf,.doc,.docx" className="hidden" id="cv-upload" />
                <label 
                  htmlFor="cv-upload"
                  className="cursor-pointer flex flex-col items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-[#00E5FF]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </div>
                  <p className="text-[#00E5FF] font-medium">Click to upload your CV</p>
                  <p className="text-gray-400 text-sm mt-1">PDF, DOC, DOCX format, max 5MB</p>
                </label>
              </div>
            </div>

            <button
              type="submit"
              onClick={() => setIsRegistered(true)}
              className="w-full bg-gradient-to-r from-[#4B3F72] via-[#5A8F8B] to-[#6FAF9D] 
                       hover:from-[#5C4F82] hover:via-[#6A9F9B] hover:to-[#7FBFAE]
                       text-white font-medium
                       px-6 py-3 rounded-xl
                       transition-all duration-300 group relative overflow-hidden
                       shadow-[0_0_10px_rgba(90,143,139,0.2)]
                       hover:shadow-[0_0_15px_rgba(90,143,139,0.3)]">
              <span className="relative z-10">Register</span>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </form>
        </div>
      ) : (
        <div className="relative z-10">
          {/* Papers Grid */}
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                title: "Quantum Neural Networks for Advanced Cryptography",
                author: "Dr. Sarah Chen",
                institution: "MIT",
                submittedDate: "2024-03-15",
                deadline: "2024-03-30",
                abstract: "A novel approach combining quantum computing principles with neural networks to create unbreakable encryption systems.",
                status: "Pending Review",
                progress: 0
              },
              {
                title: "Self-Evolving AI Systems in Biotechnology",
                author: "Prof. James Wilson",
                institution: "Stanford",
                submittedDate: "2024-03-12",
                deadline: "2024-03-27",
                abstract: "Exploring the potential of AI systems that can autonomously evolve to solve complex biological problems.",
                status: "In Progress",
                progress: 45
              },
              {
                title: "Molecular Computing: Breaking the Silicon Barrier",
                author: "Dr. Elena Rodriguez",
                institution: "CERN",
                submittedDate: "2024-03-10",
                deadline: "2024-03-25",
                abstract: "Revolutionary approach to computing using molecular structures instead of traditional silicon-based processors.",
                status: "In Progress",
                progress: 75
              }
            ].map((paper, index) => (
              <div key={index} 
                   className="relative group bg-gradient-to-r from-black/40 to-transparent 
                              backdrop-blur-sm border border-[#FF14E5]/20 rounded-xl p-6
                              hover:border-[#FF14E5]/40 transition-all duration-300">
                {/* Status Indicator */}
                <div className={`absolute -left-0.5 top-0 bottom-0 w-1 rounded-l-xl
                                ${paper.progress === 0 ? 'bg-yellow-500' : 
                                  paper.progress < 50 ? 'bg-blue-500' : 
                                  'bg-green-500'}`} />

                {/* Header Section */}
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-medium text-[#FF14E5] group-hover:text-[#FF14E5]/80 
                                   transition-colors duration-300">
                      {paper.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <span>{paper.author}</span>
                      <span className="w-1 h-1 rounded-full bg-[#FF14E5]/50" />
                      <span>{paper.institution}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-[#FF14E5]">{paper.status}</span>
                    <span className="text-xs text-gray-400 mt-1">
                      Due: {new Date(paper.deadline).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-1 bg-black/40 rounded-full overflow-hidden mb-4">
                  <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FF14E5] to-[#FF14E5]/60
                               transition-all duration-300"
                    style={{ width: `${paper.progress}%` }}
                  />
                </div>

                {/* Abstract */}
                <p className="text-gray-400 text-sm mb-4">
                  {paper.abstract}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleViewDetails(paper)}
                    className="px-4 py-2 bg-[#FF14E5]/10 hover:bg-[#FF14E5]/20 
                                 border border-[#FF14E5]/20 hover:border-[#FF14E5]/40
                                 rounded-lg text-[#FF14E5] text-sm transition-all duration-300">
                    View Details
                  </button>
                  <button 
                    onClick={() => handleStartReview(paper)}
                    className="px-4 py-2 bg-[#FF14E5]/10 hover:bg-[#FF14E5]/20
                                 border border-[#FF14E5]/20 hover:border-[#FF14E5]/40
                                 rounded-lg text-[#FF14E5] text-sm transition-all duration-300">
                    Start Review
                  </button>
                </div>

                {/* Hover Effect - Glowing Border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF14E5]/0 via-[#FF14E5]/10 to-[#FF14E5]/0
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                pointer-events-none blur-xl" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Paper Details Modal */}
      {showDetailsModal && selectedPaper && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-black/90 border border-[#FF14E5]/20 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 m-4 modal-scrollbar">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-medium text-[#FF14E5]">Paper Details</h2>
              <button 
                onClick={() => setShowDetailsModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-[#FF14E5] font-medium mb-2">Title</h3>
                <p className="text-white">{selectedPaper.title}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-[#FF14E5] font-medium mb-2">Author</h3>
                  <p className="text-white">{selectedPaper.author}</p>
                </div>
                <div>
                  <h3 className="text-[#FF14E5] font-medium mb-2">Institution</h3>
                  <p className="text-white">{selectedPaper.institution}</p>
                </div>
              </div>

              <div>
                <h3 className="text-[#FF14E5] font-medium mb-2">Abstract</h3>
                <p className="text-white">{selectedPaper.abstract}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-[#FF14E5] font-medium mb-2">Submission Date</h3>
                  <p className="text-white">{new Date(selectedPaper.submittedDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <h3 className="text-[#FF14E5] font-medium mb-2">Review Deadline</h3>
                  <p className="text-white">{new Date(selectedPaper.deadline).toLocaleDateString()}</p>
                </div>
              </div>

              <div>
                <h3 className="text-[#FF14E5] font-medium mb-2">Download Paper</h3>
                <button className="px-4 py-2 bg-[#FF14E5]/10 hover:bg-[#FF14E5]/20 
                                  border border-[#FF14E5]/20 hover:border-[#FF14E5]/40
                                  rounded-lg text-[#FF14E5] text-sm transition-all duration-300">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {showReviewModal && selectedPaper && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-black/90 border border-[#FF14E5]/20 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 m-4 modal-scrollbar">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-medium text-[#FF14E5]">Submit Review</h2>
              <button 
                onClick={() => setShowReviewModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-[#FF14E5] font-medium mb-2">Technical Merit</label>
                <div className="grid grid-cols-10 gap-1">
                  {[1,2,3,4,5,6,7,8,9,10].map((score) => (
                    <button
                      key={score}
                      type="button"
                      className="w-full h-10 rounded-lg border border-[#FF14E5]/20 
                               hover:bg-[#FF14E5]/20 transition-all duration-300
                               flex items-center justify-center text-[#FF14E5]
                               focus:bg-[#FF14E5]/30 focus:border-[#FF14E5]"
                    >
                      {score}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[#FF14E5] font-medium mb-2">Novelty & Originality</label>
                <div className="grid grid-cols-10 gap-1">
                  {[1,2,3,4,5,6,7,8,9,10].map((score) => (
                    <button
                      key={score}
                      type="button"
                      className="w-full h-10 rounded-lg border border-[#FF14E5]/20 
                               hover:bg-[#FF14E5]/20 transition-all duration-300
                               flex items-center justify-center text-[#FF14E5]
                               focus:bg-[#FF14E5]/30 focus:border-[#FF14E5]"
                    >
                      {score}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[#FF14E5] font-medium mb-2">Impact & Significance</label>
                <div className="grid grid-cols-10 gap-1">
                  {[1,2,3,4,5,6,7,8,9,10].map((score) => (
                    <button
                      key={score}
                      type="button"
                      className="w-full h-10 rounded-lg border border-[#FF14E5]/20 
                               hover:bg-[#FF14E5]/20 transition-all duration-300
                               flex items-center justify-center text-[#FF14E5]
                               focus:bg-[#FF14E5]/30 focus:border-[#FF14E5]"
                    >
                      {score}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[#FF14E5] font-medium mb-2">Detailed Review</label>
                <textarea
                  rows={6}
                  className="w-full bg-black/40 rounded-lg px-4 py-3 
                           text-white focus:outline-none border border-[#FF14E5]/20
                           focus:border-[#FF14E5]/50 transition-all duration-300"
                  placeholder="Provide your detailed review here..."
                />
              </div>

              <div>
                <label className="block text-[#FF14E5] font-medium mb-2">Recommendation</label>
                <select
                  className="w-full bg-black/40 rounded-lg px-4 py-3 
                           text-white focus:outline-none border border-[#FF14E5]/20
                           focus:border-[#FF14E5]/50 transition-all duration-300"
                >
                  <option value="">Select recommendation</option>
                  <option value="accept">Accept</option>
                  <option value="minor">Accept with Minor Revisions</option>
                  <option value="major">Accept with Major Revisions</option>
                  <option value="reject">Reject</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF14E5] to-[#FF14E5]/60
                         hover:from-[#FF14E5]/80 hover:to-[#FF14E5]/40
                         text-white font-medium px-6 py-3 rounded-xl
                         transition-all duration-300"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewerPage; 