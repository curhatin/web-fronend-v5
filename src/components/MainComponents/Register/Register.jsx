import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import axios from 'axios'
import { Link } from 'react-router-dom'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  handleRegister = () => {
      axios.post("https://curhatin.herokuapp.com/account/register",{
          fname: this.state.fname,
          email: this.state.email,
          password: this.state.password
      })
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err))
      
}
onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}


  render() {
    return (
      <div>
        <div id="login">
          <div className="container-login">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4" />
                <div className="col-md-8">
                  <div id="register-right">
                    <div id='login-form'>
                    <Link to="/" >
                      <a href='#'>
                        <p>HOME</p>
                      </a>
                      </Link>
                      <h4>
                        {" "}
                        Get <span>STARTED</span>{" "} <br/>
                      </h4>
                      <p>It's all free</p>
                      <div className="row">
                        <div className="col-md-12">
                          <div class="form-group">
                            <input
                            value={this.state.fname}
                            onChange={this.onChange}
                            name="fname"
                            placeholder="FUll NAME"
                            type="text"
                            class="form-control"
          
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div class="form-group">
                            <input
                              value={this.state.email}
                              onChange={this.onChange}
                              name="email"
                              placeholder="EMAIL.."
                              type="text"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div class="form-group">
                            <input
                              value={this.state.password}
                              onChange={this.onChange}
                              name="password"
                              placeholder="PASSWORD.."
                              type="text"
                              class="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div id="login-btn">
                        <button onClick={this.handleRegister} type="button" className="btn btn-outline-secondary">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
