import React from 'react'
import './Home.css';
import vip from '../assets/vip.jpg';
import stc from '../assets/stc.jpg';
import m2express from '../assets/m2express.jpg';
import guo from '../assets/guo.jpg';
import { Layout } from 'antd';

const { Footer } = Layout;
export default function Home() {
  return (
    <div>
      <p className='title'>Recommended for you</p>
       <div class="cardBox">
          <div class="card">
            <div>
              <div class="number">Accra to Kumasi 75GHS</div>
              <a href='/book-ticket' class="cardName">Book now</a>
              <img class="img" src={vip} alt="Vip-bus"/>
            </div>
            
          </div>

          <div class="card">
            <div>
              <div class="number">Accra to Tamale 120GHS</div>
              <a href='/book-ticket' class="cardName">Book now</a>
              <img class="img" src={stc} alt="Vip-bus"/>
            </div>
            
          </div>

          <div class="card">
            <div>
              <div class="number">Accra to Lagos 170GHS</div>
              <a href='/book-ticket' class="cardName">Book now</a>
              <img class="img" src={m2express} alt="Vip-bus"/>
            </div>
            
          </div>

          <div class="card">
            <div>
              <div class="number">Accra to Sunyani 90GHS</div>
              <a href='/book-ticket' class="cardName">Book now</a>
              <img class="img" src={guo} alt="Vip-bus"/>
            </div>
            
          </div>
        </div>
        <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Copyright ©2022 Created by Kelvin Awuku-Boateng
    </Footer>
    </div>
  )
}
