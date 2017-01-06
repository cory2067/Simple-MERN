import React, {Component} from 'react';
import '../style.css'
import User from './User'

export default class UserContainer extends Component {
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
					<User key={user._id} name={user.name} desc={user.desc} />
				))}
			</div>
		);
	}
}
