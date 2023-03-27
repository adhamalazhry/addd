import React from 'react'
import {
    FaEnvelopeOpen,
    FaUser,
    FaCalendarTimes,
    FaMap,
    FaPhone,
    FaLock,
  } from 'react-icons/fa'

const ButtonIcon = ({handleValue}) => {
  return (
    <div className='value-list'>
            <button className='icon' 
            data-label="name"
            onMouseMove={handleValue}
            >
              <FaUser/>
            </button>
            <button className='icon' 
            data-label="email"
            onMouseMove={handleValue}
            >
              <FaEnvelopeOpen/>
            </button>
            <button className='icon' 
            data-label="age"
            onMouseMove={handleValue}
            >
              <FaCalendarTimes/>
            </button>
            <button className='icon' 
            data-label="street"
            onMouseMove={handleValue}
            >
              <FaMap/>
            </button>
            <button className='icon' 
            data-label="phone"
            onMouseMove={handleValue}
            >
              <FaPhone/>
            </button>
            <button className='icon' 
            data-label="password"
            onMouseMove={handleValue}
            >
              <FaLock/>
            </button>
           </div>
  )
}

export default ButtonIcon
