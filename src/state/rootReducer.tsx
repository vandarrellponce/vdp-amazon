export const initialState = {
	basket: [
		{
			id: '12345',
			title: 'The Lean Startup',
			price: 11.96,
			rating: 5,
			imageUrl:
				'https://media.officedepot.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_1665,q_auto,w_1250/c_pad,h_1665,w_1250/v1/products/8317200/8317200_p_echo_plus_2_gen_charcoal?pgw=1&pgwact=1',
		},
	],
}

export const getBasketTotal = (basket) => {
	return basket?.reduce((amount, item) => amount + item.price, 0)
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
		case 'REMOVE_FROM_BASKET': {
			const id = action.payload
			return {
				...state,
				basket: state.basket.filter((item) => item.id !== id),
			}
		}

		default:
			return state
	}
}
