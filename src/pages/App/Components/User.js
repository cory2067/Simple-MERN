import React, {Component} from 'react';
import '../style.css'

export default class User extends Component {
	render() {
		return (
			<div className="user">
				<p className="name">{this.props.name}</p>
				<p>{this.props.desc}</p>
			</div>
		);
	}
}
