import React from 'react'
import './LoggedIn.css'
import avatar from '../Data/Image/avatar.jpg'
import { MdAccountCircle } from 'react-icons/md'
const LoggedIn = (props) => {
  if(props.IsLoggedIn){
    return <div className='LoggedIn'>{props.userName}<img src={avatar} alt='avatar' className='logo'/></div>
  }else{
    return <div className='dlogin'><MdAccountCircle size={30}/>Account</div>
  }
}

export default LoggedIn