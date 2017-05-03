import React, { Component } from 'react';
import Header from './component/header';
import VoiceRecognition from './containers/VoiceRecognition';
import SentimentList from './containers/SentimentList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text : []
		};

		this.updateText = this.updateText.bind(this);
	}

	updateText(text) {
		this.setState({ text: this.state.text.concat([text]) });
	}

	render() {
	    return (
		    <div>
		        <Header />
		        <VoiceRecognition onChange={(value) => console.log(value)} onEnd={this.updateText} />
		        <SentimentList text={this.state.text} />
		    </div>
	    );
	}
}

export default App;
