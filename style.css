@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
    --bg-base: #090A0F; --bg-surface: #0D0F17;
    --border-light: rgba(255, 255, 255, 0.08);
    --accent-green: #10B981; --accent-red: #EF4444; --accent-indigo: #6366F1;
    --text-main: #F8FAFC; --text-muted: #94A3B8;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: var(--bg-base); color: var(--text-main); font-family: 'Inter', sans-serif; }

.navbar { display: flex; justify-content: space-between; padding: 1rem 2rem; background: rgba(9, 10, 15, 0.8); border-bottom: 1px solid var(--border-light); position: sticky; top: 0; z-index: 100;}
.logo { font-size: 1.25rem; font-weight: 600; }
.version { font-size: 0.75rem; background: var(--border-light); padding: 2px 8px; border-radius: 4px; color: var(--text-muted); }
.badge { background: var(--bg-surface); border: 1px solid rgba(16, 185, 129, 0.3); padding: 6px 12px; border-radius: 20px; font-size: 0.8rem; color: var(--accent-green); }

.container { max-width: 1200px; margin: 2rem auto; padding: 0 1.5rem; }
h2 { font-weight: 600; margin-bottom: 0.5rem; }
p { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem; }

.input-section { background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: 12px; padding: 2rem; }
textarea { width: 100%; height: 250px; background: var(--bg-base); border: 1px solid var(--border-light); border-radius: 8px; padding: 1rem; color: var(--text-main); font-family: 'JetBrains Mono', monospace; }
textarea:focus { outline: none; border-color: var(--accent-indigo); }

button { padding: 12px 24px; border-radius: 8px; font-weight: 500; cursor: pointer; transition: 0.2s; border: none; }
.primary-btn { background: var(--accent-indigo); color: white; }
.primary-btn:hover { background: #4f46e5; }
.secondary-btn { background: transparent; border: 1px solid var(--border-light); color: white; }
.action-row { margin-top: 1rem; text-align: right; }

.loading-section { text-align: center; padding: 5rem 0; }
.spinner { width: 48px; height: 48px; border: 3px solid var(--border-light); border-top: 3px solid var(--accent-indigo); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 1.5rem; }
@keyframes spin { 100% { transform: rotate(360deg); } }
.mono-text { font-family: 'JetBrains Mono', monospace; color: var(--accent-indigo); }

.dashboard { background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: 12px; }
.dashboard-header { display: flex; justify-content: space-between; padding: 1.5rem 2rem; border-bottom: 1px solid var(--border-light); }
.stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-bottom: 1px solid var(--border-light); }
.stat-card { padding: 1.5rem 2rem; border-right: 1px solid var(--border-light); }
.stat-title { display: block; color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase; margin-bottom: 0.5rem; }
.stat-value { font-size: 1.5rem; font-weight: 600; }
.text-green { color: var(--accent-green); }
.text-indigo { color: var(--accent-indigo); }
.pulse { animation: pulseGreen 2s infinite; }
@keyframes pulseGreen { 50% { opacity: 0.6; text-shadow: 0 0 10px rgba(16,185,129,0.5); } }

/* 🌟 New Assessment Timeline Styles */
.error-details { padding: 2rem; border-bottom: 1px solid var(--border-light); background: var(--bg-base); }
.assessment-title { font-size: 1rem; color: var(--text-muted); margin-bottom: 1.5rem; text-transform: uppercase; }
.timeline-container { display: flex; flex-direction: column; gap: 1rem; }
.assessment-step { display: flex; align-items: flex-start; gap: 1rem; background: var(--bg-surface); padding: 1rem; border: 1px solid var(--border-light); border-radius: 8px; border-left: 4px solid var(--accent-indigo); }
.step-badge { background: rgba(16,185,129,0.1); color: var(--accent-green); padding: 4px 8px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; font-weight: bold; white-space: nowrap; }
.step-info { flex-grow: 1; }
.step-title { font-weight: 600; color: #fff; margin-bottom: 4px; }
.step-desc { font-size: 0.9rem; color: var(--text-muted); }

/* Code Diff */
.code-diff { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border-light); }
.code-block { background: var(--bg-surface); }
.block-header { padding: 1rem; border-bottom: 1px solid var(--border-light); display: flex; align-items: center; gap: 10px; }
.block-header h3 { font-size: 0.85rem; color: var(--text-muted); }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot.red { background: var(--accent-red); } .dot.green { background: var(--accent-green); }
pre { padding: 1.5rem; overflow-x: auto; margin: 0;}
code { font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: #E2E8F0; white-space: pre-wrap; }

/* Deploy Button */
.deploy-section { padding: 1.5rem; text-align: right; background: var(--bg-base); border-top: 1px solid var(--border-light); }
.deploy-btn { background: var(--accent-green); color: #000; font-weight: 600; box-shadow: 0 4px 15px rgba(16,185,129,0.3); }
.deploy-btn:hover { background: #0ea5e9; color: white; transform: translateY(-2px); }

.toast { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: var(--accent-green); color: #000; padding: 15px 30px; border-radius: 50px; font-weight: 600; box-shadow: 0 10px 30px rgba(0,0,0,0.5); z-index: 1000; }
.hidden { display: none !important; }