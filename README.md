# Soundly

<https://weewey.github.io/soundly/>

This app is built using <https://github.com/facebookincubator/create-react-app> and <https://github.com/reactjs/react-redux> for quick prototyping.

It uses [Web Speech API] to convert Speech to Text and makes a call to [Azure Text Analytics Sentiment API] to get the sentiment of sentence.

The Speech is saved in the VoiceRecognition containers and the action fetchSentiment is dispatched which will then make a call to the **Azure Text Analytics Sentiment API**.

The reducers then get the sentiment score and return it to the SentimentList container which displays the sentiment score.

[Web Speech API]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

[Azure Text Analytics Sentiment API]: https://www.microsoft.com/cognitive-services/en-us/text-analytics-api