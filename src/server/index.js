const dotenv = require('dotenv');
let MeaningCloud = require('meaning-cloud');
//dotenv.config();
dotenv.config({ path: path.resolve(__dirname, "../.env") });
console.log(`Your API key is ${process.env.API_KEY}`);
const apiKey = process.env.API_KEY;
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch')
let url = ""
const app = express()

/*const textapi = new mCloud({
    application_id: process.env.API_KEY
  });*/

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html')) edited by Christian
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



app.post('/analysis', function(req, res){

  let requestedURL = req.body;
  console.log(requestedURL);
  let newData = getExternalContent(requestedURL);
  res.send(newData);

})

async function getExternalContent(url){

  const pattern = "https://api.meaningcloud.com/sentiment-2.1?key=" + apiKey + "&url="+ url +"&lang=en"; 
  const res = await fetch(pattern)
  try{
      const dataFromAPI = await res.json();
      console.log(dataFromAPI);
      return dataFromAPI;
  }

  catch(error){
      console.log("An error appeared: ", error);

  }

}