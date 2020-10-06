import React from 'react'
import Product from '../product/Product'
import './Home.css'

const Home = () => {
	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				//src="https://storage.googleapis.com/kaggle-datasets-images/33019/43260/700145bfae13a80a07bdeb33fe674ad0/data-original.jpg?t=2018-06-24-10-27-14"
				alt="Banner"
			/>
			<div className="home__row">
				<Product
					id="1"
					title="The Lean Startup"
					price={11.96}
					rating={5}
					imageUrl="https://media.officedepot.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_1665,q_auto,w_1250/c_pad,h_1665,w_1250/v1/products/8317200/8317200_p_echo_plus_2_gen_charcoal?pgw=1&pgwact=1"
				/>
				<Product
					id="2"
					title="The Lean Startup"
					price={11.96}
					rating={5}
					imageUrl="https://media.officedepot.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_1665,q_auto,w_1250/c_pad,h_1665,w_1250/v1/products/8317200/8317200_p_echo_plus_2_gen_charcoal?pgw=1&pgwact=1"
				/>
				<Product
					id="3"
					title="The Lean Startup"
					price={11.96}
					rating={5}
					imageUrl="https://media.officedepot.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_1665,q_auto,w_1250/c_pad,h_1665,w_1250/v1/products/8317200/8317200_p_echo_plus_2_gen_charcoal?pgw=1&pgwact=1"
				/>
			</div>
		</div>
	)
}

export default Home
