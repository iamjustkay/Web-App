import React from 'react'
import './Events.css';
import pp from '../assets/pp.jpg';
import fp from '../assets/fp.jpg';
import bp from '../assets/bp.jpg';
import { Layout } from 'antd';

const { Footer } = Layout;

export default function Blog() {
  return (
    <div><div>
    <p className='title'>Events</p>
     <div class="cardBox">
        <div class="card">
          <div>
            <div class="number">Pool Party</div>
            <img className='detail' src={pp} alt="pool-party"/>
            
          </div>
          
        </div>

        <div class="card">
          <div>
            <div class="number">Food Party</div>
            <img className='detail2' src={fp} alt="food-party"/>
        
          </div>
          
        </div>

        <div class="card">
          <div>
            <div class="number">Beach Party</div>
            <img className='detail3' src={bp} alt="beach-party"/>
            
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
</div>
  )
}

