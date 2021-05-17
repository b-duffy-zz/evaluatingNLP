import { response } from "express";

const processLanguage = async (event) => {
    event.preventDefault();

    let url = document.getElementById('articleURL').value;
    console.log(url);
    //put in URL validation here
    await fetch('http://localhost:8001/process', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({url: url})
        .then(response => response.json())
        .then(() => console.log(response))
    })
};

const getData = async (url='') => {
    const request = await fetch(url);
    try {
        let allData = await request.json()
        console.log(allData)
        return allData;
    }
    catch(error) {
        console.log("error",error);
    }
};

//change this to perform action once update UI works
document.querySelector('#process').addEventListener("click", processLanguage);


//Update the UI with server info
const updateUI = async () => {
    const request = await fetch('/all');
    const allData = await request.json();
    try{
        /**CHANGE THIS TO MATCH THE NEW SETUP
      newDate.innerHTML = `Date: ${allData.newEntry[allData.newEntry.length-1].date}`;
      newTemp.innerHTML = `Temperature: ${allData.newEntry[allData.newEntry.length-1].temp}`;
      newContent.innerHTML = `How I'm feeling: ${allData.newEntry[allData.newEntry.length-1].feelings}`;
  */
    } catch(error){
      console.log("error", error);
    }
  };

export { processLanguage }
export { getData }
export { updateUI }