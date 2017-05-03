export const FETCH_SENTIMENT ="FETCH_SENTIMENT";

function parseJson(response) {
    return response.json();
};

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        console.log(error)
    }
};

var documents = [];
var id = 1;

export function fetchSentiment(speechToText) {
    documents.push({
            language: "en",
            id: id++,
            text: speechToText
        });
    const postData = JSON.stringify({ documents: documents });
    const sentiment = fetch('https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment', {
        method: 'POST',
        headers: ({
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': process.env.SUBSCRIPTION_KEY,
        }),
        body: postData
    }).then(checkStatus)
    .then(parseJson);

  return {
    type : FETCH_SENTIMENT,
    payload : sentiment
  };
}

export const UPDATE_TEXT ="UPDATE_TEXT";

export function updateText(text) {
  return {
    type : UPDATE_TEXT,
    payload : text
  };
}