import React from 'react'
import styledComponents from 'styled-components'
import slider from 'react-slick/lib/slider';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
  
    let settings = {
  dots : true,
  infinite : true,
  speed: 500,
  slidesToShow:1,
  slidesToScroll: 1,
  autoplay:true,


    }
  
  
    return (
    <Carrousel {... settings}>
        <Wrap>
            <img src='/images/slider-badging.jpg' alt=''></img>
        </Wrap>
        <Wrap>
            <img src='/images/slider-badag.jpg' alt=''></img>
        </Wrap>
        <Wrap>
            <img src='/images/iron-man.webp' alt=''></img>
        </Wrap>
        <Wrap>
            <img src='/images/marvel.webp' alt=''></img>
        </Wrap>
        <Wrap>
            <img src='/images/obi-one.jpg' alt=''></img>
        </Wrap>
        <Wrap>
            <img src='/images/slider-scale.jpg' alt=''></img>
        </Wrap>
        <Wrap>
            <img src='/images/slider-scales.jpg' alt=''></img>
        </Wrap>
        <Wrap>
            <img src='/images/eternals.webp' alt=''></img>
        </Wrap>
    </Carrousel>
  )
}

export default ImgSlider

const Carrousel =styledComponents(slider)`
padding-top:2.5em;


.slick-list{                             // modifiying elements from  React-slick
    overflow:visible;
}
.slick-arrow{                             // modifiying elements from  React-slick
    z-index:2;
   
}

li.slick-active button::before{
   
    color:var(--default-ftn-color);
   

}

`
const Wrap =styledComponents.div`
img{
    
    width:100%;
    height:100%;
    border-radius:4px;
    border:4px solid transparent;
    box-shadow: rgb(38, 57, 77) 0px 10px 30px -10px;
    transition-duration: 300ms;

    &:hover{
        border:4px solid var(--border-hvr)
    }
}


`