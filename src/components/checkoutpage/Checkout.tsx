import React from 'react'
import { useStateValue } from '../../state/StateProvider'
import CheckoutProduct from '../checkoutproduct/CheckoutProduct'
import Subtotal from '../subtotal/Subtotal'
import './Checkout.css'

const Checkout = () => {
	// STATE
	const [{ basket }, dispatch] = useStateValue()

	return (
		<div className="checkout">
			{/* LEFT SIDE */}
			<div className="checkout__left">
				<img
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt="image ad"
					className="checkout__ad"
				/>

				{basket?.length ? (
					<div>
						<h2 className="checkout__title">
							Your Shopping Basket{' '}
						</h2>
						{basket.map((item) => {
							return (
								<CheckoutProduct key={item.id} product={item} />
							)
						})}
					</div>
				) : (
					<div>
						<h2 className="checkout__title">
							Your shopping basket is empty.
						</h2>
						<p style={{ paddingLeft: '10px' }}>
							You have no items in your basket. To buy one or
							more, Click the "Add to basket" next to the item.
						</p>
					</div>
				)}
			</div>
			{/* RIGHT SIDE */}
			{basket?.length > 0 && (
				<div className="checkout__right">
					<Subtotal />
				</div>
			)}
		</div>
	)
}

export default Checkout
