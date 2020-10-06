import React from 'react'
import { useStateValue } from '../../state/StateProvider'
import './Product.css'

interface Props {
	id: string
	title: string
	price: number
	rating: number
	imageUrl: string
}

const Product: React.FC<Props> = (props) => {
	//STATE
	const [_, dispatch] = useStateValue()
	// METHODS
	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			payload: {
				id: props.id,
				title: props.title,
				price: props.price,
				rating: props.rating,
				imageUrl: props.imageUrl,
			},
		})
	}
	return (
		<div className="product">
			<div className="product__info">
				{/* TITLE */}
				<p>{props.title}</p>

				{/* PRICE */}
				<p className="product__price">
					<small>₱</small>
					<strong>{props.price}</strong>
				</p>

				{/* RATING */}
				<div className="product__rating">
					{Array(props.rating)
						.fill(props.rating)
						.map((item, i) => {
							return <div key={i}>⭐</div>
						})}
				</div>

				{/* IMAGE */}
				<img
					className="product__image"
					src={props.imageUrl}
					alt="product"
				/>
			</div>
			<button onClick={addToBasket} className="product__button">
				Add to Basket
			</button>
		</div>
	)
}

export default Product
