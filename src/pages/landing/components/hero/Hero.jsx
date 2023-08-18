import React ,{useEffect, useState} from 'react'
import { MainContainer } from '../../../../global/styles/globalStyles'
import api from '../../../../utils/api'
import './Hero.scss'

const Hero = () => {
  const [background,setBackground]=useState('');

  useEffect(()=>{

    api.get('photos/random')
    .then((res)=>{
      // console.log(res.data)
      setBackground(res.data.links.download)
    })
    .catch((err)=>{
      console.log(err);
    })

  },[])

  return (
    <MainContainer className='heroContainer'
    style={{
      backgroundImage:`url(${background})`,
    }}
    >
        <div>
     <h1> Unsplash</h1>
     <span>
The internet’s source for visuals.
<br/>
Powered by creators everywhere.
</span>
</div>
    </MainContainer>
  )
}

export default Hero
