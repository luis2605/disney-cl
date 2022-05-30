import React from 'react'
import styledComponents from 'styled-components'

function Detail() {
  return (
    <Container>
            <Background>
                <img src='https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg' alt=''></img>

            </Background>
            <Content>
                <ImageTitle>
                    <img src='https://cdn.themovieseries.net/cover/bao-large.png' alt=''></img>
                </ImageTitle>
                <Controls>
                    <PlayBtn>
                        <img src='/images/play-icon-black.png' alt=''></img>
                        <span>PLAY</span>
                    </PlayBtn>
                    <TrailerBtn>
                    <img src='/images/play-icon-white.png' alt=''></img>
                        <span>TRAILER</span>
                    </TrailerBtn>
                    <AddBtn>
                        <span>+</span>
                    </AddBtn>
                    <GroupBtn>
                        <img src='/images/group-icon.png' alt=''></img>
                    </GroupBtn>
                </Controls>
                <Subtitles>
                        2018 - 7min - animation 
                </Subtitles>
                <Description>
                Bao is a 2018 American computer-animated short film written and directed by Domee Shi and produced by Pixar Animation Studios. It is the first Pixar short film to be directed by a female director.[1] It was screened at the Tribeca Film Festival before being released with Incredibles 2 on June 15, 2018. The film is about an aging and lonely Chinese Canadian mother suffering from empty nest syndrome, who receives an unexpected second chance at motherhood when she makes a steamed bun (baozi) that comes to life. The film won the Academy Award for Best Animated Short Film at the 91st Academy Awards.
                </Description>
            </Content>

    </Container>
  )
}

export default Detail

const Container = styledComponents.div`

min-height:calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;

   
`
const Background = styledComponents.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1;
opacity:.9;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

`
const Content =styledComponents.div`
display:flex;
flex-direction:column;

`

const ImageTitle = styledComponents.div`
height:30vh;
max-height:270px;
min-height:220px;
width:35vw;
max-width:300px;
min-width:250px;
img{
    width:100%;
    height:100%;
    object-fit:contain;
  
    
}
`
const Controls = styledComponents.div`
margin:1em 0;
display:flex;
align-items:center;


`

const PlayBtn = styledComponents.button`
border-radius:4px;
padding:0 1.5em;
margin-right:1.3em;
font-size:1rem;
display:flex;
align-items:center;
height:3.5em;
background-color:var(--white);
border:none;
letter-spacing:1.8px;

&:hover{
    background:var(--bkg);
    color:var(--default-ftn-color);
    border:3px solid var(--default-ftn-color);
    img{
        filter:invert(100%);
    }
}



`
const TrailerBtn = styledComponents(PlayBtn)`
background-color:var(--bkg);
color:var(--default-ftn-color);
opacity:0.5;
border:2px solid var(--default-ftn-color);

&:hover{
    background-color:var(--default-ftn-color);
    color:var(--bkg);
    border:2px solid var(--bkg);
 img{
     filter:invert(100%);
 }
}

`
const AddBtn = styledComponents.button`
width:4em;
height:4em;
display:flex;
align-items:center;
justify-content:center;
border-radius:100%;
border:none;
margin:0 1em 0 0;
background-color:var(--bkg);
opacity:0.7;
border:2px solid var(--default-ftn-color);

span{
    font-size:2.5rem;
    color:var(--default-ftn-color);
}

&:hover{
    background-color:var(--white);
    border:2px solid var(--bkg);
    span{
        color:var(--bkg);
    }
   
}


`
const GroupBtn = styledComponents(AddBtn)`
&:hover{
    img{
        filter:invert(100%);
    }
}

`
const Subtitles = styledComponents.div`
color:var(--border-hvr);
font-size:.9rem;
min-height:1.2em;
margin-top:1em;
margin-bottom:.5em;

`

const Description = styledComponents.div`
line-height:1.4;
font-size:1.3rem;

`
