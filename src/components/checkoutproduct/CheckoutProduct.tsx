import React from 'react'
import { useStateValue } from '../../state/StateProvider'
import './CheckoutProduct.css'
interface Props {
	product: {
		id: string
		title: string
		price: number
		rating: number
		imageUrl: string
	}
}

const CheckoutProduct: React.FC<Props> = (props) => {
	const [_, dispatch] = useStateValue()
	const removeProduct = () => {
		dispatch({ type: 'REMOVE_FROM_BASKET', payload: props.product.id })
	}
	return (
		<div className="checkoutproduct">
			<img
				className="checkoutproduct__image"
				src={props.product.imageUrl}
				alt="product"
			/>

			<div className="checkoutproduct__info">
				<p className="checkoutproduct__title">{props.product.title}</p>
				<p className="checkoutproduct__price">
					<small>P</small>
					<strong>{props.product.price}</strong>
				</p>
				<div className="checkoutproduct__rating">
					{Array(props.product.rating)
						.fill(props.product.rating)
						.map((item, i) => {
							return <div key={i}>⭐</div>
						})}
				</div>
				<button
					onClick={removeProduct}
					className="checkoutproduct__button"
				>
					Remove from Cart
				</button>
			</div>
		</div>
	)
}

export default CheckoutProduct
