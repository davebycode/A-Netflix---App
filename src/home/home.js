import React from 'react'
import './home.css'
function First() {

const styling = {
  backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.88) 100%),url(/pictures/Netflix.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', 
  backgroundPosition: 'center',
  width: '98.1vw',
  overFlow: 'hidden',
  backgroundBlendMode:'darken',
  height:'100vh',
  paddingTop: '0',
}
  return (
    <div className='styles'>
    <div style={styling}>
      <div className='navbar'>
          <h1>NETFLIX</h1>
          <button>Sign In</button>
      </div>
      <div className='home-text'>
      <h1>Unlimited movies,Tv shows, and more.</h1>
      <h3>Watch anywhere. Cancel anytime.</h3>
      <h4>Ready to watch? Enter your email to create or start your membership.</h4>
      <div className='nav-email'>
        <input type='email'></input>
        <label>Email address</label>
        <button>Get Started <i class="fa-solid fa-chevron-right"></i></button>
      </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
    </div>

  )
}

export default First

