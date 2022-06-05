import React from 'react'
import style from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={style.task}>
            {props.affair.name} {props.affair.priority}
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
