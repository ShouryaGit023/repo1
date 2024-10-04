document.getElementById('submit-event').addEventListener('click', function() {
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventDescription = document.getElementById('event-description').value;

    if (eventName && eventDate && eventDescription) {
        const eventList = document.getElementById('event-list');
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerHTML = `<strong>${eventName}</strong><br><em>${eventDate}</em><p>${eventDescription}</p>`;
        eventList.appendChild(eventDiv);

        // Clear the input fields
        document.getElementById('event-name').value = '';
        document.getElementById('event-date').value = '';
        document.getElementById('event-description').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});
