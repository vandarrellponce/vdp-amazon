import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { StateProvider } from './state/StateProvider'
import { initialState, reducer } from './state/rootReducer'

ReactDOM.render(
	<React.StrictMode>
		<StateProvider reducer={reducer} initialState={initialState}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
