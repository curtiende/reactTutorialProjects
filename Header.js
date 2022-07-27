import React from 'react'

function Header(){
  return(
    <header>
          <nav className= 'nav'>
            <img className='nav-logo' src='http://assets.stickpng.com/thumbs/62a74dfe223343fbc2207d02.png'
            />
            <ul className='nav-items'>
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
    </header>
  )
}
export default Header