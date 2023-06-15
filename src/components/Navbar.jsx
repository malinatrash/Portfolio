import React from 'react'

import { Link } from 'react-router-dom'
import { logo } from '../assets'
import { styles } from '../styles'

const Navbar = () => {
	const [active, setActive] = useState('')
	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
		>
			<div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
				<Link
					className='flex items-center gap-2'
					to='/'
					onClick={() => {
						setActive('')
						window.scrollTo(0, 0)
					}}
				>
					<img className='w-9 h-9 object-contain' src={logo} alt='logo' />
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
