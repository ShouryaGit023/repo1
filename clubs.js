document.getElementById('submit-club').addEventListener('click', function() {
    const clubName = document.getElementById('club-name').value;
    const clubDescription = document.getElementById('club-description').value;

    if (clubName && clubDescription) {
        const clubList = document.getElementById('club-list');
        const clubDiv = document.createElement('div');
        clubDiv.classList.add('club');
        clubDiv.innerHTML = `<strong>${clubName}</strong><p>${clubDescription}</p>`;
        clubList.appendChild(clubDiv);

        // Clear the input fields
        document.getElementById('club-name').value = '';
        document.getElementById('club-description').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});
