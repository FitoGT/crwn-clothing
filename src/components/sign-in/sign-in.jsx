import React from 'react'
import './sign-in.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault()
        const {email, password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.log(error.message)
        }
        this.setState({ email: "", password: "" })
    }
    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label="email"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogle={true}>
                            Sign In With Google
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}
export default SignIn