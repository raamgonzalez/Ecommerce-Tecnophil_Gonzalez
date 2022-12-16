import React from 'react'
import banners from '../../../exports/banners.js'
import './BannerSuperior.css'
import {motion} from 'framer-motion'


const BannerSuperior = () => {
    return (
        <motion.div className='slider-container my-6'>
            <motion.div className='slider' drag='x' 
            dragConstraints={{right: +500, left:-500}} >
            {banners.map(image => (
                <motion.div className='item'>
                    <img className='shadow-red-700 shadow-2xl hover:scale-125' src={image} alt="" />
                </motion.div>
            ))}
        </motion.div>
        
    </motion.div>
    )
}

export default BannerSuperior