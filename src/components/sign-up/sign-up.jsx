import React, { useState } from 'react'
import './sign-up.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

const SignUp = () => {

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async event => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert('password dont match')
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            setDisplayName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            await createUserProfileDocument(user, { displayName })

        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="sign-up">
            <h2>I dont have an account</h2>
            <span>sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    label="displayName"
                    value={displayName}
                    required
                    handleChange={(e)=>setDisplayName(e.target.value)}
                />
                <FormInput
                    type="email"
                    name="email"
                    label="email"
                    value={email}
                    required
                    handleChange={(e)=>setEmail(e.target.value)}
                />
                <FormInput
                    type="password"
                    name="password"
                    label="password"
                    value={password}
                    required
                    handleChange={(e)=>setPassword(e.target.value)}
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    label="confirmPassword"
                    value={confirmPassword}
                    handleChange={(e)=>setConfirmPassword(e.target.value)}
                />
                <div className="buttons">
                    <CustomButton type="submit">
                        Sign Up
                    </CustomButton>
                </div>

            </form>
        </div>
    )

}

export default SignUp