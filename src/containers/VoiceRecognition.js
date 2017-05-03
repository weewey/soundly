import React, { Component } from 'react';
import { Button , FormGroup , ControlLabel, FormControl, Row, Grid } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchSentiment } from '../actions/index';

// import styles from 'style!css?modules!./index.css';
// import mic from 'file!./mic.gif';
// import micAnimate from 'file!./mic-animate.gif'

class VoiceRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      supportVoice: 'webkitSpeechRecognition' in window,
    };
    // this.props.fetchSentiment = this.props.fetchSentiment.bind(this);
  }

  componentDidMount() {
    if (this.state.supportVoice) {
      const WebkitSpeechRecognition = window.webkitSpeechRecognition;
      this.recognition = new WebkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';
      this.recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
            this.setState({
              inputValue: finalTranscript,
            });
            // this.props.updateText(this.state.inputValue);
            // dispatch(updateText(this.state.inputValue));
            // this.props.updateText(this.state.inputValue);
            this.props.fetchSentiment(this.state.inputValue);
            // if (this.props.onChange) this.props.onChange(finalTranscript);
            if (this.props.onEnd) this.props.onEnd(finalTranscript);
          } else {
            interimTranscript += event.results[i][0].transcript;
            this.setState({
              inputValue: interimTranscript,
            });
            if (this.props.onChange) this.props.onChange(interimTranscript);
          }
        }
      };
    }
  }

  // changeValue(event) {
  //   this.setState({
  //     inputValue: event.target.value,
  //   });
  // }

  say() {
    if (this.state.supportVoice) {
      if (!this.state.speaking) {
        // start listening
        this.recognition.start();
      } else {
        this.recognition.stop();
        // const question = this.state.inputValue;
      }
      this.setState({
        speaking: !this.state.speaking,
        inputValue: '',
      });
    }
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          {
            this.state.supportVoice &&
            <Button 
              bsStyle="info"
              bsSize="large"
              block
              onClick={this.say.bind(this)}> START / STOP
            </Button>
          }
      </Row>
      <Row className="show-grid">
          <FormGroup bsSize="large">
            <ControlLabel>Speech To Text</ControlLabel>
            <FormControl componentClass="textarea" value={this.state.inputValue} />
          </FormGroup>
        </Row>
      </Grid>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchSentiment }, dispatch);
}

export default connect(null, mapDispatchToProps)(VoiceRecognition);
