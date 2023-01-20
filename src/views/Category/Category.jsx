import React from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../../components/ItemListContainer'

const Category = () => {

    const {category} = useParams()

    return (
        <ItemListContainer filter={category}/>
    )
}

export default Category