import React from 'react'
import { Provider } from 'react-redux'
import { Store } from './redux/store'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Devices } from './pages'
import './socketio'
import './App.css'

require('dotenv').config()

const App = (props) => {
	return (
		<Provider store={Store}>
			<BrowserRouter>
				<Switch>
					<Route path='/' component={Devices} />
					<Route path='*' component={() => <h1 align='center'> 404 - Page not found. </h1>} />
				</Switch>
			</BrowserRouter>
		</Provider>
	)
}

export default App