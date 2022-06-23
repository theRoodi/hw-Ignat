import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import s from './HW3.module.css'
import {v1} from 'uuid';

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const user = {
            _id: v1(),
            name: name,
        }
        setUsers([user, ...users]) // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            {/*<div className={s.column}>*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            {/*</div>*/}


        </div>
    )
}

export default HW3
