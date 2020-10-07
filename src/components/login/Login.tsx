import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase'
import './Login.css'

const Login = () => {
	// STATES
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	// METHODS
	const handleSignIn = (e) => {
		e.preventDefault()
		auth.signInWithEmailAndPassword(email, password)
			.then((authUser) => {
				console.log(authUser)
				setEmail('')
				setPassword('')
			})
			.catch((e) => alert(e.message))
	}

	const handleCreateUser = (e) => {
		e.preventDefault()
		auth.createUserWithEmailAndPassword(email, password)
			.then((user) => {
				console.log(user)
				setEmail('')
				setPassword('')
				alert('Successfully created an account')
			})
			.catch((e) => alert(e.message))
	}
	return (
		<div className="login">
			<Link to="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt="amazon"
					className="login__logo"
				/>
			</Link>

			<div className="login__container">
				<h1>Sign in</h1>
				<form onSubmit={handleSignIn}>
					<h5>E-mail</h5>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						className="login__signinbutton"
						onClick={handleSignIn}
					>
						Sign In
					</button>
				</form>
				<p>
					By signing-in you agree to VDP's Conditions of User & Sale.
					Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice
				</p>
				<button
					onClick={handleCreateUser}
					className="login__createbutton"
				>
					Create your Amazon Account
				</button>
			</div>
		</div>
	)
}

export default Login
