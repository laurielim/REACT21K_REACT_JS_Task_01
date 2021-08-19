import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(0);
	const { currentUser, login, logout } = useAuth();

	useEffect(
		() => setIsLoggedIn(Object.keys(currentUser).length),
		[currentUser]
	);

	const loginHandler = (e) => {
		e.preventDefault();

		const username = document.getElementById("username");
		const password = document.getElementById("password");

		login(username, password);
	};

	const logoutHandler = () => {
		logout();
	};

	return (
		<div>
			{isLoggedIn ? (
				<>
					<h1>User is logged in</h1>
					<button onClick={logoutHandler}>Log out</button>
				</>
			) : (
				<>
					<h1>Login</h1>
					<form onSubmit={loginHandler}>
						<div>
							<label htmlFor='username'>Username</label>
							<input type='text' name='username' id='username' />
						</div>
						<div>
							<label htmlFor='password'>Password</label>
							<input type='password' name='password' id='password' />
						</div>
						<button type='submit'>Log in</button>
					</form>
				</>
			)}
		</div>
	);
};

export default Login;
