import React, { useState, useEffect } from 'react'

import ButtonIcon from './ButtonIcon'


const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function Person() {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState(null)
  const [title, setTitle] = useState("name")
  const [value, setValue] = useState('random person')
  const getPerson=async()=>{
    const response=await fetch(url)
    const data=await response.json()
    const person=data.results[0]
    const {phone,email}=person;
    const {large:image}=person.picture
    const {login:{pasword} }=person;
    const {first,last}=person.name;
    const {dob:{age}}=person;
    const {street:{number,name},}=person.location;
    const newPerson={
      image,
      phone,
      email,
      pasword,
      age,
      street:`${number} ${name}`,
      name:`${first} ${last}`
    }
    setPerson(newPerson)
    setLoading(false)
    setTitle("name")
    setValue(newPerson.name)

  }
  useEffect(()=>{
    getPerson()
  },[]);
  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label
      setTitle(newValue)
      setValue(person[newValue])
    }
  }
  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block '>
        <div className='container'>
          <img src={ (person && person.image)|| defaultImage} 
          alt="random user"
           className='user-img'/>
           <p className='user-title'> my {title} is</p>
           <p className='user-value'> {value} </p>
           <ButtonIcon handleValue={handleValue}/>
           <button className='btn' type='button' onClick={ getPerson}>
            {loading?"laoding...":"random user"}
           </button>
        </div>
       
      </div>
    </main>
  )
}

export default Person
