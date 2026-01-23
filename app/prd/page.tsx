import { FeaturePrioritizationSection, RemainingPRDSections } from './prd-sections';

export default function PRDPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <h1 className="text-5xl font-bold text-black dark:text-white mb-4">
            Product Requirements Document
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-2">
            Whispr Linux - AI-Powered Speech-to-Text Application
          </p>
          <div className="flex gap-4 text-sm text-zinc-500 dark:text-zinc-500">
            <span>Version: 1.0</span>
            <span>•</span>
            <span>Date: January 23, 2026</span>
            <span>•</span>
            <span>Status: Draft</span>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Table of Contents</h2>
          <ol className="space-y-2 text-zinc-700 dark:text-zinc-300">
            <li><a href="#executive-summary" className="hover:text-blue-600 dark:hover:text-blue-400">1. Executive Summary</a></li>
            <li><a href="#product-overview" className="hover:text-blue-600 dark:hover:text-blue-400">2. Product Overview</a></li>
            <li><a href="#technical-architecture" className="hover:text-blue-600 dark:hover:text-blue-400">3. Technical Architecture</a></li>
            <li><a href="#dependencies" className="hover:text-blue-600 dark:hover:text-blue-400">4. Dependencies Analysis</a></li>
            <li><a href="#cost-roi" className="hover:text-blue-600 dark:hover:text-blue-400">5. Cost Analysis & ROI</a></li>
            <li><a href="#wow-features" className="hover:text-blue-600 dark:hover:text-blue-400">6. WOW Features</a></li>
            <li><a href="#feature-prioritization" className="hover:text-blue-600 dark:hover:text-blue-400">7. Feature Prioritization Matrix</a></li>
            <li><a href="#technical-specs" className="hover:text-blue-600 dark:hover:text-blue-400">8. Technical Specifications</a></li>
            <li><a href="#open-source" className="hover:text-blue-600 dark:hover:text-blue-400">9. Open Source vs Paid Components</a></li>
            <li><a href="#gtm-strategy" className="hover:text-blue-600 dark:hover:text-blue-400">10. Go-to-Market Strategy</a></li>
            <li><a href="#risk-management" className="hover:text-blue-600 dark:hover:text-blue-400">11. Risk Management</a></li>
            <li><a href="#success-criteria" className="hover:text-blue-600 dark:hover:text-blue-400">12. Success Criteria</a></li>
            <li><a href="#timeline" className="hover:text-blue-600 dark:hover:text-blue-400">13. Timeline & Milestones</a></li>
            <li><a href="#appendix" className="hover:text-blue-600 dark:hover:text-blue-400">14. Appendix</a></li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="space-y-16">
          
          {/* 1. Executive Summary */}
          <section id="executive-summary" className="scroll-mt-8">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">1. Executive Summary</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">1.1 Product Vision</h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Whispr Linux is a privacy-first, offline speech-to-text desktop application for Linux systems that enables 
                  seamless voice-to-text transcription across any application. Built on OpenAI&apos;s Whisper model, it provides 
                  enterprise-grade accuracy while maintaining complete data privacy through local processing.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">1.2 Target Market</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
                  <li><strong>Primary</strong>: Linux developers, content creators, accessibility users</li>
                  <li><strong>Secondary</strong>: Enterprise users requiring offline STT, privacy-conscious professionals</li>
                  <li><strong>Market Size</strong>: 30M+ Linux desktop users globally</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">1.3 Business Objectives</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
                  <li>Capture 5% of Linux STT market in Year 1 (1.5M users)</li>
                  <li>Achieve 15% conversion to premium features</li>
                  <li>Generate $2.5M ARR by end of Year 1</li>
                  <li>Establish as #1 offline STT solution for Linux</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Product Overview */}
          <section id="product-overview" className="scroll-mt-8">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">2. Product Overview</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">2.1 Core Value Proposition</h3>
                <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-6 rounded">
                  <p className="text-xl font-semibold text-blue-900 dark:text-blue-100">
                    &quot;Professional-grade speech-to-text that respects your privacy and works everywhere on Linux&quot;
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">2.2 Key Differentiators</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🔒</div>
                    <h4 className="font-semibold text-black dark:text-white mb-1">100% Offline</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">No data leaves your machine</p>
                  </div>
                  <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg">
                    <div className="text-2xl mb-2">⚡</div>
                    <h4 className="font-semibold text-black dark:text-white mb-1">System-Wide</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Works in any application</p>
                  </div>
                  <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🎤</div>
                    <h4 className="font-semibold text-black dark:text-white mb-1">High Accuracy</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">95%+ accuracy with Whisper</p>
                  </div>
                  <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🚀</div>
                    <h4 className="font-semibold text-black dark:text-white mb-1">Zero Latency</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Local processing eliminates delays</p>
                  </div>
                  <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🌐</div>
                    <h4 className="font-semibold text-black dark:text-white mb-1">Multi-Language</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">99+ languages supported</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">2.3 Success Metrics</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-zinc-200 dark:border-zinc-800">
                    <thead className="bg-zinc-100 dark:bg-zinc-900">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Metric</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Target</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Adoption</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">100K downloads in first 3 months</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Engagement</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">60% DAU/MAU ratio</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Accuracy</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">&gt;95% transcription accuracy</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Performance</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">&lt;2s latency for 30s audio clips</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Retention</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">70% 30-day retention rate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Technical Architecture */}
          <section id="technical-architecture" className="scroll-mt-8">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">3. Technical Architecture</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">3.1 Technology Stack</h3>
                
                <h4 className="text-xl font-semibold text-black dark:text-white mb-3 mt-4">Core Framework</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-zinc-200 dark:border-zinc-800">
                    <thead className="bg-zinc-100 dark:bg-zinc-900">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Component</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Technology</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">License</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Desktop Framework</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Electron 28+</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">MIT</td>
                        <td className="px-4 py-3 text-sm font-semibold text-green-600 dark:text-green-400">Free</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Frontend</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">React 18+</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">MIT</td>
                        <td className="px-4 py-3 text-sm font-semibold text-green-600 dark:text-green-400">Free</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Language</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">TypeScript 5+</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Apache 2.0</td>
                        <td className="px-4 py-3 text-sm font-semibold text-green-600 dark:text-green-400">Free</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Styling</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Tailwind CSS 4+</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">MIT</td>
                        <td className="px-4 py-3 text-sm font-semibold text-green-600 dark:text-green-400">Free</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-xl font-semibold text-black dark:text-white mb-3 mt-6">STT Engine Options</h4>
                
                <div className="space-y-4">
                  <div className="border-2 border-green-500 bg-green-50 dark:bg-green-950 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-bold text-green-700 dark:text-green-300">Option A: Whisper.cpp</span>
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">RECOMMENDED</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-zinc-700 dark:text-zinc-300">License</div>
                        <div className="text-zinc-600 dark:text-zinc-400">MIT (Open Source)</div>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-700 dark:text-zinc-300">Cost</div>
                        <div className="text-green-600 dark:text-green-400 font-bold">$0</div>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-700 dark:text-zinc-300">Performance</div>
                        <div className="text-zinc-600 dark:text-zinc-400">2-5x faster than Python</div>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-700 dark:text-zinc-300">Accuracy</div>
                        <div className="text-zinc-600 dark:text-zinc-400">95-98%</div>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-green-700 dark:text-green-300">Pros:</span>
                        <span className="text-zinc-600 dark:text-zinc-400"> Free, fast, offline, privacy-first</span>
                      </div>
                      <div>
                        <span className="font-semibold text-red-700 dark:text-red-300">Cons:</span>
                        <span className="text-zinc-600 dark:text-zinc-400"> Requires local compute, larger app size</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-zinc-300 dark:border-zinc-700 rounded-lg p-4">
                    <div className="text-lg font-bold text-zinc-700 dark:text-zinc-300 mb-2">Option B: Deepgram API</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-zinc-700 dark:text-zinc-300">Type</div>
                        <div className="text-zinc-600 dark:text-zinc-400">Cloud API</div>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-700 dark:text-zinc-300">Cost</div>
                        <div className="text-orange-600 dark:text-orange-400 font-bold">$0.26/hour</div>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-700 dark:text-zinc-300">Performance</div>
                        <div className="text-zinc-600 dark:text-zinc-400">&lt;300ms latency</div>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-700 dark:text-zinc-300">Accuracy</div>
                        <div className="text-zinc-600 dark:text-zinc-400">95-97%</div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-zinc-300 dark:border-zinc-700 rounded-lg p-4">
                    <div className="text-lg font-bold text-zinc-700 dark:text-zinc-300 mb-2">Option C: Google Cloud Speech-to-Text</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-zinc-700 dark:text-zinc-300">Type</div>
                        <div className="text-zinc-600 dark:text-zinc-400">Cloud API</div>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-700 dark:text-zinc-300">Cost</div>
                        <div className="text-red-600 dark:text-red-400 font-bold">$1.44/hour</div>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-700 dark:text-zinc-300">Performance</div>
                        <div className="text-zinc-600 dark:text-zinc-400">&lt;500ms latency</div>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-700 dark:text-zinc-300">Accuracy</div>
                        <div className="text-zinc-600 dark:text-zinc-400">94-96%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">3.2 System Requirements</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Minimum Requirements</h4>
                    <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <li><strong>OS:</strong> Ubuntu 20.04+, Fedora 35+, Arch Linux</li>
                      <li><strong>CPU:</strong> Dual-core 2.0GHz</li>
                      <li><strong>RAM:</strong> 4GB</li>
                      <li><strong>Storage:</strong> 2GB free space</li>
                      <li><strong>Audio:</strong> ALSA or PulseAudio</li>
                    </ul>
                  </div>

                  <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Recommended Requirements</h4>
                    <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <li><strong>CPU:</strong> Quad-core 3.0GHz</li>
                      <li><strong>RAM:</strong> 8GB</li>
                      <li><strong>GPU:</strong> Optional (CUDA for acceleration)</li>
                      <li><strong>Storage:</strong> 5GB SSD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Dependencies Analysis */}
          <section id="dependencies" className="scroll-mt-8">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">4. Dependencies Analysis</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">4.1 Core Dependencies</h3>
                
                <div className="bg-zinc-900 dark:bg-zinc-950 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-green-400">
{`{
  "electron": "^28.0.0",           // Desktop framework
  "react": "^18.2.0",              // UI framework
  "react-dom": "^18.2.0",          // React DOM
  "whisper-node": "^1.0.0",        // Whisper.cpp bindings
  "node-record-lpcm16": "^1.0.1",  // Audio recording
  "uiohook-napi": "^1.5.0",        // Global hotkeys
  "electron-store": "^8.1.0"       // Settings storage
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">4.2 Whisper Models</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-zinc-200 dark:border-zinc-800">
                    <thead className="bg-zinc-100 dark:bg-zinc-900">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Model</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Size</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">RAM</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Speed</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Accuracy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">tiny</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">75MB</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">1GB</td>
                        <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">Fastest</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Good</td>
                      </tr>
                      <tr className="bg-green-50 dark:bg-green-950">
                        <td className="px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">base</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">142MB</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">1GB</td>
                        <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">Fast</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Better ⭐</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">small</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">466MB</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">2GB</td>
                        <td className="px-4 py-3 text-sm text-orange-600 dark:text-orange-400">Medium</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Great</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">medium</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">1.5GB</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">5GB</td>
                        <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400">Slow</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Excellent</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">large</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">2.9GB</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">10GB</td>
                        <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400">Slowest</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Best</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">⭐ Default: Base model (best balance of size/accuracy)</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">4.3 Risk Assessment</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-zinc-200 dark:border-zinc-800">
                    <thead className="bg-zinc-100 dark:bg-zinc-900">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Dependency</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Risk Level</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Mitigation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Electron</td>
                        <td className="px-4 py-3 text-sm"><span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Low</span></td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Stable, widely used</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Whisper.cpp</td>
                        <td className="px-4 py-3 text-sm"><span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs">Medium</span></td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Pin version, extensive testing</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Audio drivers</td>
                        <td className="px-4 py-3 text-sm"><span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">High</span></td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Provide fallback options</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Cost Analysis & ROI */}
          <section id="cost-roi" className="scroll-mt-8">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">5. Cost Analysis & ROI</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">5.1 Development Costs</h3>
                
                <h4 className="text-xl font-semibold text-black dark:text-white mb-3 mt-4">Initial Development (3 months)</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-zinc-200 dark:border-zinc-800">
                    <thead className="bg-zinc-100 dark:bg-zinc-900">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Resource</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Cost</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Senior Developer (1)</td>
                        <td className="px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">$45,000</td>
                        <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">3 months @ $15k/month</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">UI/UX Designer (0.5)</td>
                        <td className="px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">$15,000</td>
                        <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">Part-time</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">QA Engineer (0.5)</td>
                        <td className="px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">$12,000</td>
                        <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">Part-time</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">DevOps/Infrastructure</td>
                        <td className="px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">$3,000</td>
                        <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">CI/CD, hosting</td>
                      </tr>
                      <tr className="bg-blue-50 dark:bg-blue-950">
                        <td className="px-4 py-3 text-sm font-bold text-black dark:text-white">Total MVP</td>
                        <td className="px-4 py-3 text-sm font-bold text-blue-600 dark:text-blue-400">$75,000</td>
                        <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-xl font-semibold text-black dark:text-white mb-3 mt-6">Ongoing Costs (Monthly)</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-zinc-200 dark:border-zinc-800">
                    <thead className="bg-zinc-100 dark:bg-zinc-900">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Item</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Cost</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Maintenance Developer</td>
                        <td className="px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">$10,000</td>
                        <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">Part-time</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Infrastructure</td>
                        <td className="px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">$500</td>
                        <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">Website, CDN, updates</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Support</td>
                        <td className="px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">$2,000</td>
                        <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">Community management</td>
                      </tr>
                      <tr className="bg-blue-50 dark:bg-blue-950">
                        <td className="px-4 py-3 text-sm font-bold text-black dark:text-white">Total Monthly</td>
                        <td className="px-4 py-3 text-sm font-bold text-blue-600 dark:text-blue-400">$12,500</td>
                        <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400"></td>
                      </tr>
                      <tr className="bg-blue-50 dark:bg-blue-950">
                        <td className="px-4 py-3 text-sm font-bold text-black dark:text-white">Annual</td>
                        <td className="px-4 py-3 text-sm font-bold text-blue-600 dark:text-blue-400">$150,000</td>
                        <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">5.2 Revenue Model</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg border-2 border-zinc-200 dark:border-zinc-800">
                    <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Free Tier</h4>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">$0</div>
                    <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <li>✓ Base Whisper model</li>
                      <li>✓ Basic hotkey support</li>
                      <li>✓ Single language at a time</li>
                      <li>✓ Community support</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border-2 border-blue-500">
                    <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Pro Tier</h4>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">$9.99/mo</div>
                    <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <li>✓ All Whisper models</li>
                      <li>✓ Custom vocabulary</li>
                      <li>✓ Multi-language detection</li>
                      <li>✓ Priority support</li>
                      <li>✓ Cloud sync</li>
                      <li>✓ Advanced hotkeys</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-950 p-6 rounded-lg border-2 border-purple-500">
                    <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Enterprise Tier</h4>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">$49/user/mo</div>
                    <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <li>✓ Everything in Pro</li>
                      <li>✓ SSO/SAML integration</li>
                      <li>✓ Centralized management</li>
                      <li>✓ Custom model training</li>
                      <li>✓ SLA support</li>
                      <li>✓ On-premise deployment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">5.3 Revenue Projections</h3>
                
                <h4 className="text-xl font-semibold text-black dark:text-white mb-3 mt-4">Year 1 Projections</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-zinc-200 dark:border-zinc-800">
                    <thead className="bg-zinc-100 dark:bg-zinc-900">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Metric</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Q1</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Q2</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Q3</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Q4</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Free Users</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">25K</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">75K</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">150K</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">250K</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Pro Users (15%)</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">375</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">1,125</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">2,250</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">3,750</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Enterprise Users</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">0</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">5</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">15</td>
                        <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">30</td>
                      </tr>
                      <tr className="bg-green-50 dark:bg-green-950">
                        <td className="px-4 py-3 text-sm font-bold text-black dark:text-white">Monthly Revenue</td>
                        <td className="px-4 py-3 text-sm font-bold text-green-600 dark:text-green-400">$3,750</td>
                        <td className="px-4 py-3 text-sm font-bold text-green-600 dark:text-green-400">$11,970</td>
                        <td className="px-4 py-3 text-sm font-bold text-green-600 dark:text-green-400">$24,960</td>
                        <td className="px-4 py-3 text-sm font-bold text-green-600 dark:text-green-400">$42,720</td>
                      </tr>
                      <tr className="bg-blue-50 dark:bg-blue-950">
                        <td className="px-4 py-3 text-sm font-bold text-black dark:text-white">Quarterly Revenue</td>
                        <td className="px-4 py-3 text-sm font-bold text-blue-600 dark:text-blue-400">$11,250</td>
                        <td className="px-4 py-3 text-sm font-bold text-blue-600 dark:text-blue-400">$35,910</td>
                        <td className="px-4 py-3 text-sm font-bold text-blue-600 dark:text-blue-400">$74,880</td>
                        <td className="px-4 py-3 text-sm font-bold text-blue-600 dark:text-blue-400">$128,160</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                    <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Year 1 Total Revenue</div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$250,200</div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
                    <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Year 1 Costs</div>
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">$225,000</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                    <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Year 1 Net</div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">$25,200</div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-black dark:text-white mb-3 mt-6">Year 2-3 Projections</h4>
                <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
                  <div className="flex justify-between p-3 bg-zinc-50 dark:bg-zinc-900 rounded">
                    <span><strong>Year 2:</strong> $850K revenue, $200K costs</span>
                    <span className="font-bold text-green-600 dark:text-green-400">$650K profit</span>
                  </div>
                  <div className="flex justify-between p-3 bg-zinc-50 dark:bg-zinc-900 rounded">
                    <span><strong>Year 3:</strong> $2.1M revenue, $250K costs</span>
                    <span className="font-bold text-green-600 dark:text-green-400">$1.85M profit</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">5.4 ROI Analysis</h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-purple-50 dark:bg-purple-950 p-6 rounded-lg text-center">
                    <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">Total Investment</div>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">$75K</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">MVP Development</div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg text-center">
                    <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">Break-even</div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">Month 6</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">Cumulative</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg text-center">
                    <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">12-month ROI</div>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">33%</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">Year 1</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg text-center">
                    <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">24-month ROI</div>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">1,067%</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">Year 2</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. WOW Features */}
          <section id="wow-features" className="scroll-mt-8">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">6. WOW Features 🚀</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">6.1 Killer Features</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">⚡</span>
                      <h4 className="text-xl font-bold text-black dark:text-white">1. Instant Transcription Mode</h4>
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-3">Real-time transcription as you speak. Live text appears in overlay window. Edit while speaking.</p>
                    <div className="bg-blue-200 dark:bg-blue-800 px-3 py-1 rounded text-sm font-semibold text-blue-900 dark:text-blue-100 inline-block">
                      Impact: 10x faster than typing
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">🧠</span>
                      <h4 className="text-xl font-bold text-black dark:text-white">2. Smart Context Awareness</h4>
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-3">Detects active application (IDE, browser, terminal). Auto-formats output. Learns your vocabulary and coding style.</p>
                    <div className="bg-purple-200 dark:bg-purple-800 px-3 py-1 rounded text-sm font-semibold text-purple-900 dark:text-purple-100 inline-block">
                      Impact: 95%+ accuracy for technical terms
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">🎤</span>
                      <h4 className="text-xl font-bold text-black dark:text-white">3. Voice Commands</h4>
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-3">&quot;New line&quot;, &quot;Delete that&quot;, &quot;Send message&quot;. Custom voice macros. Hands-free navigation.</p>
                    <div className="bg-green-200 dark:bg-green-800 px-3 py-1 rounded text-sm font-semibold text-green-900 dark:text-green-100 inline-block">
                      Impact: Complete keyboard-free workflow
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 p-6 rounded-lg border-2 border-orange-300 dark:border-orange-700">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">🌍</span>
                      <h4 className="text-xl font-bold text-black dark:text-white">4. Multi-Language Auto-Detection</h4>
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-3">Automatically detects language being spoken. Seamless switching mid-sentence. Supports code-switching.</p>
                    <div className="bg-orange-200 dark:bg-orange-800 px-3 py-1 rounded text-sm font-semibold text-orange-900 dark:text-orange-100 inline-block">
                      Impact: Perfect for multilingual users
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 p-6 rounded-lg border-2 border-red-300 dark:border-red-700">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">🔒</span>
                      <h4 className="text-xl font-bold text-black dark:text-white">5. Privacy Dashboard</h4>
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-3">Visual proof of offline processing. Zero telemetry mode. Local-only data storage.</p>
                    <div className="bg-red-200 dark:bg-red-800 px-3 py-1 rounded text-sm font-semibold text-red-900 dark:text-red-100 inline-block">
                      Impact: Trust & transparency
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 p-6 rounded-lg border-2 border-indigo-300 dark:border-indigo-700">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">🛍️</span>
                      <h4 className="text-xl font-bold text-black dark:text-white">6. Whisper Model Marketplace</h4>
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-3">Download fine-tuned models. Medical, legal, technical domains. Community-contributed models.</p>
                    <div className="bg-indigo-200 dark:bg-indigo-800 px-3 py-1 rounded text-sm font-semibold text-indigo-900 dark:text-indigo-100 inline-block">
                      Impact: Specialized accuracy for niches
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">6.2 Innovative Features</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">📑</span>
                      <h4 className="text-lg font-semibold text-black dark:text-white">7. Audio Bookmarks</h4>
                    </div>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">Save and replay audio snippets. Build personal voice library. Quick phrase insertion.</p>
                  </div>

                  <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">👥</span>
                      <h4 className="text-lg font-semibold text-black dark:text-white">8. Collaborative Transcription</h4>
                    </div>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">Share transcription sessions. Multi-user voice input. Meeting transcription mode.</p>
                  </div>

                  <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">♿</span>
                      <h4 className="text-lg font-semibold text-black dark:text-white">9. Accessibility Suite</h4>
                    </div>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">High contrast mode. Screen reader integration. Keyboard-only navigation.</p>
                  </div>

                  <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">💻</span>
                      <h4 className="text-lg font-semibold text-black dark:text-white">10. Developer Mode</h4>
                    </div>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">API for custom integrations. CLI interface. Webhook support.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Feature Prioritization Matrix */}
          <FeaturePrioritizationSection />

          {/* 8-14. Remaining Sections */}
          <RemainingPRDSections />

        </div>
      </div>
    </div>
  );
}
