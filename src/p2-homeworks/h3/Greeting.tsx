import React, {ChangeEvent,KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onPressEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback,onPressEnter , addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput: s.input// need to fix with (?:)

    return (
        <div className={s.box}>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       className={inputClass}
                       onKeyPress={onPressEnter}/>
                <div className={s.error}>{error}</div>
            </div>
            <button className={s.button} onClick={addUser} disabled={!name}>add</button>
            <div className={s.count}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
