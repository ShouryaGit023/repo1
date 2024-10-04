document.getElementById('submit').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    if (username && message) {
        const postList = document.getElementById('post-list');
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<strong>${username}</strong>: <p>${message}</p>`;
        postList.appendChild(postDiv);

        // Clear the input fields
        document.getElementById('username').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please fill in both fields.');
    }
});
