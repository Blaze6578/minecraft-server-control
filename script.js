// URLs for your server commands - replace with your actual server URLs.
const startUrl = 'https://your-server-url/start';
const stopUrl = 'https://your-server-url/stop';
const restartUrl = 'https://your-server-url/restart';

// Function to send server control requests
async function sendRequest(url, action) {
    try {
        const response = await fetch(url, { method: 'POST' });
        const data = await response.json();

        // Display server response
        document.getElementById('statusMessage').textContent = `${action} command: ${data.message}`;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('statusMessage').textContent = `Failed to ${action} server.`;
    }
}

// Event listeners for buttons
document.getElementById('startServer').addEventListener('click', () => sendRequest(startUrl, 'Start'));
document.getElementById('stopServer').addEventListener('click', () => sendRequest(stopUrl, 'Stop'));
document.getElementById('restartServer').addEventListener('click', () => sendRequest(restartUrl, 'Restart'));
