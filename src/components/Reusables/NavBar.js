import React, {useRef} from 'react'
import '../Reusables/NavBar.css'
import {FaBars,FaTimes, FaHome} from 'react-icons/fa';

const NavBar = ()=> {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  return (
	<div>
      <header className='colors'>
        <h3><FaHome/>&nbsp;Sally's Real Estate Co.</h3>
		<div>
        	<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/Sales">For Sale</a>
				<a href="/rent">For Rent</a>
				<a href="/SignIn">Sign In</a>
				<a href="/SignUp">Sign Up</a>
			</nav>
		</div>
		</header>
	</div>
  )
}

export default NavBar