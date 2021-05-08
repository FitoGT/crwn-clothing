import React from 'react'
import './sign-in.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button'
class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault()
        this.setState({ email: "", password: "" })
    }
    handleChange = event => {
        const { value, name } = event.target
        this.setState({[name]:value})
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
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn