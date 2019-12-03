import React from 'react'
import preloader_gif from './../assets/preloader/5.gif'
import c from './Preloader.module.css'

const Preloader = props => {
    return (
        <div className={c.preloader}>
            <img src={preloader_gif} alt=""/>
        </div>
    )
}

export default Preloader;