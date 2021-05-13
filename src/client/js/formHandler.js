document.querySelector('#process').addEventListener("click", performAction);

function performAction(){
    processLanguage(baseURL, key, article)
    .then(function(newData){
        postData('/process', {
            temp: newData.main.temp,
            feelings: feelings.value,
            date: date
        })
    })
    .then(() => getData('/all'))
    .then(() => updateUI());
};

let article = document.getElementById('article-url');

const processLanguage = async (baseURL, key, article) => {

    let baseURL = "https://api.meaningcloud.com/sentiment-2.1";
    let key = process.env.API_KEY;
    let lang = "lang=en";

    let response = await fetch('${baseURL}?${key}&${article}${lang}');
    let langData = response.json;
    console.log(langData);
    return langData;
}

//POST data to server
const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data), 
  });

  try {
    const newData = await response.json();
    console.log(newData);
  } catch(error) {
  console.log("error", error)
  }
};


//GET data from server
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

export { performAction }
export { processLanguage }
export { getData }
export { postData }
export { updateUI }