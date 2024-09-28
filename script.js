function toggleDarkMode() {
    const body = document.body;
    const button = document.getElementById('toggle-button');
    body.classList.toggle('dark-mode');

    // Change button text based on the current mode
    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Modo Claro';
        localStorage.setItem('theme', 'dark'); // Store preference
    } else {
        button.textContent = 'Modo Escuro';
        localStorage.setItem('theme', 'light'); // Store preference
    }
}

// Function to apply the theme on page load
function applyTheme() {
    const theme = localStorage.getItem('theme');
    const body = document.body;
    const button = document.getElementById('toggle-button');

    if (theme === 'dark') {
        body.classList.add('dark-mode');
        button.textContent = 'Modo Claro';
    } else {
        button.textContent = 'Modo Escuro';
    }
}

// Apply the theme on DOMContentLoaded
document.addEventListener('DOMContentLoaded', applyTheme);
