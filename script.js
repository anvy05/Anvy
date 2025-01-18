// Function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Find the button that triggered the copy action
        const button = event.target;

        // Temporarily change the button text to "Copied"
        const originalText = button.textContent;
        button.textContent = "Copied!";
        button.style.backgroundColor = "#4CAF50"; // Green background
        button.style.color = "#fff"; // White text

        // Restore the original text after 2 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = ""; // Revert to original
            button.style.color = ""; // Revert to original
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}
