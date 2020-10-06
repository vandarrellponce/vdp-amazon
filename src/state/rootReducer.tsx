export const initialState = {
	basket: ['lotion', 'shampoo'],
}

export const reducer = (
	state = initialState,
	action: { payload: any; type: string }
) => {
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
				basket: [...state.basket, action.payload],
			}
		case 'REMOVE_FROM_BASKET':
			return state
		default:
			return state
	}
}
