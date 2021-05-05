import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      radio: "",
      address: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "", radio: "", address: "" });
  }

  handleChange = (event) => {
    const {value, name} = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-up">
        <h2>New to PenPal?</h2>
        <span>Sign up here!</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          <span>What is your preferred penpal experience? (You may change this later.)</span>
          <FormInput 
            name="radio"
            type="radio"
            handleChange={this.handleChange}
            value="Online"
            label="Online - Email"
            required
          />
          <FormInput 
            name="radio"
            type="radio"
            handleChange={this.handleChange}
            value="Traditional"
            label="Traditional - Physical Address"
            required
          />
          {
            (this.state.radio === "Traditional") ? 
            <FormInput 
              name="address"
              type="text"
              handleChange={this.handleChange}
              value={this.state.address}
              label="Address"
              required
            /> : <div></div>
          }
          
          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;