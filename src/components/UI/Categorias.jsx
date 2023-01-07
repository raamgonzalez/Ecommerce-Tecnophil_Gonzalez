import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptop, faMobile, faTv} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Categorias = (item) => {

  const navigate = useNavigate();
  const {category} = item
  
  const categorySelector = (category) => {
    if(category === 'notebooks'){
      return <FontAwesomeIcon className="category__icons text-neutral-100 text-2xl px-4 py-2 rounded-lg ml-2"  icon={faLaptop} />
    }else if(category === 'moviles'){
      return <FontAwesomeIcon className="category__icons text-neutral-100 text-2xl px-4 py-2 rounded-lg ml-2"  icon={faMobile} />
    }else{
      return <FontAwesomeIcon className="category__icons text-neutral-100 text-2xl px-4 py-2 rounded-lg ml-2"  icon={faTv} />
    }
  }

  return (
    <>
      {categorySelector(category)}
    </>
  )
}

export default Categorias