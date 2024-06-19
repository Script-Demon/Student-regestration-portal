document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    // Update the button text based on the current mode
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Light Mode';
        localStorage.setItem('mode', 'dark');
    } else {
        this.textContent = 'Dark Mode';
        localStorage.setItem('mode', 'light');
    }
});

// Check the saved mode on page load and update the button text accordingly
window.addEventListener('load', function() {
    const mode = localStorage.getItem('mode');
    const toggleButton = document.getElementById('toggle-mode');
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = 'Light Mode';
    } else {
        document.body.classList.remove('dark-mode');
        toggleButton.textContent = 'Dark Mode';
    }
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Simulate a successful form submission
    setTimeout(function() {
        document.getElementById('success-message').style.display = 'block';
    }, 500); // Simulate a delay for the submission

    // Optionally, you can clear the form fields after submission
    this.reset();
});
