//Update the UI with API info from server response
const subjectivityHolder = document.getElementById('subjectivityHolder');
const agreementHolder = document.getElementById('agreementHolder');
const ironyHolder = document.getElementById('ironyHolder');
const confidenceHolder = document.getElementById('confidenceHolder');

const updateUI = (response) => {
    subjectivityHolder.innerHTML = `Subjectivity: ${response.subjectivity}`;
    agreementHolder.innerHTML = `Agreement: ${response.agreement}`;
    ironyHolder.innerHTML = `Irony: ${response.irony}`;
    confidenceHolder.innerHTML = `Confidence ranking (1-100): ${response.confidence}%`;
};

export { updateUI }