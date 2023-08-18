import React from 'react'
import { useState } from 'react'
import './NavBar.scss'
import { Tab } from './navBarStyle'

const TabBar = () => {
  const tempData=['wallpapers', '3drenders','traveles', 'nature' ]
  const [isSelected, setIstselected]=useState('Editorial')
  return (
    <div className='TabBarCOntainer'>
      <Tab
      onClick={()=>setIstselected('Editorial')}
      isSelected={isSelected.toLowerCase().match('Editorial'.toLowerCase())}
      >Editorial</Tab>
      <Tab
      onClick={()=>setIstselected('Following')}
      isSelected={isSelected.toLowerCase().match('Following'.toLowerCase())}
      >Following</Tab>
      <hr/>
      {tempData.map((item , index)=>{
      return <Tab
      key={index}
      onClick={()=>setIstselected(item)}
      isSelected={isSelected.toLowerCase().match(item.toLowerCase())}
      
      >{item}</Tab>})}      
    </div>
  )
}

export default TabBar
