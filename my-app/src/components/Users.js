import React, { Component } from "react";
import "./user.css";

export default class Users extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			user: {
				id: "",
				name: "",
				bio: "",
			},
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

	addUser = () => {
		console.log("add function is clicked", this);
    };
    
    deleteUser = () => {
		console.log("delete function is clicked", this);
	};


	render() {
		return (
			<div>
				<h1>About Our Users</h1>
				<ul>
					{this.state.users.map((user) => (
						<li key={user.id}>
							<p>{user.name}</p> <p>{user.bio}</p>
						</li>
					))}
				</ul>
				<button onClick={(e) => this.addUser()}>Add User</button>
                <button onClick={(e) => this.deleteUser()}>Delete User</button>
			</div>
		);
	}
}
