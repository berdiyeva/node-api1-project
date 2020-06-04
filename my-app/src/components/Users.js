import React, { Component } from "react";
import "./user.css";

export default class Users extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			// currentUser: {
			// 	name: "",
			// 	bio: "",
			// },
		};

		// this.addUser = this.addUser.bind(this);
	}

	componentDidMount() {
		fetch("/api/users")
			.then((res) => res.json())
			.then((users) =>
				this.setState({ users }, () => console.log("users fetched..", users))
			);
    }
    
  
	render() {
		return (
			<div>
				<h2>About Our Users</h2>
				<ul>
					{this.state.users.map((user) => (
						<li key={user.id}>
							<p>{user.name}</p> <p>{user.bio}</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
