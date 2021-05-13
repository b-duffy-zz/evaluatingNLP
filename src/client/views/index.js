import { checkForName } from '../js/nameChecker'
import { handleSubmit } from '../js/formHandler'

import '../styles/main.scss'

console.log(checkForName);

alert("I EXIST")

export {
    checkForName,
    handleSubmit
}

const formdata = new FormData();
formdata.append("key", "49c1583babe11dd0a26450be2c3da1a8");
formdata.append("txt", "YOUR TEXT HERE");
formdata.append("lang", "TEXT LANGUAGE HERE");  // 2-letter code, like en es fr ...

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));