import React, { Component } from 'react'
import './genel.css';
import { NavLink } from 'react-router-dom';
import '../App.css';
export default class bulgur extends Component {
    render() {
        return (
            <div>
                  <NavLink to="/portfolio" > 
        <h4 style={{color:"black"}} className='geri'><i class="angle left icon"></i> Back to Portfolio</h4></NavLink>   
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
        
                  <img className='pilav'src={require("../pilav.jpeg")}/>
                  <p className='mal'>Bulgur Pilavı Malzemeler:</p>
                            <ul className='md'>
                               <li> 2 su bardağı pilavlık bulgur</li>
                               <li>2 adet domates</li>
                               <li> 1 adet soğan</li>
                               <li>2 adet sivri biber</li>
                               <li>1 su bardağı tavuk suyu</li>
                               <li>2,5 su bardağı sıcak su</li>
                               <li>4 yemek kaşığı sıvı yağ</li>
                               <li>Tuz</li>
                               </ul>
                    <p className='yap'>Bulgur Pilavı Yapılışı:</p>
                            <ul className='md1'>
                            <li> Soğanları ince olarak kıyıp yağ ile kavurmaya başlayın.</li>
                            <li> Kavrulan soğanların üzerine halka şeklinde doğradığınız biberleri ekleyin. Biraz kavurduktan sonra rendelediğiniz domatesi ekleyin.</li>
                            <li>Bulguru ekleyerek 2 dakika kadar daha kavurun. Sıcak su veya tavuk suyunu ekleyip tuzunu katarak pişirmeye bırakın.</li>
                            <li>Kısık ateşte kapağı kapalı pişirin.</li>
                            <li> Ocağın altını kapatıp demlendirdikten sonra servisini yapabilirsiniz.</li></ul>
                  
                            <NavLink to ='/'>
                            <div id='shopB' class="ui vertical animated button" tabindex="0">
                                
                                <div class="hidden content">Shop</div>
                                <div class="visible content">
                                    <i class="shop icon"></i>
                                </div>
                                </div>
                                </NavLink>
                                <NavLink to ='./kayit'>
                                <div id='pro' class="ui animated fade button" tabindex="0">
                                <div class="visible content">Sign-up for a Pro account</div>
                                <div class="hidden content">
                                    $12.99 a month
                                </div>
                                </div>
                                </NavLink>
                 
            </div>
        )
    }
}
