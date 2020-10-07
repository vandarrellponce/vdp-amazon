import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import Checkout from './components/checkoutpage/Checkout'
import Header from './components/header/Header'
import Header2 from './components/header/Header2'
import Home from './components/homepage/Home'
import Login from './components/login/Login'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/checkout">
					<Checkout />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
