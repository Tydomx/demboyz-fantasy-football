import React, { useState } from 'react';

function Nav({ currentPage, changePage }) {
	const [active, setActive] = useState('navMenu');
	const [toggleIcon, setToggleIcon] = useState('navToggler');

	const navToggle = () => {
		active === 'navMenu'
			? setActive('navMenu navActive')
			: setActive('navMenu');

		// toggleIcon
		toggleIcon === 'navToggler'
			? setToggleIcon('navToggler toggle')
			: setToggleIcon('navToggler');
	};

	return (
		<nav className='nav'>
			<a href='#home' className='navBrand'>
				<span onClick={() => changePage('home')} className={currentPage === 'home' ? 'navActive' : ''}>
					Demboyz FF
				</span>
			</a>
			<ul className={active}>
				<li className='navItem'>
					<a href='#home' className='navLink'>
						<span onClick={() => changePage('home')} className={currentPage === 'home' ? 'navActive' : ''}>
							Home
						</span>
					</a>
				</li>
				<li className='navItem'>
					<a href='#prWeekly' className='navLink'>
						<span onClick={() => changePage('prWeekly')} className={currentPage === 'prWeekly' ? 'navActive' : ''}>
							Power Rankings
						</span>
					</a>
				</li>
				<li className='navItem'>
					<a href='#stats' className='navLink'>
						<span onClick={() => changePage('stats')} className={currentPage === 'stats' ? 'navActive' : ''}>
							Stats
						</span>
					</a>
				</li>
				<li className='navItem'>
					<a href='#history' className='navLink'>
						<span onClick={() => changePage('history')} className={currentPage === 'history' ? 'navActive' : ''}>
							League History
						</span>
					</a>
				</li>
			</ul>
			<div onClick={navToggle} className={toggleIcon}>
				<div className='line1'></div>
				<div className='line2'></div>
				<div className='line3'></div>
			</div>
		</nav>
	);
}

export default Nav;