import React from 'react';
import First from './home/home';
import Tv from './tv/tv';
import Phone from './phone/phone';
import Watch from './watch/watch';
import Profile from './profile/profile';
import Questions from './Questions/questions';
import Address from './address/address';
// import './index.css'
function App() {
  return (
    <div className="App">
    <First/>
    <Tv/>
    <Phone/>
    <Watch/>
    <Profile/>
    <Questions/>
    <Address/>
    </div>
  );
}

export default App;
