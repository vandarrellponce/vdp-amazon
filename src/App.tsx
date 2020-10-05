import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import Header from './components/header/Header'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/checkout">Checkout</Route>
				<Route path="/login">Login</Route>
				<Route path="/">
					<Header />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
