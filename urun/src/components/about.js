import React, { Component } from 'react';
import './genel.css';
import '../App.css';
import {NavLink} from 'react-router-dom';

export default class about extends Component {
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
        <div  class="ui placeholder segment">
                        <div class="ui two column very relaxed stackable grid">
                            <div class="column">
                            <div class="ui form">
                            <img className='hk'src={require("../hk.jpg")}/>
                            </div>
                            </div>
                            <div class="middle aligned column">
                                <h1>ABOUT JADE</h1>
                                <div  class="sub header">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. 
This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.</div>
                            <h4>Education:</h4>
                            <div class="sub header">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </div>
                                <h4>Awards & Nominations:</h4>
                                <div class="sub header">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</div>
                            </div>
                        </div>
                        
                           
                        
                        </div>
                        <div className='icons'>
                  <i class="pinterest p icon"></i>
                  <i class="facebook f icon"></i>
                  <i class="whatsapp icon"></i>
                  <i class="instagram icon"></i>
                  </div>
                  <h3 className='acik'>© 2023 by The Art of Food. Proudly created with Wix.com</h3>
            </div>
        )
    }
}
