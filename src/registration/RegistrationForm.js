import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { setUsername, setPassword, setConfirmPassword, setMessage, setRegistered, selectRegistration } from '../store/registrationSlice'

const RegistrationForm = () => {
    const { username, password, confirmPassword, message, registered } = useSelector(selectRegistration)
    const dispatch = useDispatch()
    const handleUsernameChange = (event) => {
        dispatch(setUsername(event.target.value))
    }
    const handlePasswordChange = (event) => {
        dispatch(setPassword(event.target.value))
    }
    const handleConfirmPasswordChange = (event) => {
        dispatch(setConfirmPassword(event.target.value))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if ( !username || !password || !confirmPassword ) {
            dispatch(setMessage('Заполните все поля'))
            return
        }
        if (password !== confirmPassword) {
            dispatch(setMessage('Пароли не совпадают'))
            return
        }
        if (registered) {
            dispatch(setMessage('Пользователь уже существует'))
            return
        }
        dispatch(setMessage('Пользователь успешно зарегистрирован'))
        dispatch(setRegistered(true))
    }
    return (
        <div>
            <h2>Форма регистрации</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange}/>
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange}/>
                <Button type="submit" variant="success">Register</Button>
            </form>
        </div>
    )
}
export default RegistrationForm;