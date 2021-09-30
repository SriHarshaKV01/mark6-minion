var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document .querySelector("#user-input");
var outputText = document.querySelector("#user-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text="+ text
}

function errorHandler(errror){
    alert("Something wrong. Try again!")
}

function clickHandler(){
    var inputText = txtInput.value; //input 

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
    var translatedText =json.contents.translated;
    outputText.innerText = translatedText; //output
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler);
