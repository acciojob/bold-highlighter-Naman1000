
// Function to highlight bold words
function highlight() {
    document.querySelectorAll('strong').forEach(strong => {
        strong.style.color = 'rgb(0, 128, 0)'; // Green color
    });
}

// Function to revert bold words to normal
function return_normal() {
    document.querySelectorAll('strong').forEach(strong => {
        strong.style.color = 'rgb(0, 0, 0)'; // Black color
    });
}

