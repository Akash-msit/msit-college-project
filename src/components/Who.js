import React from 'react'
import './Who.css';
import image from './img/c10.jpg'
import { useNavigate } from 'react-router-dom';


const Who = () => {
  const navigate = useNavigate();

  
    
  return (
    <div className='App'>
      <div style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"100%",width: '100%',
	height: 750}}>
        <div className='bg'>
            <h2 className='h2'>WELCOME TO OUR COLLEGE CONNECT</h2>
            <h1 className='h1'> YOU ARE</h1>
            <button class="btn btn-success text-white btn-lg">
				<i class="fa fa-user"></i>
				<b>TEACHER</b></button>{'               '}
                <button class="btn btn-primary text-white btn-lg" onClick={()=>navigate("/login")}>
                <b>STUDENT</b><i class="fa fa-graduation-cap"></i></button>
                
        </div>
    </div>
    </div>
  )
}

export default Who