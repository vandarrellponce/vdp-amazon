import React, { useContext, useReducer } from 'react'

// DATA LAYER
export const StateContext = React.createContext(undefined)

interface Props {
	reducer: any
	initialState: any
}

// BUILD A PROVIDER
export const StateProvider: React.FC<Props> = (props) => {
	return (
		<StateContext.Provider
			value={useReducer(props.reducer, props.initialState)}
		>
			{props.children}
		</StateContext.Provider>
	)
}

// THIS IS HOW WE USE IT INSIDE A COMPONENT
export const useStateValue = () => useContext(StateContext)
