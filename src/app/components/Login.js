import React from 'react'
import styledComponents from 'styled-components'

function login() {

    
  return (
    <Container >

       <ContainerText >
            <Icons >
                <img src='/images/cta-logo-one.svg'alt=''></img>
            </Icons>
            <BtnGet >
               <span>Get all There</span> 
            </BtnGet>
            <Description>
                <p>Get Premier Acces to Raya and the last Dragon forn additional fee with a Disney+ subscription.</p>
                <p>As of 03/26/22 ,the price of Disney+ and the Disney Bundle will increase by 1 $</p>
            </Description>
            <Include>
                    <Wrap>
                    <img src='/images/viewers-disney.png' alt='' ></img>
                     </Wrap>
                     <Wrap>
                    <img src='/images/viewers-marvel.png' alt='' ></img>
                     </Wrap>
                     <Wrap>
                    <img src='/images/viewers-national.png' alt='' ></img>
                    </Wrap>
                    <Wrap>
                    <img src='/images/viewers-pixar.png' alt='' ></img>
                    </Wrap>
                    <Wrap>
                    <img src='/images/viewers-starwars.png' alt='' ></img>
                    </Wrap>
            </Include>

       </ContainerText>

    </Container>
  )
}

export default login


const Container = styledComponents.div`
background:url("/images/login-background.jpg") center center / cover
        no-repeat fixed;



`
const ContainerText=styledComponents.div`
min-height:calc(100vh - 70px);
padding:0 calc(3.5vw + 3em);
margin:auto 0;

display:flex;
flex-direction:column;
justify-content:center;





`
const Icons = styledComponents.div`
margin:0 2em 1em 2em;
 display:flex;
 justify-content:center;
img{
    
    max-width:500px;
}
@media(min-width:375px){
    width:100%;
   
   }


`
const BtnGet= styledComponents.button`
max-width:600px;
margin:0 auto;
padding:0 3em;
display:flex;
justify-content:center;
color:var(--white);
text-transform:uppercase;
background:var(--blue-btn);
border:none;
border-radius:4px;
cursor:pointer;


&:hover{
    background:var(--bkg);
    color:var(--default-ftn-color);
    border:1px solid var(--default-ftn-color);
    opacity:0.7;

}


span{
    padding:1em 2em;


}

@media(min-width:375px){
 width:100%;

}
`
const Description = styledComponents.div`
display:flex;
flex-direction:column;
margin:1em auto;
max-width:600px;
p{
    font-size:.7rem;
    text-align:center;
}


`
const Include = styledComponents.div`
display:inline-flex;
flex-wrap:wrap;
justify-content:center;
margin:0 2em;
gap:0px;




`
const Wrap = styledComponents.div`
img{
    width:120px;
}

`