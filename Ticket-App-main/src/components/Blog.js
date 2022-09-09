import React from 'react'
import './Blog.css';
import { Layout } from 'antd';

const { Footer } = Layout;

export default function Blog() {
  return (
    <div><div>
    <p className='title'>Blog</p>
     <div class="cardBox">
        <div class="card">
          <div>
            <div class="number">GIZ Scholarships</div>
            <a href='#' class="cardName">Apply now</a>
            
          </div>
          
        </div>

        <div class="card">
          <div>
            <div class="number">New Vacancies</div>
            <a href='#' class="cardName">Apply now</a>
        
          </div>
          
        </div>

        <div class="card">
          <div>
            <div class="number">Openlabs Courses</div>
            <a href='#' class="cardName">Read more</a>
            
          </div>
          
        </div>
        <div class="card">
          <div>
            <div class="number">UG Admissions</div>
            <a href='#' class="cardName">Read more</a>
            
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

