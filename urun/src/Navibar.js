import React, { Component } from 'react'
 import './App.css';
 import portfolio from './components/portfolio';
 import { NavLink } from 'react-router-dom';
  class Navibar extends Component {
     render() {
   
         return (
     
        
//      <div className='App'>
//          <h2 class="ui icon header">
//            <i class="studiovinari icon"></i>
//            <div class="content">
//              SİHİRLİ DOKUNUŞ
//              <div class="sub header">Herşey hazır geriye sadece küçük bir dokunuş kaldı.</div>
//            </div>
          
//          </h2>
//           <img id='tek' src={require("./ceviz-1.jpg")}></img> 
//          <div >
//          <div id='btn' class="ui inverted segment">
//           <button class="ui inverted button">Standard</button>
//          <button class="ui inverted primary button">Primary</button> 
//           <NavLink to="/deneme" >  
//          <button class="ui inverted secondary button">HAKKIMIZDA</button>
//          </NavLink>
//          <NavLink to="/hakkimizda" >  
//          <button class="ui inverted secondary button">ÜRÜNLER</button>
//          </NavLink>
//          <button class="ui inverted secondary button">İLETİŞİM</button>
//          <button class="ui inverted secondary button">TOPTAN SATIŞ</button>
//          <button class="ui inverted secondary button">ALIŞVERİŞ</button>
       
//           <button class="ui inverted teal button">Teal</button>
//          <button class="ui inverted blue button">Blue</button>
//          <button class="ui inverted violet button">Violet</button>
//          <button class="ui inverted purple button">Purple</button>
//         <button class="ui inverted pink button">Pink</button>
//          <button class="ui inverted brown button">Brown</button>
//          <button class="ui inverted grey button">Grey</button>
//          <button class="ui inverted black button">Black</button>  
//  </div>

      
        
//         </div>
//       </div>
              <div>
               {/* <button id='menü' class="ui primary basic button">Primary</button> */}
               
               <div className='marka'><h1>DeCe</h1></div>
               <h1 className='ort'>THE ART OF FOOD</h1>
               <h2 className='ort1'>PHOTOGRAPHY</h2>
             
                  <div  class="ui menu">
                  <NavLink to="/">
            <a class="item">
              Home  
            </a>
            </NavLink>
            
           
          <NavLink to="/portfolio" > 
          <a class="item">
            Portfolio
          </a>
          </NavLink>
          <NavLink to="/about">
            <a class="item">
             About
            </a>
            </NavLink>
            <NavLink to="/blog">
            <a class="item">
            Blog
            </a>
            </NavLink>
            <NavLink to='/contact'>
          <a class="item">
            Contact
          </a>
          </NavLink>
        </div>
        
               
  
                  <img id='tek' src={require("./turkiye-genelinde-bolge-bolge-coronavirus-haritasi.jpg")}></img> 
                  <NavLink to="/portfolio" > 
                  <div id='tek1' class="ui basic blue  vertical animated button" tabindex="0">
                  <div class="visible content">Next</div>
                  <div class="hidden content">
                  <i class="angle double down icon"></i>
                  </div>
                  </div>
                  </NavLink>
                  <div className='parents'>
                  <div className='icons'>
                  <i class="pinterest p icon"></i>
                  <i class="facebook f icon"></i>
                  <i class="whatsapp icon"></i>
                  <i class="instagram icon"></i>
                  </div>
                  
                  <h3 className='acik'>© 2023 by The Art of Food. Proudly created with Wix.com</h3>
                  </div>
                  
              </div>
     
     )
   }
 }
 export default Navibar;