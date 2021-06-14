import React from 'react'
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add'


function SideIcons() {
  return (
    <Wrapper>

      <img src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" alt="" />
      <img src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" alt="" />
      <img src="https://www.gstatic.com/companion/icon_assets/tasks2_2x.png" alt="" />
      <img src="https://www.gstatic.com/companion/icon_assets/contacts_2x.png" alt="" />
      <hr />
      <AddIcon/>
    </Wrapper>


  )
}

export default SideIcons



const Wrapper = styled.div`
display: grid;
grid-template-rows:repeat(4, 50px) 1px 50px;
place-items: center;
border-left: 1px solid lightgray;

img{
  width: 100%;
  max-height: 22px;
  object-fit: contain;
}

hr{

  width: 60%;
}
`
