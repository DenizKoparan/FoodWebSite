import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './hakkimizda.css';
import { NavLink } from 'react-router-dom';

const hakkimizda = (props) => {
	// console.log(props);
	// setTimeout(() => {
	// 	  props.history.push("/about");
	// 	}, 2000);

	return (
		<div>
               
        
			 {/* <div class="ui card">
                 
                <div class="ui slide masked reveal image">
                    <img src={require("../1.jpg")} class="visible content"/>
                    <img style={{height:250}} src={require("../2.jpg")} class="hidden content"/>
                </div>
                
                <div class="content">
                    <a class="header">Team Fu &amp; Hess</a>
                    
                    <div class="meta">
                    <span class="date">Created in Sep 2014</span>
                    </div>
                    
                </div>
                
              
                </div> 
                              */}
                              <div class="ui left demo vertical inverted sidebar labeled icon menu">
                            <a class="item">
                                <i class="home icon"></i>
                                Home
                            </a>
                            <a class="item">
                                <i class="block layout icon"></i>
                                Topics
                            </a>
                            <a class="item">
                                <i class="smile icon"></i>
                                Friends
                            </a>
                            </div>
                              <h1>ÜRÜNLER</h1>
                   <div id="aa"  className="App">
                  
                     <Popup modal trigger={ 
                     <div class="ui card">
                 
                 <div class="ui slide masked reveal image">
                     <img src={require("../1.jpg")} class="visible content"/>
                     <img style={{height:250}} src={require("../2.jpg")} class="hidden content"/>
                 </div>
                 
                 <div class="content">
                     <a class="header">Team Fu &amp; Hess</a>
                     
                     <div class="meta">
                     <span class="date">Created in Sep 2014</span>
                     </div>
                     
                 </div>
                 
               
                 </div> 
                         }>
                     Bağ-bahçe ürünlerinin üretim, tüketim ve ticareti yönünden önemli ülkeler arasında yer alan Türkiye, köklü bir meyvecilik kültürüne sahip olup birçok meyve türünde olduğu gibi cevizin de yetiştirilebildiği uygun ekolojilere sahiptir. Ülkemiz dünya ceviz üretiminde A.B.D. ve Çin'den sonra üçüncü sıradadır. Ülkemizde ağaç başına verim 33-37 kg arasında
            değişmektedir. Aşılı ceviz fidanları ile bahçe tesis edildiğinde verimde aşısızlara göre % 50-60 oranında artış sağlanabilir. Aşısız (yabani) cevizler 7-10 yaşlarında , aşılı cevizler ise 4 yaşından itibaren meyve vermeye başlamaktadır. Yine yabani ağaçlardan 6 kg kabuklu meyveden en fazla 1,5-2 kg iç 2 alınırken, aşılı ağaçlardan 6 kg cevizden en az 3 kg iç meyve alınmaktadır.
            Önerilen aşılı fidanlarla bahçe tesis edildiğinde; 5 yaşındaki bir ceviz ağacı 3-4 kg, 8 yaşında 15-20 kg, 12 yaşında 30-40 kg, 14 yaşında 50-75 kg, 20 yaşında 80-120 kg arasında meyve verebilmektedir. Dekara 10 fidan dikildiğinde, dekara verimin verim çağında 1-1,5 ton olacağı beklenmektedir.
                     </Popup>
    </div>         


                            
                              
                   <div id="bb"  className="App">
                  
                     <Popup modal trigger={ 
                     <div class="ui card">
                 
                 <div class="ui slide masked reveal image">
                     <img src={require("../1.jpg")} class="visible content"/>
                     <img style={{height:250}} src={require("../2.jpg")} class="hidden content"/>
                 </div>
                 
                 <div class="content">
                     <a class="header">Team Fu &amp; Hess</a>
                     
                     <div class="meta">
                     <span class="date">Created in Sep 2014</span>
                     </div>
                     
                 </div>
                 
               
                 </div> 
                         }>
                     Bağ-bahçe ürünlerinin üretim, tüketim ve ticareti yönünden önemli ülkeler arasında yer alan Türkiye, köklü bir meyvecilik kültürüne sahip olup birçok meyve türünde olduğu gibi cevizin de yetiştirilebildiği uygun ekolojilere sahiptir. Ülkemiz dünya ceviz üretiminde A.B.D. ve Çin'den sonra üçüncü sıradadır. Ülkemizde ağaç başına verim 33-37 kg arasında
            değişmektedir. Aşılı ceviz fidanları ile bahçe tesis edildiğinde verimde aşısızlara göre % 50-60 oranında artış sağlanabilir. Aşısız (yabani) cevizler 7-10 yaşlarında , aşılı cevizler ise 4 yaşından itibaren meyve vermeye başlamaktadır. Yine yabani ağaçlardan 6 kg kabuklu meyveden en fazla 1,5-2 kg iç 2 alınırken, aşılı ağaçlardan 6 kg cevizden en az 3 kg iç meyve alınmaktadır.
            Önerilen aşılı fidanlarla bahçe tesis edildiğinde; 5 yaşındaki bir ceviz ağacı 3-4 kg, 8 yaşında 15-20 kg, 12 yaşında 30-40 kg, 14 yaşında 50-75 kg, 20 yaşında 80-120 kg arasında meyve verebilmektedir. Dekara 10 fidan dikildiğinde, dekara verimin verim çağında 1-1,5 ton olacağı beklenmektedir.
                     </Popup>
    </div> 
                    <NavLink to="/" >  
                    <div id='button1' class="ui animated button" tabindex="0">
                       
                <div class="visible content">Next</div>
                
                <div class="hidden content">
                    <i class="right arrow icon"></i>
                </div>
                </div>
                </NavLink> 
                <NavLink to="/" >  
                <div id='button2' class="ui animated button" tabindex="0">
                <div class="visible content">Back</div>
                <div class="hidden content">
                    <i class="arrow left icon"></i>
                </div>
                </div> 
                </NavLink>           
                
      
			</div>
            
            
            
	
	)
}


        export default hakkimizda;