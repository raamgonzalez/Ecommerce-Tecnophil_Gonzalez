import React from 'react'
import { useParams } from 'react-router-dom';

import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import '../../layout/Layout.css'


const ItemListContainer = () => {
	const {id} = useParams();

    return ( 
		<ItemList item ={ id }/>

    )
}

export default ItemListContainer