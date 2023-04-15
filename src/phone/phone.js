import React from 'react'
import './phone.css'
export default function Phone() {
  // const styles= {
  //   backgroundImage:'url(/pictures/s.jpg)',
  //   backgroundRepeat: 'no-repeat',
  //   width:  '10%',
  //   height:'15%'
  // }

  return (
    <div className='phone'>
      <div className='main-texted'>
            <h1>Download your shows to watch offline.</h1>
            <h3>Save your favorites easily and always have something to watch.
            </h3>
            </div>

      <img className='phone-pix' src='/pictures/mobiles.jpg' alt='phone'/>
      <div className='small'>
        
        <h5>Stranger Things</h5>
        <h6>Downloading...</h6>
        
      </div>
      
                



    </div>
  )
}
