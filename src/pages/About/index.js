import React, { Component } from 'react';
import './style.css'


export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: ''
		};
	}

	componentDidMount() {
		fetch("api/meme/")		
			.then((res) =>  {
				return res.json();
			}).then((json) => {
				console.log( json );
				this.setState(json);
			});
	}

	render() {
		return (
			<h1>this is an app by {this.state.user}~</h1>
		);
	}
}
