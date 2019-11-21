import React from 'react';
import Avatar from './Avatar';
import './Home.scss';
        


const Home = ({ people, getUserChoice }) => {
    console.log("Home", people)
    //console.log("Home",getUserChoice)
    
    return (
<>
        
        <div class="page">
  <div class="content">
    <div class="circle">
      <div class="circle_title">
        <h2>Luke Skywalker</h2>
        <h3>Has the longest Lightsaber</h3>
      </div>
      <div class="circle_inner">
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc1.png"/>
        </div>
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc3.png"/>
        </div>
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc2.png"/>
        </div>
      </div>
      <div class="content_shadow"></div>
    </div>
  </div>
  <div class="content">
    <div class="circle">
      <div class="circle_title">
        <h2>Darth Vader</h2>
        <h3>Can't breath properly</h3>
      </div>
      <div class="circle_inner">
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc4.png"/>
        </div>
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc5.png"/>
        </div>
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc6.png"/>
        </div>
      </div>
      <div class="content_shadow"></div>
    </div>
  </div>
  <div class="content">
    <div class="circle">
      <div class="circle_title">
        <h2>Chewie</h2>
        <h3>Big heart, woolly hair</h3>
      </div>
      <div class="circle_inner">
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc7.png"/>
        </div>
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc8.png"/>
        </div>
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc9.png"/>
        </div>
      </div>
      <div class="content_shadow"></div>
    </div>
  </div>
</div>


        
        {people.map((person) => {
            return (
                <div key={person.name}>
                    <Avatar person={person} getUserChoice={getUserChoice} />
                </div>
            )
        })}
        </>
        )
}















    export default Home; 