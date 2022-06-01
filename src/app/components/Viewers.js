import React from 'react'
import styledComponents from 'styled-components'

function Viewers() {
  return (

   <Container>
       <Wrap>
            <img src='./images/viewers-disney.png' alt='' ></img>
       </Wrap>
       <Wrap>
            <img src='./images/viewers-marvel.png' alt='' ></img>
       </Wrap>
       <Wrap>
            <img src='./images/viewers-national.png' alt='' ></img>
       </Wrap>
       <Wrap>
            <img src='./images/viewers-pixar.png' alt='' ></img>
       </Wrap>
       <Wrap>
            <img src='./images/viewers-starwars.png' alt='' ></img>
       </Wrap>



   </Container>
  )
}

export default Viewers

const Container=styledComponents.div`
margin:4em 0 3em 0;

display:flex;

@media (max-width:375px){

     flex-direction:column;
}

@media (max-width:425px){

    flex-direction:column;
     
}



`

const Wrap = styledComponents.div`
border-radius:10px;
border:3px solid var(--border-normal);
margin: 0 1em;
box-shadow: var(--shadow-effect);
transition:all 250ms cubic-bezier(.25, .46, .45, .94) 0s;

 img{
     width:100%;
     height:100%;
     object-fit:cover;
 }
 &:hover{
 transform:scale(1.05);
 border:3px solid var(--border-hvr);
box-shadow:var(--bigger-shadow-effect);

 }
 @media (max-width:375px){
    
          width:60%;
          height:60%;
          margin:.5em auto;
    
     
}

@media (max-width:425px){

     margin:.5em auto ;
     width:40%;
     height:40%;
     
}
`