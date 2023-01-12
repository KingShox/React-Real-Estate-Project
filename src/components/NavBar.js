import React, {useRef} from 'react'
import "../components/NavBar.css"
import {FaBars,FaTimes, FaHome} from 'react-icons/fa';

const NavBar = ()=> {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  return (
      <header className='colors'>
        <h3>Sally's <FaHome/> Real Estate Co. </h3>
        <nav ref={navRef} className="colors">
				<a href="/">Home</a>
				<a href="/Sale">For Sale</a>
				<a href="/rent">For Rent</a>
				<a href="/Sign-In">Sign In</a>
				<a href="/SignUp">Sign Up</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
  )
}

export default NavBar