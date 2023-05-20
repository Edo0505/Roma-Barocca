import React from 'react'
import 'react-slideshow-image/dist/styles.css';
import {Fade,Zoom,Slide} from 'react-slideshow-image';
import slideImage from './dataImage';
import TextImage from './TextImage';
function ImageSlider() {
  return (
    <div className='mx-auto'>
        <Fade duration={1500} arrows={false} infinite={true}> 
            {slideImage.map((image,index)=>(
                <div key={index} className='p-5'>
                    <div className='wImg flex bg-cover justify-center' style={{backgroundImage:`url(${image.url})`}}>                  
                      <TextImage/>      
                    </div>
                </div>
            ))}
        </Fade>
    </div>
  )
}

export default ImageSlider;