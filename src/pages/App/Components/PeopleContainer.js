import React, {Component} from 'react';
import '../style.css'
import Person from './Person'

export default class PeopleContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {users: []};
	}

	componentDidMount() {
		fetch("api/users/")
			.then((res) =>  {
				return res.json();
			}).then((json) => {
				this.setState({users: json});
			});
	}

	render() {
		return (
			<div>
				{this.state.users.map((user) => (
					<Person key={user.name} name={user.name} desc={user.desc} />
				))}
			</div>
		);
	}
}
