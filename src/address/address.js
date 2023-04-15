import React from 'react'
import './address.css'
export default function Address() {
  return (
    <div className='twice'>
        <h4>Questions? Contact us</h4> 
        <div className='first'>
            <div className='first-1'>
                <h4>FAQ</h4>
                <h4>Media Center</h4>
                <h4>Ways to Watch</h4>
                <h4>Cookie Preference</h4>
                <h4>Speed Test</h4>
            </div>
            <div className='first-1'>
                <h4>Help Center</h4>
                <h4>Investor Relations</h4>
                <h4>Terms of Use</h4>
                <h4>Corporate Information</h4>
                <h4>Legal Notices</h4>
            </div>
            <div className='first-1'>
                <h4>Account</h4>
                <h4>Jobs</h4>
                <h4>Privacy</h4>
                <h4>Contact Us</h4>
                <h4>Only on Netflix</h4>
            </div>
        </div>
      <div className='second'>
        <select name='English'>
            <option value='English' style={{backgroundColor:'blue', color:"white"}}> English &#9207;</option>
        </select>
        <h4 className='texting'>Netflix Nigeria</h4>
      </div>
    </div>
  )
}
