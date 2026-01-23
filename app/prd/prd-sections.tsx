export function FeaturePrioritizationSection() {
  return (
    <section id="feature-prioritization" className="scroll-mt-8">
      <h2 className="text-3xl font-bold text-black dark:text-white mb-6">7. Feature Prioritization Matrix</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">7.1 Easy to Install, Low Risk, High Impact Features</h3>
          
          <div className="bg-green-50 dark:bg-green-950 border-2 border-green-500 rounded-lg p-6 mb-6">
            <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">TIER 1: MVP Must-Haves (Launch Blockers)</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-zinc-200 dark:border-zinc-800">
                <thead className="bg-zinc-100 dark:bg-zinc-900">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Feature</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Effort</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Risk</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Impact</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  <tr>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Basic voice recording</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">1 week</td>
                    <td className="px-4 py-3 text-sm"><span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Low</span></td>
                    <td className="px-4 py-3 text-sm font-semibold text-red-600 dark:text-red-400">Critical</td>
                    <td className="px-4 py-3 text-sm font-bold text-black dark:text-white">P0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Whisper base model integration</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">2 weeks</td>
                    <td className="px-4 py-3 text-sm"><span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Low</span></td>
                    <td className="px-4 py-3 text-sm font-semibold text-red-600 dark:text-red-400">Critical</td>
                    <td className="px-4 py-3 text-sm font-bold text-black dark:text-white">P0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Global hotkey (Ctrl+Shift+Space)</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">3 days</td>
                    <td className="px-4 py-3 text-sm"><span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs">Medium</span></td>
                    <td className="px-4 py-3 text-sm font-semibold text-red-600 dark:text-red-400">Critical</td>
                    <td className="px-4 py-3 text-sm font-bold text-black dark:text-white">P0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Auto-paste to active window</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">1 week</td>
                    <td className="px-4 py-3 text-sm"><span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs">Medium</span></td>
                    <td className="px-4 py-3 text-sm font-semibold text-red-600 dark:text-red-400">Critical</td>
                    <td className="px-4 py-3 text-sm font-bold text-black dark:text-white">P0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">System tray icon</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">2 days</td>
                    <td className="px-4 py-3 text-sm"><span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Low</span></td>
                    <td className="px-4 py-3 text-sm text-orange-600 dark:text-orange-400">High</td>
                    <td className="px-4 py-3 text-sm font-bold text-black dark:text-white">P0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Settings panel (basic)</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">1 week</td>
                    <td className="px-4 py-3 text-sm"><span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Low</span></td>
                    <td className="px-4 py-3 text-sm text-orange-600 dark:text-orange-400">High</td>
                    <td className="px-4 py-3 text-sm font-bold text-black dark:text-white">P0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">AppImage packaging</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">3 days</td>
                    <td className="px-4 py-3 text-sm"><span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Low</span></td>
                    <td className="px-4 py-3 text-sm font-semibold text-red-600 dark:text-red-400">Critical</td>
                    <td className="px-4 py-3 text-sm font-bold text-black dark:text-white">P0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white dark:bg-zinc-900 p-3 rounded">
                <div className="font-semibold text-zinc-700 dark:text-zinc-300">Total MVP Effort</div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">6 weeks</div>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-3 rounded">
                <div className="font-semibold text-zinc-700 dark:text-zinc-300">Total Risk</div>
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">Low-Medium</div>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-3 rounded">
                <div className="font-semibold text-zinc-700 dark:text-zinc-300">Launch Readiness</div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 border-2 border-blue-500 rounded-lg p-6 mb-6">
            <h4 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">TIER 2: Quick Wins (Post-Launch Week 1-4)</h4>
            <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <div className="flex justify-between p-3 bg-white dark:bg-zinc-900 rounded">
                <span>Model selection (tiny/base/small)</span>
                <span className="font-semibold">3 days • Low Risk • High Impact • P1</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-zinc-900 rounded">
                <span>Language selection</span>
                <span className="font-semibold">2 days • Low Risk • High Impact • P1</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-zinc-900 rounded">
                <span>Notification on completion</span>
                <span className="font-semibold">1 day • Low Risk • Medium Impact • P1</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-zinc-900 rounded">
                <span>Audio feedback (beep on start/stop)</span>
                <span className="font-semibold">1 day • Low Risk • Medium Impact • P1</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-zinc-900 rounded">
                <span>Keyboard shortcuts customization</span>
                <span className="font-semibold">3 days • Low Risk • High Impact • P1</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-zinc-900 rounded">
                <span>Dark/light theme toggle</span>
                <span className="font-semibold">2 days • Low Risk • Medium Impact • P1</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-zinc-900 rounded">
                <span>Auto-launch on startup</span>
                <span className="font-semibold">1 day • Low Risk • Medium Impact • P1</span>
              </div>
            </div>
            <div className="mt-4 bg-blue-100 dark:bg-blue-900 p-4 rounded">
              <div className="font-semibold text-blue-900 dark:text-blue-100">Impact: +40% user satisfaction</div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-950 border-2 border-purple-500 rounded-lg p-6">
            <h4 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">TIER 3: High Impact Features (Month 2-3)</h4>
            <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <div className="flex justify-between p-3 bg-white dark:bg-zinc-900 rounded">
                <span>Real-time transcription mode</span>
                <span className="font-semibold">2 weeks • Medium Risk • Very High Impact • P1</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-zinc-900 rounded">
                <span>Custom vocabulary</span>
                <span className="font-semibold">1 week • Low Risk • High Impact • P1</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-zinc-900 rounded">
                <span>Transcription history</span>
                <span className="font-semibold">1 week • Low Risk • High Impact • P1</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-zinc-900 rounded">
                <span>Export to file (txt, md, docx)</span>
                <span className="font-semibold">3 days • Low Risk • Medium Impact • P2</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-zinc-900 rounded">
                <span>Audio quality indicator</span>
                <span className="font-semibold">2 days • Low Risk • Medium Impact • P2</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-zinc-900 rounded">
                <span>Pause/resume recording</span>
                <span className="font-semibold">3 days • Low Risk • High Impact • P2</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-zinc-900 rounded">
                <span>Multi-language auto-detect</span>
                <span className="font-semibold">2 weeks • High Risk • Very High Impact • P1</span>
              </div>
            </div>
            <div className="mt-4 bg-purple-100 dark:bg-purple-900 p-4 rounded">
              <div className="font-semibold text-purple-900 dark:text-purple-100">Conversion Impact: +25%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RemainingPRDSections() {
  return (
    <>
      {/* 8. Technical Specifications */}
      <section id="technical-specs" className="scroll-mt-8">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-6">8. Technical Specifications</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">8.1 Functional Requirements</h3>
            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-semibold text-black dark:text-white mb-2">FR1: Audio Recording</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>FR1.1: Capture audio from default microphone</li>
                  <li>FR1.2: Support 16kHz, 16-bit PCM format</li>
                  <li>FR1.3: Visual indicator during recording</li>
                  <li>FR1.4: Maximum recording length: 5 minutes</li>
                  <li>FR1.5: Minimum recording length: 1 second</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white mb-2">FR2: Speech-to-Text</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>FR2.1: Process audio with Whisper model</li>
                  <li>FR2.2: Support base model minimum</li>
                  <li>FR2.3: Display progress indicator</li>
                  <li>FR2.4: Return transcribed text</li>
                  <li>FR2.5: Handle errors gracefully</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">8.2 Non-Functional Requirements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg">
                <h4 className="font-semibold text-black dark:text-white mb-2">NFR1: Performance</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Transcription latency &lt;2s for 30s audio</li>
                  <li>UI response time &lt;100ms</li>
                  <li>Memory usage &lt;500MB (base model)</li>
                  <li>CPU usage &lt;50% during transcription</li>
                </ul>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg">
                <h4 className="font-semibold text-black dark:text-white mb-2">NFR2: Security</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>No network requests (offline mode)</li>
                  <li>Local data storage only</li>
                  <li>No telemetry by default</li>
                  <li>Secure settings storage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Open Source vs Paid */}
      <section id="open-source" className="scroll-mt-8">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-6">9. Open Source vs Paid Components</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border-2 border-green-500">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Core Open Source (MIT License)</h3>
            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>✓ Electron framework</li>
              <li>✓ React UI components</li>
              <li>✓ Whisper.cpp integration</li>
              <li>✓ Basic hotkey support</li>
              <li>✓ AppImage packaging</li>
              <li>✓ Documentation</li>
            </ul>
            <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 rounded">
              <div className="font-semibold text-green-900 dark:text-green-100 text-sm">Benefits: Community contributions, faster bug fixes, trust & transparency</div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border-2 border-blue-500">
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Proprietary/Premium Features</h3>
            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>✓ Cloud sync</li>
              <li>✓ Advanced voice commands</li>
              <li>✓ Custom model training</li>
              <li>✓ Enterprise features</li>
              <li>✓ Priority support</li>
            </ul>
            <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900 rounded">
              <div className="font-semibold text-blue-900 dark:text-blue-100 text-sm">License key required • Commercial use allowed</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Go-to-Market Strategy */}
      <section id="gtm-strategy" className="scroll-mt-8">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-6">10. Go-to-Market Strategy</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">10.1 Launch Plan</h3>
            <div className="space-y-3">
              <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg">
                <h4 className="font-semibold text-black dark:text-white mb-2">Phase 1: Alpha (Week 1-4)</h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">Internal testing • 50 alpha testers • Core features only • Feedback collection</p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg">
                <h4 className="font-semibold text-black dark:text-white mb-2">Phase 2: Beta (Week 5-8)</h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">Public beta release • 500 beta testers • Feature complete • Bug fixes</p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg">
                <h4 className="font-semibold text-black dark:text-white mb-2">Phase 3: Launch (Week 9)</h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">AppImage release • GitHub release • Product Hunt launch • Press outreach</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">10.2 Marketing Channels</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-zinc-50 dark:bg-zinc-900 p-3 rounded flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <div className="font-semibold text-black dark:text-white">GitHub</div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">Open source repository</div>
                </div>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 p-3 rounded flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <div className="font-semibold text-black dark:text-white">Product Hunt</div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">Launch day</div>
                </div>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 p-3 rounded flex items-center gap-3">
                <span className="text-2xl">💬</span>
                <div>
                  <div className="font-semibold text-black dark:text-white">Reddit</div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">r/linux, r/opensource</div>
                </div>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 p-3 rounded flex items-center gap-3">
                <span className="text-2xl">📺</span>
                <div>
                  <div className="font-semibold text-black dark:text-white">YouTube</div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">Demo videos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Risk Management */}
      <section id="risk-management" className="scroll-mt-8">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-6">11. Risk Management</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">11.1 Technical Risks</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-zinc-200 dark:border-zinc-800">
                <thead className="bg-zinc-100 dark:bg-zinc-900">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Risk</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Probability</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Impact</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Mitigation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  <tr>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Whisper.cpp compatibility</td>
                    <td className="px-4 py-3 text-sm"><span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs">Medium</span></td>
                    <td className="px-4 py-3 text-sm"><span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">High</span></td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Pin version, extensive testing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Audio driver issues</td>
                    <td className="px-4 py-3 text-sm"><span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">High</span></td>
                    <td className="px-4 py-3 text-sm"><span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">High</span></td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Support multiple audio backends</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Performance on low-end hardware</td>
                    <td className="px-4 py-3 text-sm"><span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">High</span></td>
                    <td className="px-4 py-3 text-sm"><span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs">Medium</span></td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Optimize, offer tiny model</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">11.2 Business Risks</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-zinc-200 dark:border-zinc-800">
                <thead className="bg-zinc-100 dark:bg-zinc-900">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Risk</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Probability</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Impact</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Mitigation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  <tr>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Low adoption</td>
                    <td className="px-4 py-3 text-sm"><span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs">Medium</span></td>
                    <td className="px-4 py-3 text-sm"><span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">High</span></td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Strong marketing, free tier</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Monetization challenges</td>
                    <td className="px-4 py-3 text-sm"><span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs">Medium</span></td>
                    <td className="px-4 py-3 text-sm"><span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">High</span></td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Multiple revenue streams</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Success Criteria */}
      <section id="success-criteria" className="scroll-mt-8">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-6">12. Success Criteria</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border-2 border-green-500">
            <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-4">Launch Success</h3>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>✓ 5,000+ downloads in Week 1</li>
              <li>✓ &lt;5 critical bugs reported</li>
              <li>✓ 4.5+ star rating</li>
              <li>✓ Featured on Product Hunt</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border-2 border-blue-500">
            <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-4">Product-Market Fit</h3>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>✓ 60%+ DAU/MAU ratio</li>
              <li>✓ 70%+ 30-day retention</li>
              <li>✓ NPS score &gt;50</li>
              <li>✓ 10%+ conversion to Pro</li>
            </ul>
          </div>

          <div className="bg-purple-50 dark:bg-purple-950 p-6 rounded-lg border-2 border-purple-500">
            <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-4">Financial Success</h3>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>✓ Break-even by Month 6</li>
              <li>✓ $250K ARR by Year 1</li>
              <li>✓ 15% Pro conversion rate</li>
              <li>✓ &lt;$50 CAC</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 13. Timeline & Milestones */}
      <section id="timeline" className="scroll-mt-8">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-6">13. Timeline & Milestones</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">13.1 Development Timeline</h3>
            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="font-bold text-black dark:text-white">Month 1: MVP Development</div>
                  <ul className="text-sm text-zinc-700 dark:text-zinc-300 mt-2 space-y-1">
                    <li>• Week 1-2: Core architecture, audio recording</li>
                    <li>• Week 3: Whisper integration</li>
                    <li>• Week 4: UI, hotkeys, packaging</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="font-bold text-black dark:text-white">Month 2: Beta & Polish</div>
                  <ul className="text-sm text-zinc-700 dark:text-zinc-300 mt-2 space-y-1">
                    <li>• Week 5-6: Alpha testing, bug fixes</li>
                    <li>• Week 7: Beta release</li>
                    <li>• Week 8: Final polish</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="font-bold text-black dark:text-white">Month 3: Launch & Iterate</div>
                  <ul className="text-sm text-zinc-700 dark:text-zinc-300 mt-2 space-y-1">
                    <li>• Week 9: Public launch</li>
                    <li>• Week 10-11: Quick wins (Tier 2 features)</li>
                    <li>• Week 12: Tier 3 features start</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">13.2 Key Milestones</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-zinc-200 dark:border-zinc-800">
                <thead className="bg-zinc-100 dark:bg-zinc-900">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Milestone</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Target Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Success Criteria</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">MVP Complete</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Week 6</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">All P0 features done</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">Beta Launch</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Week 7</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">500 beta users</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">Public Launch</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Week 9</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">5K downloads</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">Product-Market Fit</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Month 3</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">60% DAU/MAU</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">Break-even</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Month 6</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Revenue &gt; Costs</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-950">
                    <td className="px-4 py-3 text-sm font-bold text-green-800 dark:text-green-200">Series A Ready</td>
                    <td className="px-4 py-3 text-sm font-bold text-green-800 dark:text-green-200">Month 12</td>
                    <td className="px-4 py-3 text-sm font-bold text-green-800 dark:text-green-200">$250K ARR</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Appendix */}
      <section id="appendix" className="scroll-mt-8">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-6">14. Appendix</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">14.1 Competitive Analysis</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-zinc-200 dark:border-zinc-800">
                <thead className="bg-zinc-100 dark:bg-zinc-900">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Competitor</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Price</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Offline</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Accuracy</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-black dark:text-white">Linux Support</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  <tr className="bg-green-50 dark:bg-green-950">
                    <td className="px-4 py-3 text-sm font-bold text-green-800 dark:text-green-200">Whispr Linux</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Free/$9.99</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">✅ Yes</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">95%+</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">✅ Native</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Talon Voice</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">$15/mo</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">✅ Yes</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">90%</td>
                    <td className="px-4 py-3 text-sm text-orange-600 dark:text-orange-400">⚠️ Limited</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Dragon NaturallySpeaking</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">$300</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">✅ Yes</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">95%</td>
                    <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400">❌ No</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Google Speech-to-Text</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">$0.006/15s</td>
                    <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400">❌ No</td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">95%</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">✅ API</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">14.2 User Personas</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg">
                <h4 className="font-bold text-black dark:text-white mb-2">Persona 1: Linux Developer</h4>
                <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
                  <li><strong>Age:</strong> 25-40</li>
                  <li><strong>Uses:</strong> Coding, documentation</li>
                  <li><strong>Pain:</strong> Typing fatigue, RSI</li>
                  <li><strong>Value:</strong> Speed, accuracy, privacy</li>
                </ul>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg">
                <h4 className="font-bold text-black dark:text-white mb-2">Persona 2: Content Creator</h4>
                <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
                  <li><strong>Age:</strong> 20-35</li>
                  <li><strong>Uses:</strong> Blog posts, scripts</li>
                  <li><strong>Pain:</strong> Slow typing, writer&apos;s block</li>
                  <li><strong>Value:</strong> Fast transcription, multi-language</li>
                </ul>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg">
                <h4 className="font-bold text-black dark:text-white mb-2">Persona 3: Accessibility User</h4>
                <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
                  <li><strong>Age:</strong> Any</li>
                  <li><strong>Uses:</strong> Daily computing</li>
                  <li><strong>Pain:</strong> Physical limitations</li>
                  <li><strong>Value:</strong> Hands-free operation, reliability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
