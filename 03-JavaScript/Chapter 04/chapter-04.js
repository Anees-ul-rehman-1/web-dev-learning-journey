const consoleWraps = document.querySelectorAll('.console-wrap');

consoleWraps.forEach((wrap) => {
    const input = wrap.querySelector('.jsInput');
    const output = wrap.querySelector('.output');
    const runBtn = wrap.querySelector('.runBtn');

    function runCode() {
        const logs = [];

        const fakeConsole = {
            log: (...args) => {
                const formatted = args.map((a) => {
                    if (typeof a === 'object' && a !== null) {
                        try {
                            return JSON.stringify(a, null, 2);
                        } catch (e) {
                            return String(a);
                        }
                    } return String(a);
                }).join(' ');
                logs.push(formatted);
            }
        };

        try {
            const fn = new Function('console', input.value);
            fn(fakeConsole);

            if (logs.length > 0) {
                output.innerHTML = '<span class="ok">' + logs.join('\n') + '</span>';
            } else {
                output.innerHTML = '<span class="placeholder"> // ran with no console.log output';
            }
        } catch (err) {
            output.innerHTML = '<span class="err"> ✕ ' + err.message + '</span>';
        }

    }

    runBtn.addEventListener('click', runCode);
    input.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runCode();
        }
    });
});