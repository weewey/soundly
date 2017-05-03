import React, {Component} from 'react';
import { Grid , Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { connect } from 'react-redux';
import _ from 'lodash'


class SentimentList extends Component {

	// constructor(props){
	// 	super(props);
	// 	this.renderData = this.renderData.bind(this.props);
	// }

	// renderData(SentimentData, index) {
	// 	return (
	// 		<tr key={index}>
	// 			<td>{index}</td>
	// 			<td>{SentimentData['score']}</td>
	// 			<td>{this.props.text[index]}</td>
	// 		</tr>
	// 		);
	// }

	// renderText(text){
	// 	return(
	// 		<td>{text}</td>
	// 		);
	// }

	render() {
		var self = this;
		return (
			<Grid>
				<Table striped bordered condensed hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Sentiment</th>
							<th>Text</th>
						</tr>
					</thead>
					<tbody>
						{this.props.sentiment.map(function(item,index){
							return(
								<tr key={index}>
									<td>{index}</td>
									<td>{item['score']}</td>
									<td>{self.props.text[index]}</td>
								</tr>
								)
						})}
					</tbody>
				</Table>
			</Grid>
			);
	}
}

function mapStateToProps ( {sentiment} ){
	return { 
		sentiment
	 };
}

export default connect(mapStateToProps)(SentimentList);