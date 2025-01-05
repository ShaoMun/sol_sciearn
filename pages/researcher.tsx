import React, { useState } from 'react';
// import { FlaskProgress } from '../components/FlaskProgress';
import { SubmissionStatus } from '../components/SubmissionStatus';

const ResearcherPage = () => {
  const [activeTab, setActiveTab] = useState('submit');
  const [showStatus, setShowStatus] = useState(false);
  const [paperTab, setPaperTab] = useState('Under Review');
  const [expandedPaper, setExpandedPaper] = useState<number | null>(null);
  const [expandedCampaign, setExpandedCampaign] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowStatus(true);
  };

  const handleTrackSubmission = () => {
    setActiveTab('track');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#001E1B] to-black" />
        
        {/* Grid Pattern with Wave Effect */}
        <div className="absolute inset-0">
          {/* Base Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(20,255,229,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(20,255,229,0.075)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          {/* Animated Wave Overlay */}
          <div className="absolute inset-0 grid-wave-overlay" />
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#14FFE5]/5 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#14FFE5]/5 rounded-full filter blur-[100px] animate-pulse delay-1000" />
        
        {/* Animated lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-[10%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#14FFE5] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '0s' }} />
          <div className="absolute left-[20%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#14FFE5] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
          <div className="absolute left-[30%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#14FFE5] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
          <div className="absolute left-[40%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#14FFE5] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '3s' }} />
          <div className="absolute left-[50%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#14FFE5] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '4s' }} />
          <div className="absolute left-[60%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#14FFE5] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '5s' }} />
          <div className="absolute left-[70%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#14FFE5] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '6s' }} />
          <div className="absolute left-[80%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#14FFE5] to-transparent animate-[moveLines_8s_ease-in-out_infinite]" style={{ animationDelay: '7s' }} />
        </div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="relative z-10 flex flex-wrap gap-6 mb-8 p-4 glassmorphism rounded-xl">
          {['submit', 'track', 'fundraising'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                relative px-4 py-2 text-lg transition-all duration-300
                ${activeTab === tab 
                  ? 'text-[#39FF14] font-medium' 
                  : 'text-gray-400 hover:text-[#39FF14]'
                }
              `}
            >
              {/* Glowing underline for active tab */}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#39FF14] shadow-[0_0_10px_#39FF14]" />
              )}
              {tab === 'submit' ? 'Submit Paper' : 
               tab === 'track' ? 'Dashboard' : 
               'Fundraising Campaign'}
            </button>
          ))}
        </nav>

        {/* Submit Paper Section */}
        {activeTab === 'submit' && (
          <div className="max-w-3xl mx-auto">
            <div className="glassmorphism neon-shadow rounded-xl p-6 transition-all duration-300
                        hover:scale-[1.01] hover:bg-opacity-80">
              <h2 className="text-3xl text-[#39FF14] text-center mb-9 font-medium">Submit New Paper</h2>
              
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Paper Details Section */}
                <div className="space-y-6">
                  <h3 className="text-xl text-[#39FF14]/80 font-medium pb-2 border-b border-[#39FF14]/20">
                    Paper Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Title</label>
                      <input
                        type="text"
                        className="w-full glassmorphism rounded-lg px-4 py-3 
                                 text-white focus:outline-none border border-[#00E5FF]/20
                                 focus:border-[#00E5FF]/50 focus:neon-shadow
                                 transition-all duration-300"
                        placeholder="Enter paper title"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Category</label>
                      <select
                        className="w-full glassmorphism rounded-lg px-4 py-3 
                                 text-white focus:outline-none border border-[#00E5FF]/20
                                 focus:border-[#00E5FF]/50 focus:neon-shadow
                                 transition-all duration-300"
                      >
                        <option value="">Select category</option>
                        <option value="quantum">Quantum Computing</option>
                        <option value="ai">Artificial Intelligence</option>
                        <option value="biotech">Biotechnology</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Abstract</label>
                    <textarea
                      className="w-full glassmorphism rounded-lg px-4 py-3 
                               text-white focus:outline-none border border-[#00E5FF]/20
                               focus:border-[#00E5FF]/50 focus:neon-shadow
                               transition-all duration-300 h-32"
                      placeholder="Provide a brief abstract of your research"
                    />
                  </div>
                </div>


                {/* File Upload Section */}
                <div className="space-y-6">
                  <h3 className="text-xl text-[#39FF14]/80 font-medium pb-2 border-b border-[#39FF14]/20">
                    Upload Paper
                  </h3>
                  
                  <div className="border-2 border-dashed border-[#39FF14]/20 rounded-xl p-8 text-center">
                    <input type="file" className="hidden" id="paper-upload" />
                    <label 
                      htmlFor="paper-upload"
                      className="cursor-pointer flex flex-col items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#39FF14]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#39FF14] font-medium">Click to upload your paper</p>
                        <p className="text-gray-400 text-sm mt-1">PDF format, max 10MB</p>
                      </div>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full max-w-md mx-auto block 
                           bg-gradient-to-r from-[#4B3F72] via-[#5A8F8B] to-[#6FAF9D] 
                           hover:from-[#5C4F82] hover:via-[#6A9F9B] hover:to-[#7FBFAE]
                           text-white font-medium
                           px-6 py-3 rounded-xl
                           transition-all duration-300 group relative overflow-hidden
                           shadow-[0_0_10px_rgba(90,143,139,0.2)]
                           hover:shadow-[0_0_15px_rgba(90,143,139,0.3)]">
                  <span className="relative z-10">Submit Paper</span>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Track Submissions Section (Dashboard) */}
        {activeTab === 'track' && (
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="glassmorphism rounded-xl p-6 hover:bg-opacity-80 transition-all duration-300">
                <h4 className="text-gray-400 text-sm">Total Papers</h4>
                <div className="text-3xl bg-gradient-to-r from-[#00E5FF] to-[#39FF14] bg-clip-text text-transparent font-medium mt-2">
                  12
                </div>
              </div>
              <div className="glassmorphism rounded-xl p-6 hover:bg-opacity-80 transition-all duration-300">
                <h4 className="text-gray-400 text-sm">Published Papers</h4>
                <div className="text-3xl bg-gradient-to-r from-[#00E5FF] to-[#39FF14] bg-clip-text text-transparent font-medium mt-2">
                  8
                </div>
              </div>
              <div className="glassmorphism rounded-xl p-6 hover:bg-opacity-80 transition-all duration-300">
                <h4 className="text-gray-400 text-sm">Total Sales</h4>
                <div className="text-3xl bg-gradient-to-r from-[#00E5FF] to-[#39FF14] bg-clip-text text-transparent font-medium mt-2">
                  156
                </div>
              </div>
              <div className="glassmorphism rounded-xl p-6 hover:bg-opacity-80 transition-all duration-300">
                <h4 className="text-gray-400 text-sm">Total Earnings</h4>
                <div className="text-3xl bg-gradient-to-r from-[#00E5FF] to-[#39FF14] bg-clip-text text-transparent font-medium mt-2">
                  780 SOL
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Papers Section with Tabs */}
              <div className="glassmorphism neon-shadow rounded-xl p-6 transition-all duration-300
                          hover:scale-[1.01] hover:bg-opacity-80">
                <div className="flex gap-6 mb-6 border-b border-white/10">
                  {['Under Review', 'Published'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setPaperTab(tab)}
                      className={`relative pb-3 text-sm font-medium transition-colors
                        ${paperTab === tab 
                          ? (tab === 'Under Review' ? 'text-[#A78BFA]' : 'text-[#00E5FF]')
                          : 'text-gray-400 hover:text-white'}`}
                    >
                      {paperTab === tab && (
                        <span className={`absolute bottom-0 left-0 w-full h-0.5 
                          ${tab === 'Under Review' ? 'bg-[#A78BFA]' : 'bg-[#00E5FF]'}`} />
                      )}
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  {paperTab === 'Under Review' ? (
                    // Under Review Papers
                    [...Array(3)].map((_, i) => (
                      <div key={i} className="border border-[#A78BFA]/20 rounded-lg p-4 bg-gradient-to-r 
                                             from-[#A78BFA]/5 to-transparent backdrop-blur-sm
                                             hover:from-[#A78BFA]/10 hover:border-[#A78BFA]/30 
                                             transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-[#A78BFA] font-medium">
                              {[
                                "Quantum Entanglement in Neural Networks",
                                "Blockchain-based Scientific Verification",
                                "AI-Driven Drug Discovery Protocol"
                              ][i]}
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">
                              Submitted: {["March 1, 2024", "March 5, 2024", "March 8, 2024"][i]}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Review Progress</span>
                            <span className="text-[#A78BFA]">{["2/3", "1/3", "3/3"][i]} Reviews</span>
                          </div>
                          <div className="w-full bg-black/40 rounded-full h-1.5">
                            <div className="bg-[#A78BFA] h-1.5 rounded-full" 
                                 style={{ width: [`66%`, `33%`, `100%`][i] }} />
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    // Published Papers
                    [...Array(3)].map((_, i) => (
                      <div key={i} className="border border-[#00E5FF]/20 rounded-lg p-4 space-y-4
                                             bg-gradient-to-br from-[#00E5FF]/5 via-transparent to-[#00E5FF]/5
                                             hover:from-[#00E5FF]/10 hover:to-[#00E5FF]/10 hover:border-[#00E5FF]/30
                                             transition-all duration-300">
                        {/* Header */}
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-[#00E5FF] font-medium">
                              {[
                                "Advanced AI Algorithms for Quantum Systems",
                                "Sustainable Energy Distribution Networks",
                                "Machine Learning in Healthcare"
                              ][i]}
                            </h3>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="text-gray-400 text-sm">
                                Published: {["Feb 15, 2024", "Feb 20, 2024", "March 1, 2024"][i]}
                              </span>
                              <span className="text-[#00E5FF] text-sm font-medium">
                                {[5, 4, 6][i]} SOL
                              </span>
                            </div>
                          </div>
                          <button 
                            onClick={() => setExpandedPaper(expandedPaper === i ? null : i)}
                            className="text-[#00E5FF] hover:text-[#00E5FF]/80 transition-colors p-1"
                          >
                            <svg className={`w-5 h-5 transform transition-transform ${expandedPaper === i ? 'rotate-180' : ''}`} 
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-[#00E5FF]/5 rounded-lg p-3 text-center border border-[#00E5FF]/10">
                            <div className="text-[#00E5FF] text-lg font-medium">{[48, 32, 25][i]}</div>
                            <div className="text-gray-400 text-xs">Total Sales</div>
                          </div>
                          <div className="bg-[#00E5FF]/5 rounded-lg p-3 text-center border border-[#00E5FF]/10">
                            <div className="text-[#00E5FF] text-lg font-medium">{[240, 128, 150][i]}</div>
                            <div className="text-gray-400 text-xs">SOL Earned</div>
                          </div>
                          <div className="bg-[#00E5FF]/5 rounded-lg p-3 text-center border border-[#00E5FF]/10">
                            <div className="text-[#00E5FF] text-lg font-medium">{["2h", "1d", "4h"][i]}</div>
                            <div className="text-gray-400 text-xs">Last Sale</div>
                          </div>
                        </div>

                        {/* Expanded Details - Only Monthly Sales */}
                        {expandedPaper === i && (
                          <div className="mt-4">
                            <div className="bg-[#00E5FF]/5 rounded-lg p-4 border border-[#00E5FF]/10">
                              <div className="flex justify-between items-center mb-6">
                                <div>
                                  <h4 className="text-[#00E5FF] font-medium">Monthly Sales</h4>
                                  <p className="text-gray-400 text-sm mt-1">Last 12 months performance</p>
                                </div>
                                <span className="text-[#00E5FF] text-sm font-medium">+12% from last month</span>
                              </div>
                              
                              <div className="relative h-[200px]">
                                {/* Grid lines */}
                                <div className="absolute inset-0 flex flex-col justify-between">
                                  {[...Array(5)].map((_, i) => (
                                    <div key={i} className="border-b border-[#00E5FF]/10 w-full h-0" />
                                  ))}
                                </div>

                                {/* Bars Container */}
                                <div className="absolute inset-0 flex items-end justify-between gap-2 pt-6">
                                  {[
                                    { month: 'Jan', value: 35 },
                                    { month: 'Feb', value: 28 },
                                    { month: 'Mar', value: 45 },
                                    { month: 'Apr', value: 32 },
                                    { month: 'May', value: 48 },
                                    { month: 'Jun', value: 40 },
                                    { month: 'Jul', value: 55 },
                                    { month: 'Aug', value: 42 },
                                    { month: 'Sep', value: 38 },
                                    { month: 'Oct', value: 50 },
                                    { month: 'Nov', value: 45 },
                                    { month: 'Dec', value: 60 }
                                  ].map((data, idx) => (
                                    <div key={idx} className="flex-1 flex flex-col items-center group">
                                      {/* Bar */}
                                      <div className="relative w-full">
                                        <div 
                                          className="w-full bg-[#00E5FF] hover:bg-[#00E5FF]/80 
                                                   transition-colors rounded-t cursor-pointer"
                                          style={{ height: `${data.value * 1.5}px` }}
                                        >
                                          {/* Tooltip */}
                                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 
                                                       bg-black/90 text-[#00E5FF] text-sm px-2 py-1 rounded
                                                       opacity-0 group-hover:opacity-100 transition-opacity
                                                       whitespace-nowrap pointer-events-none">
                                            {data.value} sales
                                          </div>
                                        </div>
                                      </div>
                                      {/* Month Label */}
                                      <span className="text-xs text-gray-400 mt-2">{data.month}</span>
                                    </div>
                                  ))}
                                </div>

                                {/* Y-axis labels */}
                                <div className="absolute -left-6 inset-y-0 flex flex-col justify-between text-xs text-gray-400">
                                  {[60, 45, 30, 15, 0].map((value) => (
                                    <span key={value}>{value}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Active Campaigns Section */}
              <div className="glassmorphism neon-shadow rounded-xl p-6 transition-all duration-300
                          hover:scale-[1.01] hover:bg-opacity-80">
                <h2 className="text-xl text-[#FFB800] font-medium mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFB800]"></span>
                  Active Campaigns
                </h2>
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="border border-[#FFB800]/20 rounded-lg p-4
                                           bg-gradient-to-r from-[#FFB800]/5 to-transparent
                                           hover:from-[#FFB800]/10 hover:border-[#FFB800]/30
                                           transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div className="relative">
                          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 
                                        bg-gradient-to-b from-[#FFB800] to-transparent rounded-full" />
                          <h3 className="text-[#FFB800] font-medium pl-2">
                            {[
                              "Advanced Quantum Computing Research",
                              "Sustainable Energy Solutions",
                              "AI in Medical Diagnostics"
                            ][i]}
                          </h3>
                          <p className="text-gray-400 text-sm mt-1 pl-2">
                            {["45 days", "30 days", "60 days"][i]} remaining
                          </p>
                        </div>
                        <button 
                          onClick={() => setExpandedCampaign(expandedCampaign === i ? null : i)}
                          className="text-[#FFB800] hover:text-[#FFB800]/80 transition-colors"
                        >
                          <svg className={`w-6 h-6 transform transition-transform ${expandedCampaign === i ? 'rotate-180' : ''}`} 
                               fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-[#FFB800]">{[75, 45, 90][i]} SOL raised</span>
                        </div>
                        <div className="w-full bg-black/40 rounded-full h-1.5">
                          <div className="bg-[#FFB800] h-1.5 rounded-full" 
                               style={{ width: `${[75, 45, 90][i]}%` }} />
                        </div>
                      </div>

                      {/* Expanded Details */}
                      {expandedCampaign === i && (
                        <div className="mt-4 space-y-6">
                          {/* Contributors List */}
                          <div className="bg-[#FFB800]/5 rounded-lg p-4 border border-[#FFB800]/10">
                            <h4 className="text-[#FFB800] font-medium mb-4">Recent Contributors</h4>
                            <div className="space-y-3 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
                              {[...Array(8)].map((_, idx) => (
                                <div key={idx} 
                                     className="flex items-center justify-between p-2 rounded-lg bg-black/20
                                              hover:bg-black/30 transition-colors">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#FFB800]/10 flex items-center justify-center">
                                      <svg className="w-4 h-4 text-[#FFB800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                      </svg>
                                    </div>
                                    <div>
                                      <div className="text-sm text-gray-300">
                                        Wallet ...{['8h4k', '3m9p', '6f2j', '1l5n', '9t4r', '2w8q', '7v4n', '1p9m'][idx]}
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        {[
                                          '2 days ago', '5 days ago', '1 week ago', 
                                          '2 weeks ago', '3 weeks ago', '1 month ago',
                                          '1 month ago', '2 months ago'
                                        ][idx]}
                                      </div>
                                    </div>
                                  </div>
                                  <span className="text-[#FFB800] font-medium">
                                    {[15, 20, 10, 25, 5, 30, 12, 8][idx]} SOL
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fundraising Campaign Section */}
        {activeTab === 'fundraising' && (
          <div className="max-w-3xl mx-auto">
            <div className="glassmorphism neon-shadow rounded-xl p-6 transition-all duration-300
                        hover:scale-[1.01] hover:bg-opacity-80">
              <h2 className="text-3xl text-[#39FF14] text-center mb-9 font-medium">Create Fundraising Campaign</h2>
              
              <form className="space-y-8">
                {/* Campaign Details */}
                <div className="space-y-6">
                  <h3 className="text-xl text-[#39FF14]/80 font-medium pb-2 border-b border-[#39FF14]/20">
                    Campaign Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Campaign Title</label>
                      <input
                        type="text"
                        className="w-full glassmorphism rounded-lg px-4 py-3 
                                 text-white focus:outline-none border border-[#00E5FF]/20
                                 focus:border-[#00E5FF]/50 focus:neon-shadow
                                 transition-all duration-300"
                        placeholder="Enter campaign title"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Category</label>
                      <select
                        className="w-full glassmorphism rounded-lg px-4 py-3 
                                 text-white focus:outline-none border border-[#00E5FF]/20
                                 focus:border-[#00E5FF]/50 focus:neon-shadow
                                 transition-all duration-300"
                      >
                        <option value="">Select category</option>
                        <option value="quantum">Quantum Computing</option>
                        <option value="ai">Artificial Intelligence</option>
                        <option value="biotech">Biotechnology</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Campaign Description</label>
                    <textarea
                      className="w-full glassmorphism rounded-lg px-4 py-3 
                               text-white focus:outline-none border border-[#00E5FF]/20
                               focus:border-[#00E5FF]/50 focus:neon-shadow
                               transition-all duration-300 h-32"
                      placeholder="Describe your research goals and how the funding will be used"
                    />
                  </div>
                </div>

                {/* Funding Details */}
                <div className="space-y-6">
                  <h3 className="text-xl text-[#39FF14]/80 font-medium pb-2 border-b border-[#39FF14]/20">
                    Funding Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Target Amount</label>
                      <div className="relative">
                        <input
                          type="number"
                          className="w-full glassmorphism rounded-lg px-4 py-3 
                                   text-white focus:outline-none border border-[#00E5FF]/20
                                   focus:border-[#00E5FF]/50 focus:neon-shadow
                                   transition-all duration-300 pl-16"
                          placeholder="0.00"
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#39FF14]">
                          SOL
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Team Size</label>
                    <input
                      type="number"
                      className="w-full glassmorphism rounded-lg px-4 py-3 
                               text-white focus:outline-none border border-[#00E5FF]/20
                               focus:border-[#00E5FF]/50 focus:neon-shadow
                               transition-all duration-300"
                      placeholder="Number of researchers"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Institution</label>
                    <input
                      type="text"
                      className="w-full glassmorphism rounded-lg px-4 py-3 
                               text-white focus:outline-none border border-[#00E5FF]/20
                               focus:border-[#00E5FF]/50 focus:neon-shadow
                               transition-all duration-300"
                      placeholder="Your research institution"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full max-w-md mx-auto block 
                           bg-gradient-to-r from-[#4B3F72] via-[#5A8F8B] to-[#6FAF9D] 
                           hover:from-[#5C4F82] hover:via-[#6A9F9B] hover:to-[#7FBFAE]
                           text-white font-medium
                           px-6 py-3 rounded-xl
                           transition-all duration-300 group relative overflow-hidden
                           shadow-[0_0_10px_rgba(90,143,139,0.2)]
                           hover:shadow-[0_0_15px_rgba(90,143,139,0.3)]">
                  <span className="relative z-10">Create Campaign</span>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      <SubmissionStatus 
        isOpen={showStatus} 
        onClose={() => setShowStatus(false)}
        onTrack={handleTrackSubmission}
      />
    </div>
  );
};

export default ResearcherPage; 