import { FETCH_SENTIMENT } from '../actions/index';


export default function (state = [], action) {
	switch (action.type){
		case FETCH_SENTIMENT:
			return action.payload.documents;
	default:
		return state;
	}	
}