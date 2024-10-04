document.getElementById('submit-event').addEventListener('click', function() {
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventLocation = document.getElementById('event-location').value;
    const eventDescription = document.getElementById('event-description').value;

    if (eventName && eventDate && eventLocation && eventDescription) {
        const eventList = document.getElementById('event-list');
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerHTML = `<strong>${eventName}</strong><br><em>${eventDate} at ${eventLocation}</em><p>${eventDescription}</p>`;
        eventList.appendChild(eventDiv);

        // Clear the input fields
        document.getElementById('event-name').value = '';
        document.getElementById('event-date').value = '';
        document.getElementById('event-location').value = '';
        document.getElementById('event-description').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});
