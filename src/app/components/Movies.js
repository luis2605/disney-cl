import React from 'react'
import styledComponents from 'styled-components'

function Movies() {
  return (
    <Container>
       <h4> Recommended for You</h4>
       <Content>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D81CFC0AB36129E290B4A78224FBD4CE0FC6FFABF59539B0FDD9D844F25EBA4/scale?width=1200&aspectRatio=1.78&format=jpeg' alt=''></img>
            </Wrap>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D81CFC0AB36129E290B4A78224FBD4CE0FC6FFABF59539B0FDD9D844F25EBA4/scale?width=1200&aspectRatio=1.78&format=jpeg' alt=''></img>
            </Wrap>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D81CFC0AB36129E290B4A78224FBD4CE0FC6FFABF59539B0FDD9D844F25EBA4/scale?width=1200&aspectRatio=1.78&format=jpeg' alt=''></img>
            </Wrap>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D81CFC0AB36129E290B4A78224FBD4CE0FC6FFABF59539B0FDD9D844F25EBA4/scale?width=1200&aspectRatio=1.78&format=jpeg' alt=''></img>
            </Wrap>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D81CFC0AB36129E290B4A78224FBD4CE0FC6FFABF59539B0FDD9D844F25EBA4/scale?width=1200&aspectRatio=1.78&format=jpeg' alt=''></img>
            </Wrap>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D81CFC0AB36129E290B4A78224FBD4CE0FC6FFABF59539B0FDD9D844F25EBA4/scale?width=1200&aspectRatio=1.78&format=jpeg' alt=''></img>
            </Wrap>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D81CFC0AB36129E290B4A78224FBD4CE0FC6FFABF59539B0FDD9D844F25EBA4/scale?width=1200&aspectRatio=1.78&format=jpeg' alt=''></img>
            </Wrap>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D81CFC0AB36129E290B4A78224FBD4CE0FC6FFABF59539B0FDD9D844F25EBA4/scale?width=1200&aspectRatio=1.78&format=jpeg' alt=''></img>
            </Wrap>

       </Content>
        
    </Container>
  )
}

export default Movies

const Container = styledComponents.div`

padding:0 0 3em 0;

h4{
    margin:2em 0;
}

`
const Content=styledComponents.div`
 display:grid;
 grid-gap:25px;
 grid-template-columns: repeat( 4, minmax(0, 1fr));

`
const Wrap = styledComponents.div`
border-radius:10px;
overflow:hidden;
border:3px solid var(--border-normal);
box-shadow:var(--shadow-effect);
transition:all 250ms cubic-bezier(.25, .46, .45, .94) 0s;
img{
    width:100%;
  
    object-fit:cover;

}

&:hover{
    transform:scale(1.05);
    border:3px solid var(--border-hvr);
    box-shadow:var(--bigger-shadow-effect);

}


`