
function subscribe() {
    const email = document.getElementById('email').value;
    const messageDiv = document.getElementById('message');

    if (!email) {
        messageDiv.textContent = 'Please enter a valid email.';
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', './php/subscribe-new-letter.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                messageDiv.textContent = 'Subscription successful!';
            } else {
                messageDiv.textContent = 'Subscription failed. Please try again.';
            }
        }
    };
    xhr.send('email=' + encodeURIComponent(email));
}