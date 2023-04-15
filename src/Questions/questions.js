import React from 'react'
import './questions.css'
export default function Questions() {
  return (
    <div className='questions'>
        <div className='main-questions'>
      <h1>Frequently Asked Questions.</h1>
      <div className='text'> 
      <details>
        <summary>What is Netflix?</summary>
        <div>
        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows,
          movies, anime, documentaries and more on thousands of internet-connected devices.                                                                                                                                            
        </p>
        <p>You can watch as much as you want, whenever you want without a single commercial- all for one
          low monthly price. There's always something new to discover and new TV shows and movies are added every week!
        </p>
        </div>
      </details>
      <details>
        <summary>How much does Netflix cost?</summary>
        <div>
          <p className='one'>
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. 
          Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.
           </p>
        </div>
      </details>
      <details>
        <summary>Where can I watch?</summary>
        <p>
        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer
         or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players
         and game consoles.
         </p>
         <p className='one'>
         You can also download your favorite shows with the iOS, Android, or Windows 10 app.
          Use downloads to watch while you're on the go and without an internet connection. 
          Take Netflix with you anywhere.
         </p>
      </details>
      <details>
        <summary>How do I cancel?</summary>
        <p className='one'>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. 
          There are no cancellation fees – start or stop your account anytime.</p>
      </details>
      <details>
        <summary>What can I watch on Netflix?</summary>
        <p className='one'>
        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.
         Watch as much as you want, anytime you want.
        </p>
      </details>
      <details>
        <summary>Is Netflix good for Kids?</summary>
        <p>
        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
        </p>
        <p className='one'>
        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.

        </p>
      </details>

      </div>
      </div>
        <h3 className='check'>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className='nav-email'>
        <input type='email'></input>
        <label>Email address</label>
        <button>Get Started <i class="fa-solid fa-chevron-right"></i></button>
      </div>
    </div>
  )
}
