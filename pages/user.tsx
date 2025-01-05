import React, { useState } from 'react';
import { FlaskProgress } from '../components/FlaskProgress';

interface ProjectDetails {
  id: number;
  title: string;
  description: string;
  progress: number;
  initiator: string;
  target: number;
  raised: number;
  timeLeft: string;
  institution: string;
  category: string;
  teamSize: number;
  expectedDuration: string;
}

const UserPage = () => {
  const [activeTab, setActiveTab] = useState('explore');
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  const mockProjects: ProjectDetails[] = [
    {
      id: 1,
      title: "Quantum Computing Research",
      description: "Research on quantum error correction in superconducting qubits and their applications in next-generation computing systems.",
      progress: 75,
      initiator: "Dr. Sarah Connor",
      target: 100,
      raised: 75,
      timeLeft: "5 days",
      institution: "Quantum Labs Institute",
      category: "Quantum Computing",
      teamSize: 5,
      expectedDuration: "12 months"
    },
    // Add more mock projects...
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Background Effects */}
      <div className="fixed inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0B2E0B] to-black" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.075)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#39FF14]/5 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#39FF14]/5 rounded-full filter blur-[100px] animate-pulse delay-1000" />
        
        {/* Animated lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-[10%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#39FF14] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '0s' }} />
          <div className="absolute left-[20%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#39FF14] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
          <div className="absolute left-[30%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#39FF14] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
          <div className="absolute left-[40%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#39FF14] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '3s' }} />
          <div className="absolute left-[50%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#39FF14] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '4s' }} />
          <div className="absolute left-[60%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#39FF14] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '5s' }} />
          <div className="absolute left-[70%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#39FF14] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '6s' }} />
          <div className="absolute left-[80%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#39FF14] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '7s' }} />
        </div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex flex-wrap gap-6 mb-8 border-b border-[#39FF14]/20 pb-4">
        {[
          { id: 'explore', label: 'Explore Papers' },
          { id: 'purchased', label: 'My Library' },
          { id: 'fundraising', label: 'Active Fundraising' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative px-4 py-2 text-lg transition-all duration-300
              ${activeTab === tab.id 
                ? 'text-[#39FF14] font-medium' 
                : 'text-gray-400 hover:text-[#39FF14]'
              }
            `}
          >
            {/* Glowing underline for active tab */}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#39FF14] shadow-[0_0_10px_#39FF14]" />
            )}
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Explore Papers Section */}
        {activeTab === 'explore' && (
          <div>
            {/* Search and Filter */}
            <div className="mb-8 flex gap-4 flex-wrap">
              <input
                type="text"
                placeholder="Search papers..."
                className="flex-1 min-w-[300px] bg-black/40 border border-[#39FF14]/20 rounded-lg px-4 py-2 
                         text-white focus:outline-none focus:border-[#39FF14]/50 
                         focus:ring-1 focus:ring-[#39FF14]/50"
              />
              <select
                className="bg-black/40 border border-[#39FF14]/20 rounded-lg px-4 py-2 
                         text-white focus:outline-none focus:border-[#39FF14]/50 
                         focus:ring-1 focus:ring-[#39FF14]/50"
              >
                <option value="">All Categories</option>
                <option value="quantum">Quantum Computing</option>
                <option value="ai">Artificial Intelligence</option>
                <option value="biotech">Biotechnology</option>
              </select>
            </div>

            {/* Papers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Paper Card */}
              {[1, 2, 3].map((paper) => (
                <div key={paper} className="bg-black/40 backdrop-blur-md border border-[#39FF14]/20 rounded-xl p-6 
                                         hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-[#39FF14] text-xl font-medium">
                      Quantum Neural Networks
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-[#39FF14]/10 text-[#39FF14] text-sm">
                      5 SOL
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    A comprehensive study on implementing quantum computing principles in neural network architectures...
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                    <span>By Dr. Sarah Connor</span>
                    <span>Published: Mar 2024</span>
                  </div>
                  <button className="w-full bg-[#39FF14]/10 border border-[#39FF14]/20 
                                   text-[#39FF14] py-2 rounded-lg hover:bg-[#39FF14]/20 
                                   transition-all duration-300">
                    Purchase Paper
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Purchased Papers Section */}
        {activeTab === 'purchased' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Purchased Paper Card */}
              {[1, 2].map((paper) => (
                <div key={paper} className="bg-black/40 backdrop-blur-md border border-[#39FF14]/20 rounded-xl p-6">
                  <h3 className="text-[#39FF14] text-xl font-medium mb-2">
                    Advanced AI Algorithms
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Purchased: March 15, 2024
                  </p>
                  <div className="flex gap-4">
                    <button className="flex-1 bg-[#39FF14]/10 border border-[#39FF14]/20 
                                     text-[#39FF14] py-2 rounded-lg hover:bg-[#39FF14]/20 
                                     transition-all duration-300">
                      Download PDF
                    </button>
                    <button className="flex-1 bg-[#39FF14]/10 border border-[#39FF14]/20 
                                     text-[#39FF14] py-2 rounded-lg hover:bg-[#39FF14]/20 
                                     transition-all duration-300">
                      View Online
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fundraising Section */}
        {activeTab === 'fundraising' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.map((project) => (
              <div key={project.id} 
                className="bg-black/40 backdrop-blur-md border border-[#39FF14]/20 rounded-xl p-6 
                          hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] transition-all duration-300">
                <h3 className="text-[#39FF14] text-xl font-medium mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex-1 h-2 bg-black/40 rounded-full">
                    <div 
                      className="h-full bg-[#39FF14] rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="text-[#39FF14] text-sm">{project.progress}%</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                  <span>By {project.initiator}</span>
                </div>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-[#39FF14]/10 border border-[#39FF14]/20 
                           text-[#39FF14] py-2 rounded-lg hover:bg-[#39FF14]/20 
                           transition-all duration-300"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-black/90 border border-[#39FF14]/20 rounded-xl p-8 max-w-6xl w-full mx-4 relative">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-[#39FF14] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Side - Flask and Donate */}
                <div className="flex-1 flex flex-col items-center justify-center min-w-[500px]">
                  <div className="w-full">
                    <FlaskProgress current={selectedProject.raised} target={selectedProject.target} />
                  </div>
                  <button className="w-full max-w-[300px] mt-6 bg-[#39FF14]/10 border-2 border-[#39FF14] 
                                   text-[#39FF14] py-3 rounded-xl hover:bg-[#39FF14]/20 
                                   transition-all duration-300 text-lg font-medium">
                    Donate to Project
                  </button>
                </div>

                {/* Right Side - Project Details */}
                <div className="flex-1 min-w-[400px] space-y-6">
                  <h2 className="text-3xl text-[#39FF14] font-medium mb-6">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <div className="space-y-4 border-t border-[#39FF14]/20 pt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Target Amount</span>
                      <span className="text-[#39FF14] text-lg">{selectedProject.target} SOL</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Raised</span>
                      <span className="text-[#39FF14] text-lg">{selectedProject.raised} SOL</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Time Left</span>
                      <span className="text-[#39FF14] text-lg">{selectedProject.timeLeft}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Institution</span>
                      <span className="text-white text-lg">{selectedProject.institution}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Category</span>
                      <span className="text-white text-lg">{selectedProject.category}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Team Size</span>
                      <span className="text-white text-lg">{selectedProject.teamSize} researchers</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Expected Duration</span>
                      <span className="text-white text-lg">{selectedProject.expectedDuration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPage; 