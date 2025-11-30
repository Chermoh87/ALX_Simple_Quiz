function checkAnswer() {
    const correctAnswer = "4";

    const selectedInput = document.querySelector('input[name="quiz"]:checked');

    if (selectedInput) {
        const userAnswer = selectedInput.value;
        const feedbackElement = document.getElementById('feedback');

        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Adding Event Listener to the Submit Button
    const submitButton = document.getElementById('submit-answer');

    submitButton.addEventListener('click', checkAnswer);
});