import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

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
    {name, setNameCallback, onPressEnter, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input// need to fix with (?:)

    return (
        <div className={s.box}>
            <div className={s.column}>
                <SuperInputText value={name}
                                onChange={setNameCallback}
                                className={inputClass}
                                onKeyPress={onPressEnter}
                                error={error}/>
                {/*<input value={name}*/}
                {/*       onChange={setNameCallback}*/}
                {/*       className={inputClass}*/}
                {/*       onKeyPress={onPressEnter}/>*/}
                {/*<div className={s.error}>{error}</div>*/}
            </div>
            <SuperButton className={s.button} onClick={addUser} disabled={!name}>add</SuperButton>
            <div className={s.count}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
