import React from 'react'
import styledComponents from 'styled-components'


function Movies(props) {



const movieCard = props.img.map(item=>{

 return(
     <Wrap key={item.key}>
        <a href={`/${item.detail}`}> <img src={item.img} alt={item.title}></img></a>

     </Wrap>
 )


})

  return (
    <Container>
       <h4> Recommended for You :</h4>
       <Content>
           {movieCard}
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
    height:100%;
  
    object-fit:cover;


}

&:hover{
    transform:scale(1.05);
    border:3px solid var(--border-hvr);
    box-shadow:var(--bigger-shadow-effect);

}


`