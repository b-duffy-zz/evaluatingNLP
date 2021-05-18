import {updateUI} from './updateUI'
import {urlChecker} from './urlChecker'

const processLanguage = (event) => {
    event.preventDefault();

    let url = document.getElementById('articleURL').value;
    //put in URL validation here
    if (urlChecker(url)) {
     fetch('http://localhost:8001/process', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({url: url})
    })
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
        updateUI(response)
    })
} else {
    console.log("Error: Please enter a URL")
}};

let articleSubmit = document.querySelector('#process');

if (articleSubmit) {
    articleSubmit.addEventListener("click", processLanguage)
};

export { processLanguage }
export { updateUI }