function repeatSentence() {
    const sentence = document.getElementById('sentence').value;
    const times = document.getElementById('times').value;
    const errorMessage = document.getElementById('error-message');
    const output = document.getElementById('output');

    errorMessage.textContent = '';
    output.innerHTML = '';

    if (!sentence) {
        errorMessage.textContent = 'No text entered';
        return;
    }

    const timesNumber = parseInt(times, 10);
    if (isNaN(timesNumber) || timesNumber < 1 || timesNumber > 100) {
        errorMessage.textContent = 'Enter a valid number between 1 and 100';
        return;
    }

    for (let i = 0; i < timesNumber; i++) {
        const p = document.createElement('p');
        p.textContent = sentence;
        output.appendChild(p);
    }
}
