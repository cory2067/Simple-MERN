import React, {Component} from 'react';
import '../style.css'

export default class Person extends Component {
	render() {
		return (
			<div className="person">
				<p className="name">{this.props.name}</p>
				<p>{this.props.desc}</p>
			</div>
		);
	}
}
