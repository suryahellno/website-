const inputSection = document.getElementById('inputSection');
const loadingSection = document.getElementById('loadingSection');
const dashboardSection = document.getElementById('dashboardSection');
const codeInput = document.getElementById('codeInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const resetBtn = document.getElementById('resetBtn');
const dashErrorCount = document.getElementById('dashErrorCount');
const dashTime = document.getElementById('dashTime');
const assessmentTimeline = document.getElementById('assessmentTimeline');
const dashOriginalCode = document.getElementById('dashOriginalCode');
const dashFixedCode = document.getElementById('dashFixedCode');
const deployBtn = document.getElementById('deployBtn');
const toastNotification = document.getElementById('toastNotification');

// डेटाबेस (इसमें मैंने 429 वाला एरर भी डाल दिया है ताकि तेरे 5 एरर पूरे मैच हों)
const dbErrors = [
    { keyword: "500 internal", errorName: "API: 500 Internal Server Error", description: "Primary microservice unhandled exception.", solutionCode: "// ✅ AI Patched: Circuit breaker tripped\ncircuitBreaker.open();\nawait fallbackCache.serveStale();", timeTaken: "55ms" },
    { keyword: "429 too many requests", errorName: "API: 429 Too Many Requests", description: "Upstream API rate limit exceeded.", solutionCode: "// ✅ AI Patched: Exponential backoff\nawait queue.delay(req, Math.random() * 2000 + 1000);", timeTaken: "30ms" },
    { keyword: "401 unauthorized", errorName: "API: 401 Unauthorized", description: "Authentication token missing or expired.", solutionCode: "// ✅ AI Patched: Token rotation initiated\nconst newToken = await auth.refresh();\nreq.headers['Authorization'] = `Bearer ${newToken}`;", timeTaken: "210ms" },
    { keyword: "unauthorized access", errorName: "Security: Unauthorized Access", description: "Multiple failed login attempts.", solutionCode: "// ✅ AI Patched: IP Blocked & CAPTCHA enforced\nawait waf.blockIP(req.ip); enableCaptcha();", timeTaken: "35ms" },
    { keyword: "suspicious api request", errorName: "Security: Suspicious API Request", description: "Payload contains unusual patterns.", solutionCode: "// ✅ AI Patched: Request quarantined\nawait security.quarantine(req);", timeTaken: "48ms" },
    { keyword: "invalid json", errorName: "Data: Invalid JSON Format", description: "Malformed JSON string (trailing commas).", solutionCode: "// ✅ AI Patched: LLM JSON Healer\nconst fixedString = rawString.replace(/,\\s*}/g, '}');", timeTaken: "42ms" },
    { keyword: "missing required field", errorName: "Data: Missing Required Field", description: "Payload missing critical parameter.", solutionCode: "// ✅ AI Patched: Inferred missing data\npayload.customer_id = await crm.inferId(payload.email);", timeTaken: "185ms" },
    { keyword: "null or missing", errorName: "Data: Null or Missing Value", description: "Unexpected null pointer exception.", solutionCode: "// ✅ AI Patched: Null coalescing\nconst safeValue = targetObject ?? {};", timeTaken: "14ms" },
    { keyword: "memory exhaustion", errorName: "Resource: Memory Exhaustion", description: "Heap OOM Killed container.", solutionCode: "// ✅ AI Patched: Streams applied & GC forced\nglobal.gc(); stream.pipe(response);", timeTaken: "310ms" },
    { keyword: "cpu overload", errorName: "Resource: CPU Overload", description: "Node CPU > 95%.", solutionCode: "// ✅ AI Patched: HPA triggered\nawait k8s.scale('worker-node', { replicas: +2 });", timeTaken: "650ms" },
    { keyword: "task timeout", errorName: "Workflow: Task Timeout", description: "Background worker exceeded limits.", solutionCode: "// ✅ AI Patched: Re-queued high-compute\nawait queue.move(task.id, 'high-memory-node');", timeTaken: "85ms" },
    { keyword: "workflow step failure", errorName: "Workflow: Step Failure", description: "Microservice Saga pattern broke.", solutionCode: "// ✅ AI Patched: Compensating action\nawait inventoryService.restoreItems(items);", timeTaken: "390ms" },
    { keyword: "database connection failure", errorName: "Database: Connection Failure", description: "Primary database node unreachable.", solutionCode: "// ✅ AI Patched: Read-Replica Promoted\nconst db = await pool.switchTo('replica-region-b');", timeTaken: "510ms" },
    { keyword: "deadlock", errorName: "Database: Deadlock", description: "Transactions waiting on each other's locks.", solutionCode: "// ✅ AI Patched: Retry with Jitter\nawait sleep(Math.random() * 200); await retry();", timeTaken: "215ms" },
    { keyword: "recovery loop", errorName: "Meta: Recovery Loop", description: "System fixing the same error endlessly.", solutionCode: "// ✅ AI Patched: Loop breaker engaged\nif (healAttempts > 3) haltHealing();", timeTaken: "12ms" },
    { keyword: "retry exhaustion", errorName: "Meta: Retry Exhaustion", description: "AI tried to fix 5 times and stopped.", solutionCode: "// ✅ AI Patched: Passed to human engineer\nslack.notify('AI exhausted. Human review needed.');", timeTaken: "25ms" }
];

analyzeBtn.addEventListener('click', () => {
    const userInput = codeInput.value.trim().toLowerCase();
    if (!userInput) return alert('Please paste an error log to scan.');

    inputSection.classList.add('hidden');
    loadingSection.classList.remove('hidden');

    setTimeout(() => {
        let foundIncidents = [];
        
        // 🌟 अब ये सिर्फ वही एरर निकालेगा जो इनपुट में मौजूद होंगे
        dbErrors.forEach(error => {
            if (userInput.includes(error.keyword.toLowerCase())) {
                foundIncidents.push(error);
            }
        });

        // अगर कोई एरर नहीं मिला, तो सिर्फ 1 डिफ़ॉल्ट दिखाएगा
        if (foundIncidents.length === 0) {
            foundIncidents.push({
                keyword: "unknown", errorName: "Unclassified System Fault", 
                description: "AI applied generic safe fallback protocol.",
                solutionCode: "// ⚠️ Fallback Executed\nawait quarantineProcess();", timeTaken: "840ms"
            });
        }

        dashErrorCount.innerText = `${foundIncidents.length} Detected`;
        
        let totalLatency = 0;
        let timelineHTML = "";
        let combinedPatch = "/* 🚀 AEGISFLOW CASCADING RECOVERY INITIATED */\n/* Automating multi-step patches across the stack */\n\n";

        foundIncidents.forEach((incident, index) => {
            let stepNum = index + 1;
            totalLatency += parseInt(incident.timeTaken || "0");

            timelineHTML += `
                <div class="assessment-step">
                    <div class="step-badge">[✔] Step ${stepNum} Complete</div>
                    <div class="step-info">
                        <div class="step-title">${incident.errorName}</div>
                        <div class="step-desc">${incident.description}</div>
                    </div>
                </div>
            `;

            combinedPatch += `// --- [PATCH ${stepNum}] Resolving '${incident.keyword}' ---\n`;
            combinedPatch += `${incident.solutionCode}\n\n`;
        });

        assessmentTimeline.innerHTML = timelineHTML;
        dashTime.innerText = `${totalLatency}ms`;
        dashOriginalCode.innerText = codeInput.value; // Original formatting preserved
        dashFixedCode.innerText = combinedPatch;

        loadingSection.classList.add('hidden');
        dashboardSection.classList.remove('hidden');
    }, 4500); 
});

resetBtn.addEventListener('click', () => {
    dashboardSection.classList.add('hidden');
    inputSection.classList.remove('hidden');
    codeInput.value = '';
    deployBtn.innerText = "🚀 Approve & Deploy Sequence to Production";
    deployBtn.disabled = false;
    deployBtn.style.opacity = "1";
    deployBtn.style.background = "var(--accent-green)";
});

deployBtn.addEventListener('click', () => {
    deployBtn.innerText = "⏳ Deploying Sequence to Cluster...";
    deployBtn.style.opacity = "0.7";
    deployBtn.disabled = true;

    setTimeout(() => {
        deployBtn.innerText = "✓ Sequence Deployed Successfully";
        deployBtn.style.background = "#334155";
        deployBtn.style.color = "#fff";
        
        toastNotification.classList.remove('hidden');
        setTimeout(() => toastNotification.classList.add('hidden'), 4000);
    }, 2000);
});