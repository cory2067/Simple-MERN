import React, {Component} from 'react';
import {Link} from 'react-router';
import './style.css'

export default class NotFound extends Component {
	render() {
		return (
			<div>
				<h1>Error 404: Page Not Found</h1>
				<Link to="/">Go to home page</Link>
			</div>
		);
	}
}
