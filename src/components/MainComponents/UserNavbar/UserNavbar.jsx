import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../UserNavbar/Style.css";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../../actions/authActions'
import {searchDataPost} from '../../../actions/postActions'


class UserNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  handleOnChange = async e => {
    this.setState({
        [e.target.name] : e.target.value
    })
   await this.props.searchDataPost({
      message: this.state.message,
      token: this.props.token
    })
  }
  render() {
   
    return (
      <div>
        <div id='UserNavbar'>
          <div className='user-nav-top'>
            <div id='main-nav' className="container-fluid">
              <div className="row navbar">
                <div className="col-md-12">
                <div id='user-navbar-wrapper'>
                <div id="form-search">
                            <input
                              type="text"
                              className="form-control"
                              name="message" 
                              value={this.state.message} 
                              onChange={this.handleOnChange}
                              placeholder="Search ..... "
                            />
                          </div>

                  <ul className="nav">
                    <li className="nav-item">
                      <Link to="/PeopleStories" className="nav-link active" >
                        People stories
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link  to="/Mystories" className="nav-link" href="#about">
                        My Stories
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/CreateStory" className="nav-link" href="#team">
                        Create Story
                      </Link>
                    </li>
                  </ul>
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

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated,
  token: state.auth.token,
  newPostList : state.post.newPostList

})

export default connect(mapStateToProps,{login,searchDataPost})(UserNavbar)
