import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    handleSubmit
}



/*let MeaningCloud = require('meaning-cloud');

var options = {
  key: process.env.API_KEY
};

var meaning = MeaningCloud(options);

console.log(meaning);*/


const fetch = require('node-fetch');

let url = "https://api.meaningcloud.com/sentiment-2.1?key=" + process.env.API_KEY + "&url=" + { handleSubmit } + "&lang=en";


async function postData(url){
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(url)
  });
  try {
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }

  catch (error){
    console.log('error', error);

  }

}


async function getExternalData(url){

  const res = await fetch(url)
  try{
      const dataFromAPI = await res.json();
      console.log(dataFromAPI);
      return dataFromAPI;
  }

  catch(error){
      console.log("An error appeared: ", error);

  }

}

async function clickFunction(event){
    getExternalData(url);
}

document.addEventListener(handleSubmit, clickFunction);
