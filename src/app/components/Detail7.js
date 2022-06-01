import React from 'react'
import styledComponents from 'styled-components'

function Detail(props) {

  
 
  return (
    <Container onClick={()=> console.log(props)}>
               <Background key={props.key}>
                <img src={props.img[7].img} alt={props.img[7].title}></img>
            </Background>
           
            <Content>
                <ImageTitle>
                    <img src={props.img[7].imgTitle} alt=''></img>
                </ImageTitle>
              
                <Controls>
                    <PlayBtn>
                        <img src='/images/play-icon-black.png' alt=''></img>
                        <span>PLAY</span>
                    </PlayBtn>
                    <a href={props.img[7].trailer} target={'_blank'} rel={'noreferrer'}><TrailerBtn>
                    <img src='/images/play-icon-white.png' alt=''></img>
                        <span>TRAILER</span>
                    </TrailerBtn></a>
                    <AddBtn>
                        <span>+</span>
                    </AddBtn>
                    <GroupBtn>
                        <img src='/images/group-icon.png' alt=''></img>
                    </GroupBtn>
                </Controls>
                <Subtitles>
                <p>{props.img[7].year} ‧ </p> <p>{props.img[7].duration} ‧ </p> <p>{props.img[7].director} </p> 
                </Subtitles>
                <Description>
                {props.img[7].description}
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
display:flex;
align-items:center;

   
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
margin-top:8em;

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
@media(max-width:425px){
  
       display:none;
  
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
margin-bottom:2em;
display:inline-flex;
p{
    background-color:var(--main-bkg);
    opacity:.7;
    

}


`

const Description = styledComponents.div`
line-height:1.4;
font-size:1.3rem;
padding:1em .5em;
background-color:var(--main-bkg);
opacity:.7;
border-radius:10px;
width:100%;
margin-bottom:4em;

@media(max-width:425px){
    width:375px;
    
}
@media(max-width:375px){
    width:340px;
    
    
}

`
