document.getElementById('submit-question').addEventListener('click', function() {
    const questionTitle = document.getElementById('question-title').value;
    const questionDescription = document.getElementById('question-description').value;

    if (questionTitle && questionDescription) {
        const questionList = document.getElementById('question-list');
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<strong>${questionTitle}</strong><p>${questionDescription}</p>`;
        questionList.appendChild(questionDiv);

        // Clear the input fields
        document.getElementById('question-title').value = '';
        document.getElementById('question-description').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});
