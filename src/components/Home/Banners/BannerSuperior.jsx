import React from 'react'
import banners from '../../../exports/banners.js'
import './BannerSuperior.css'
import {motion} from 'framer-motion'


const BannerSuperior = () => {
    return (
        <motion.div className='slider-container'>
            <motion.div className='slider' drag='x' 
            dragConstraints={{right: 0, left:-2123}} >
            {banners.map(image => (
                <motion.div className='item'>
                    <img src={image} alt="" />
                </motion.div>
            ))}
        </motion.div>
        
    </motion.div>
    )
}

export default BannerSuperior