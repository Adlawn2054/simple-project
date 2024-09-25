let countdown = 20; // Set your countdown time in seconds
const timerDisplay = document.createElement('div');
timerDisplay.className = 'timer';
document.body.appendChild(timerDisplay);

// Update the timer display every second
const interval = setInterval(() => {
    timerDisplay.textContent = countdown;

    if (countdown <= 0) {
        clearInterval(interval);
        // Redirect to another file (e.g., another.html)
        window.location.href = 'poem.html';
    }
    countdown--;
}, 1000);


onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };