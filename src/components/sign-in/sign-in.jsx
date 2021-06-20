import React, { useState } from 'react'
import './sign-in.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error.message)
        }
        setEmail('')
        setPassword('')
    }
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
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
                <div className="buttons">
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogle>
                        Sign In With Google
                    </CustomButton>
                </div>

            </form>
        </div>
    )

}
export default SignIn