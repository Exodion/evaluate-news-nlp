async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log(formText);

   if (Client.checkForName(formText) !== ""){

    console.log("::: Form Submitted :::")
    
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

      let resultData = await postData("/analysis");
      console.log(resultData.score_tag);

      document.querySelector("#polarity").innerText = "Polarity: " + resultData.score_tag;
      document.querySelector("#subjectivity").innerText = "Subjectivity: " + resultData.subjectivity;
      document.querySelector("#confidence").innerText = "Confidence: " + resultData.confidence; 
      document.querySelector("#irony").innerText = "Polarity: " + resultData.irony;
    }

}



export { handleSubmit }

//let url = "https://api.meaningcloud.com/sentiment-2.1?key=" + process.env.API_KEY + "&url=" + { handleSubmit } + "&lang=en";