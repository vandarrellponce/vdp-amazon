import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import MapIcon from '@material-ui/icons/Map'
import ListAltIcon from '@material-ui/icons/ListAlt'
import EmailIcon from '@material-ui/icons/Email'
import NotificationsIcon from '@material-ui/icons/Notifications'
import HelpIcon from '@material-ui/icons/Help'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import './Header2.css'
import { useStateValue } from '../../state/StateProvider'

const Header2 = () => {
	// STATE
	/* const [state, dispatch] = useStateValue() */
	const [{ basket }] = useStateValue()

	return (
		<nav className="header">
			{/* Logo */}
			<Link to="/">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				/>
			</Link>
			<div className="header__container">
				<div className="header__leftIconsContainer">
					<Link to="" style={{ textDecoration: 'none' }}>
						<div className="header__icontextContainer">
							<MapIcon
								style={{ color: 'white' }}
								fontSize="small"
							/>
							<p style={{ color: 'white' }}>Map</p>
						</div>
					</Link>

					<Link to="/" style={{ textDecoration: 'none' }}>
						<div className="header__icontextContainer">
							<ListAltIcon
								style={{ color: 'white' }}
								fontSize="small"
							/>
							<p style={{ color: 'white' }}>List</p>
						</div>
					</Link>

					<Link to="/" style={{ textDecoration: 'none' }}>
						<div className="header__icontextContainer">
							<TrendingUpIcon
								style={{ color: 'white' }}
								fontSize="small"
							/>
							<p style={{ color: 'white' }}>Reports</p>
						</div>
					</Link>

					<Link to="/" style={{ textDecoration: 'none' }}>
						<div
							className="header__icontextContainer"
							style={{
								backgroundColor: 'rgb(221, 110, 58)',
								borderRadius: '5px',
							}}
						>
							<FormatListBulletedIcon
								fontSize="small"
								style={{
									color: 'white',
								}}
							/>
							<p style={{ color: 'white' }}>Communitator</p>
						</div>
					</Link>
				</div>

				<div className="header__rightIconsContainer">
					<EmailIcon style={{ color: 'white' }} />
					<NotificationsIcon style={{ color: 'white' }} />
					<HelpIcon style={{ color: 'white' }} />
					<AccountCircleIcon style={{ color: 'white' }} />
				</div>
			</div>
		</nav>
	)
}

export default Header2
