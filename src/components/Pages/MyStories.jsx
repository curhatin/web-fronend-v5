import React, { Component } from "react";
import Navbar from "../MainComponents/Navbar/Navbar";
import UserNavbar from "../MainComponents/UserNavbar/UserNavbar"
import Mstory from "../MainComponents/Mstory/Mstory";
import {connect} from 'react-redux'
import {login} from '../../actions/authActions'
import {fetchDataPostById} from '../../actions/postActions'
import {searchDataPost} from '../../actions/postActions'



class Mystories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRedirect = () => {
    if (this.props.isAuthenticated === false) {
     this.props.history.push("/Login");
    }
  };
  componentDidMount(){
    if(this.props.token){
      this.props.fetchDataPostById(localStorage.token);
    }
    
  }
  render() {
    console.log(this.props.post_list_by_id)
    this.renderRedirect()   
    return (
      <div>
        <Navbar/>
        <UserNavbar />
          <Mstory />
        
       
        
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated,
  post_list_by_id : state.post.post_list_by_id,
  token: state.auth.token,
  newPostList : state.post.newPostList
})

export default connect(mapStateToProps,{login,fetchDataPostById,searchDataPost})(Mystories)
