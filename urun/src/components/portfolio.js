import React, { Component } from 'react';
import './genel.css';
import { NavLink } from 'react-router-dom';
import '../App.css';

export default class portfolio extends Component {
    render() {
        return (
            <div>
                <div className='marka'><h1>DeCe</h1></div>
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
            <h1 className='baslik'>PORTFOLİO</h1>   
           
            <div id='urun' class="ui large images">
            <img src={require("../c.jpg")}/>
            <img src={require("../b.png")}/>
            <img src={require("../k.jpg")}/>
            {/* <img src={require("../ceviz-1.jpg")}/>
            <img src={require("../ceviz-1.jpg")}/>
            <img src={require("../ceviz-1.jpg")}/> */}
            </div>
            <div className='icons'>
                  <i class="pinterest p icon"></i>
                  <i class="facebook f icon"></i>
                  <i class="whatsapp icon"></i>
                  <i class="instagram icon"></i>
                  </div>
                  <h3 className='acik'>© 2023 by The Art of Food. Proudly created with Wix.com</h3>
                  <h2 id='yemek1'>CEVİZ
                  <NavLink to = './ceviz'>
                  <button class="ui inverted button">View</button></NavLink></h2>
                  <h2 id='yemek2'>BULGUR
                  <NavLink to = './bulgur'>
                  <button class="ui inverted button">View</button></NavLink></h2>
                  <h2 id='yemek3'>KUŞBURNU
                  <NavLink to = './kusburnu'>
                  <button class="ui inverted button">View</button></NavLink></h2>
            </div>
        )
    }
}
