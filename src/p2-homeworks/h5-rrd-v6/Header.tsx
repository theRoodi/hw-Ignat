import React from 'react'
import {NavLink} from 'react-router-dom';
import style from './HW5.module.css'


function Header() {
    return (
        <div className={style.move}>
            {/*// add NavLinks*/}
            <div className={style.links}>
                <NavLink to={'/pre-junior'}>pre-junior</NavLink>
                <NavLink to={'/junior'}>junior</NavLink>
                <NavLink to={'/junior-plus'}>junior-plus</NavLink>
                <div className={style.block}></div>
            </div>
        </div>
    )
}

export default Header
