import './App.css';
import Bakery from './images/Bakery.png';
import Cookie from './images/Cookie.png';
import {useState} from 'react';

function followClicked()
{
  // alert('Thank you for following');
}
function shareClicked()
{
  alert('Thank you for sharing');
}
function offersClicked()
{
  alert('100% off on everything!');
}
function menuClicked()
{
  alert('Menu tab');
}
function aboutClicked()
{
  alert('About tab');
}

const App = () => {

  const[counter, setCounter] = useState(0);

  return (
  <> 
   <div className = 'App'> 
    <h1> Detail page (Menu) </h1>
   </div>
   <div className = 'Img-container'> 
    <img className = 'Img-style' src = {Bakery} alt = 'Menu preview' />
    <div className = 'Img-text-name'> Illuvia bakery </div>
    <div className = 'Img-text-open'> Open </div>
    <div className = 'Img-text-location'> 2.3 km </div>
   </div>
   <div className = 'Info-container'> 
    <div className = 'Boxtext-left'> Order Online </div>
    <div className = 'Boxtext-center-left'> No Delivery </div>
    <div className = 'Boxtext-center-right'> On the move </div>
    <div className = 'Boxtext-right'> Appointment </div>
   </div>
   <div className = 'Promotions-container'> 

    <div className = 'Button-container'>
      
     <button className = 'Button' onClick = {followClicked}> Follow </button> 
     <button className = 'Button' onClick = {shareClicked}> Share </button> 
     <button className = 'Button' onClick = {offersClicked}> Offers </button> 
    </div>
    <div className = 'Boni-coins'> You have Rs 40 boni coins! </div>
   </div>
   <hr/>
   <div className = 'Menu-about'> 
    <button className = 'Menu-button' onClick = {menuClicked} > Menu </button>
    <button className = 'About-button' onClick = {aboutClicked} > About </button>
   </div>
   <div className = 'Search-container'> 
    <input placeholder = 'Search' className = 'Search' />
   </div>
   <div className = 'Menu-recommended'> Recommended (6) </div>
   <div className = 'Small-img-container'> 
    <img className = 'Small-img-style' src = {Cookie} alt = 'Menu item' />
    <div classname = 'Menu-items'> 
     <h1> Blueberry almond cookies </h1>
     <h2> Rs 169.00 (100gm) </h2>
    </div>
    <div className = 'Add-items-container'> 
     <button className = 'Add-items-buttons' onClick = {() => setCounter((prevCount) => prevCount - 1)}> - </button>
     <h3 className = 'Added-items'> {counter} </h3>
     <button className = 'Add-items-buttons' onClick = {() => setCounter((prevCount) => prevCount + 1)}> + </button>
    </div> 
   </div>
  </>
  );
}

export default App;
