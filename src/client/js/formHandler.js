import {updateUI} from './updateUI'

const processLanguage = (event) => {
    event.preventDefault();

    let url = document.getElementById('articleURL').value;
    console.log(url);
    //put in URL validation here
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
};

//change this to perform action once update UI works
document.querySelector('#process').addEventListener("click", processLanguage);


export { processLanguage }
export { updateUI }