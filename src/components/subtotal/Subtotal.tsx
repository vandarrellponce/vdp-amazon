import React from 'react'
import { useStateValue } from '../../state/StateProvider'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { getBasketTotal } from '../../state/rootReducer'

const Subtotal = () => {
	const [{ basket }] = useStateValue()
	const total = getBasketTotal(basket)

	return (
		<div className="subtotal">
			<CurrencyFormat
				decimalScale={2}
				value={0}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'P'}
				renderText={(value) => (
					<div>
						<p>
							Subtotal ({basket.length} items):
							<strong>{` P${total}`}</strong>
						</p>
						<small className="subtotal__gifts">
							<input type="checkbox" />
							This order contains a gift
						</small>
					</div>
				)}
			/>
			<button>Proceed to Checkout</button>
		</div>
	)
}

export default Subtotal
