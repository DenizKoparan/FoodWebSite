import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './genel.css';
import '../App.css';
export default class ceviz extends Component {
//   componentDidMount(){
//     $('.ui.modal')
//   .modal('show')
// ;
//   }
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
          <NavLink to="/">
            <a class="item">
             About
            </a>
            </NavLink>
            <NavLink to="/">
            <a class="item">
            Blog
            </a>
            </NavLink>

          <a class="item">
            Contact
          </a>

        </div>
        <h1 className='baslik'>CEVİZ</h1>
        <NavLink to="/portfolio" >
        <h4 style={{color:"black"}} className='geri'><i class="angle left icon"></i> Back to Portfolio</h4></NavLink>




        <div class="ui segment">
  <div class="ui two column very relaxed grid">
    <div class="column">
    <div className='coklu'>
                  <img className='image' id='img1' src={require("../1.jpg")}/>
                  
                    <div className='overlay'>
                  <i id='icon' className="image outline icon">
                  <div class="ui modal">
  <i class="close icon"></i>
  <div class="header">
    Profile Picture
  </div>
  <div class="image content">
    <div class="ui medium image">
      <img src="/images/avatar/large/chris.jpg"/>
    </div>
    <div class="description">
      <div class="ui header">We've auto-chosen a profile image for you.</div>
      <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
      <p>Is it okay to use this photo?</p>
    </div>
  </div>
  <div class="actions">
    <div class="ui black deny button">
      Nope
    </div>
    <div class="ui positive right labeled icon button">
      Yep, that's me
      <i class="checkmark icon"></i>
    </div>
  </div>
</div>
                  </i>
                  </div>
                 
                  </div> 
    </div>
    <div class="column">
    <p className='aciklama1' >Ağaç Yapısı ve Kök
Cevizler hızlı büyüyerek 25- 40 m’ye kadar boylanır ve bir ağaç 300- 500 m2 ’lik bir alanı kaplayabilir. Ceviz ağaçları genelde “yayvan” taç şekline sahiptir. “yarı dik ve dik” yapıda da taç şekli görülür. Cevizler kazık köklü olup kılcal kök bolca bulunabilir. Kökler 3-5 m derinliğe kadar uzayabilir.
Gövde ve Dallar
Gövdede dallanma genelde toprak yüzeyinden 1-2 m yükseklikten başlar. Gövde çevresi 5- 6 m’ye kadar gelişebilir. Gençlik yıllarında düzgün yüzeyli ve gümüşi renkte olan gövdede çok ileri yaşlarda renk koyulaşır (gri-siyah) ve kabukta uzunluğuna çatlaklar oluşur. Sürgünler, tüysüz, parlak zeytin yeşili veya esmer renktedir.
Yapraklar ve Gözler
Yaprak;uzunca bir sap üzerinde karşılıklı dizilmiş ve sayıları 5-13 arasında değişen yaprakçıktan meydana gelir. Yaprakçıklar geniş elips şeklinde ve tam kenarlıdır. Uçları sivricedir ve boyları 6-12 cm arasında değişir. Rengi parlak yeşil olup gövde üzerlerinde helezonik şeklinde dizilmişlerdir. Gözler dal uçlarında ve yaprak koltuklarında (1-3 adet) Ceviz Yetiştiriciliği 3 olup, koyu esmer renklidirler. Yaprak koltuklarında bulunan gözlerden iri olanı sürer ve odun dalını meydana getirir. Verimli olmayan çeşitlerin sadece uç tomurcuklarından meydana gelen sürgünlerin ucunda dişi çiçek vardır. Oysa verimli çeşitlerin hemen hemen bütün tomurcuklarında dişi çiçek meydana gelir.</p>
    </div>
  </div>
  
</div>




                    
                  
                  
                   

                  {/* <img id='img2' src={require("../kc.jpg")}/>
                  <img id='img3' src={require("../kc.png")}/> */}


            </div>
        )
    }
}
