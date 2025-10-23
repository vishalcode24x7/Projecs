const input = document.getElementById('inputText');
const output = document.getElementById('outputContainer');

const styles = [
    { wrap: txt => `*•.¸♡ ${txt} ♡¸.•*` },
    { wrap: txt => `★彡 ${txt} 彡★` },
    { wrap: txt => `♡ ${txt} ♡` },
    { wrap: txt => `➵ ${txt} ➵` },
    { wrap: txt => `𓆩 ${txt} 𓆪` },
    { wrap: txt => `◦•●◉✿ ${txt} ✿◉●•◦` },
    { wrap: txt => `↤↤↤↤↤ ${txt} ↦↦↦↦↦` },
    { wrap: txt => `↫↫↫↫↫ ${txt} ↬↬↬↬↬` },
    { wrap: txt => `░▒▓█►─═ ${txt} ═─◄█▓▒░` },
    { wrap: txt => `▁ ▂ ▄ ▅ ▆ ▇ █ ${txt}  █ ▇ ▆ ▅ ▄ ▂ ▁` },
    { wrap: txt => `ღ(¯◕‿◕¯) ${txt} ღ(¯◕‿◕¯)` },
    { wrap: txt => `ஜ۩۞۩ஜ ${txt} ஜ۩۞۩ஜ` },
    { wrap: txt => `(¯·..·¯·..-> ${txt} <-..·¯·..·¯) ` },
    { wrap: txt => `—(••÷[ ${txt} ]÷••)—` },
    { wrap: txt => `➶➶➶➶ ${txt} ➶➶➶➶` },
    { wrap: txt => `(-_-) ${txt} (-_-)` },
    { wrap: txt => `♛ ${txt} ♛` },
    { wrap: txt => `✿ ${txt} ✿` },
    { wrap: txt => `╰☆☆ ${txt} ☆☆╮` },
    { wrap: txt => `★·.· ${txt} ·.·★` },
    { wrap: txt => `♦ ${txt} ♦` },
    { wrap: txt => `▌│█║▌║▌║ ${txt} ▌│█║▌║▌║` },
    { wrap: txt => `▀▄▀▄▀▄ ${txt} ▀▄▀▄▀▄` },
    { wrap: txt => `.•♫•♬• ${txt} •♬•♫•.` },
    { wrap: txt => `•?((¯°·._.•  ${txt} •._.·°¯))؟•` },
    { wrap: txt => `]|I{•------» ${txt} «------•}I|[` },
    { wrap: txt => `🌙 ${txt} 🌙` },
    { wrap: txt => `☁ ${txt} ☁` },
    { wrap: txt => `♩♪♫ ${txt} ♫♩♪` },
    { wrap: txt => `༄ ${txt} ༄` },
    { wrap: txt => `૮₍ ´• ˕ • ₎ა ${txt} ૮₍ ´• ˕ • ₎ა` },
    { wrap: txt => `(≧◡≦) ${txt} (≧◡≦)` },
    { wrap: txt => `✩ ${txt} ✩` },
    { wrap: txt => `[ ${txt} ]` }
];

function renderDecorations(text) {
    output.innerHTML = '';

    styles.forEach(style => {
        const decoratedText = style.wrap(text);
        const div = document.createElement('div');
        div.className = 'decorated';

        const span = document.createElement('span');
        span.textContent = decoratedText;

        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.textContent = 'Copy';
        button.onclick = () => {
            navigator.clipboard.writeText(decoratedText);
            button.textContent = 'Copied!';
            setTimeout(() => (button.textContent = 'Copy'), 1500);
        };

        div.appendChild(span);
        div.appendChild(button);
        output.appendChild(div);
    });
}

// Initial load with empty string
renderDecorations('');

input.addEventListener('input', () => {
    const text = input.value.trim();
    renderDecorations(text);
});