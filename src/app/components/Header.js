import React from 'react'
import styledComponents from 'styled-components'

function Header() {
  return (
    <Nav>
        <Logo src='./images/logo.svg'/>
        <NavMenu>
            <a href='/'> 
             <img src='./images/home-icon.svg' alt='#'></img>
             <span>HOME</span>
            </a>
            <a href='/login'> 
             <img src='./images/search-icon.svg' alt='#'></img>
             <span>SEARCH</span>
            </a>
            <a href='/login'> 
             <img src='./images/watchlist-icon.svg' alt='#'></img>
             <span>WATCHLIST</span>
            </a>
            <a href='/login'> 
             <img src='./images/original-icon.svg' alt='#'></img>
             <span>ORIGINALS</span>
            </a>
            <a href='/login'> 
             <img src='./images/movie-icon.svg' alt='#'></img>
             <span>MOVIES</span>
            </a>
            <a href='/login'> 
             <img src='./images/series-icon.svg' alt='#'></img>
             <span>SERIES</span>
            </a>


        </NavMenu>

    

        
        
    </Nav>
  )
}

export default Header
const Nav =styledComponents.nav`
height:70px;
background:var(--bkg);
display:flex;
align-items:center;
justify-content:space-between;
padding:0 1.5em;


`
const Logo =styledComponents.img`
width:80px;


`
const NavMenu=styledComponents.div`
display:flex;
padding:1em .5em;
a{
    display:flex;
    align-items:center;
    padding-right: 1em;

    img{
        height:20px;
       margin-right:0.5em;
    }
    span{
        font-size:.8rem;
        letter-spacing:1.42px;
       

        &:after{
            content:"";
            height:2px;
            background:var(--default-ftn-color);
            display:invisible;
            transform:scaleX(0) translate(0,10px );
            transform-origin:left center;
            transition:all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
         
            
        
     }   
    }
}

a:hover{
 span{
    &:after{
        display:block;
        transform:scaleX(1)translate(0,15px );
        opacity:.5;
       
       
        
    }
}
}

@media(max-width:768px){
 

    a span{
        display:none;
    }
   a{
       padding-right:.5em;
   }
    
}


`

