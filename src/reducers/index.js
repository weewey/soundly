import { combineReducers } from 'redux';
import SentimentReducer from './reducer_sentiment';
// import UpdateText from './reducer_text';

const rootReducer = combineReducers({
  sentiment : SentimentReducer
  // text : UpdateText
});

export default rootReducer;