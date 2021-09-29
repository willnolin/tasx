import React, { useState } from 'react';
import './css/Login.css'
const Login = (props) => {
  const { handleLogin } = props;
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  
  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div className="container login-form mt-6">
      <form className="" onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData)
      }}>
      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
            <input className="input" type="text"
              name="username" placeholder="Enter username"
              value={username} onChange={handleChange} />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        {/* <p className="help is-success">This username is available</p> */}
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control has-icons-left has-icons-right">
            <input className="input" type="password"
              name="password" placeholder="Enter password"
              value={password} onChange={handleChange} />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        {/* <p className="help is-danger">Password must be 6 characters</p> */}
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
      </form>
        {/* <label htmlFor="username">
        username:
        </label>
          <input type="text" name="username" value={username} onChange={handleChange} />
        <label htmlFor="password">
        password:
        </label>
          <input type="password" name="password" value={password} onChange={handleChange} />
        <button>Submit</button> */}
    </div>
  );
}

export default Login;
