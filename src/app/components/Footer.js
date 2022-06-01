import React from 'react'
import styledComponents from 'styled-components'

function Footer() {
  return (
    
    <Container>
        <Logo src='/images/logo.svg'/>
        <Infos>
            <a href='/'>Privacy Policy</a>
            <a href='/'>Cookies Policy</a>
            <a href='/'>UK & EU Privacy Rights</a>
            <a href='/'>Imprint</a>
            <a href='/'>Subscriber Agreement</a>
            <a href='/'>Help</a>
            <a href='/'>Supported Devices</a>
            <a href='/'>Interest-based Ads</a>
            <a href='/'>Manage Preferences</a>
        </Infos>
        <a href='/'>Ⓒ Disney. All rights reserved.</a>
    </Container>
  )
}

export default Footer


const Container = styledComponents.div`


background:var(--bkg);
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
padding:2em 1.5em;
font-size:.7rem;





`
const Logo =styledComponents.img`
width:80px;
margin-bottom:1.5em;


`
const Infos=styledComponents.div`

margin-bottom:2em;
display:flex;
@media(min-width:768px){
    font-size:.5rem;
}
@media(max-width:425px){
    flex-direction:column;
    align-items:center;
    font-size:.5rem;

}
a{
    margin:0.5em;
  
&:hover{
    color:var(--border-hvr);
}
}
`