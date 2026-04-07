$(document).ready(function() {
    $('#fetchBtn').click(function() {
        fetchClasswork();
    });
});

function fetchClasswork() {
    const apiUrl = 'https://opentdb.com/api.php?amount=5&category=18&type=multiple';

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(data) {
            displayQuestions(data.results);
        },
        error: function() {
            $('#questionsContainer').html('<p class="text-center text-danger">Error fetching questions. Please try again.</p>');
        }
    });
}

function displayQuestions(questions) {
    let html = '';
    questions.forEach((q, index) => {
        const options = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5);
        html += `
            <div class="mb-4">
                <h5>Question ${index + 1}: ${q.question}</h5>
                <div class="form-check">
                    ${options.map(option => `
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="q${index}" value="${option}">
                            <label class="form-check-label">${option}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    $('#questionsContainer').html(html);
}</content>
<parameter name="filePath">c:\Users\HP\Desktop\detyr klase\SWE02-2526\scripts\classwork.js