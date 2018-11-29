import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Mstory/Style.css"
import timeAgo  from 'time-ago'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../../actions/authActions'
import {fetchDataPostById} from '../../../actions/postActions'
import {searchDataPost} from '../../../actions/postActions'



class Mstory extends Component {
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
      console.log("satu post")
      this.props.fetchDataPostById(localStorage.token);
    }
    
  }
  render() {
     console.log(this.props.newPostList)
    return (
        <div id="peoplestories">
          <div id="box-lg-1">
            <div className="container">
              <div className="row">
              <div className="col-md-10">
              {
                this.props.newPostList && this.props.newPostList.map((postData, index) => (

                  
                  <div id="comment-boxes">
                    <div className="row">
                      <div id="comment-wrapper">
                        <div className="col-md-12">
                          <div id="comment-notif">
                     
                            <p>  {timeAgo.ago(new Date(postData.createdAt))}</p>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div id="comment-box">
                            <div id="comment-title">
                              <a href="#">
                                <h5>
                                <Link to={`/MyStoryDetail/${postData.id}`}>
                                  <strong>{postData.topic}</strong>
                                  </Link>
                                </h5>
                              </a>
                            </div>
                            <hr />
                            <div id="comment-content">
                              <p>
                              
                              {postData.post}
                              </p>
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                
                )
                
                )
              }
              { !this.props.newPostList && this.props.post_list_by_id && this.props.post_list_by_id.map((postData,index)=> (
                
                  <div id="comment-boxes">
                    <div className="row">
                      <div id="comment-wrapper">
                        <div className="col-md-12">
                          <div id="comment-notif">
                     
                            <p>  {timeAgo.ago(new Date(postData.createdAt))}</p>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div id="comment-box">
                            <div id="comment-title">
                              <a href="#">
                                <h5>
                                <Link to={`/MyStoryDetail/${postData.id}`}>
                                  <strong>{postData.topic}</strong>
                                  </Link>
                                </h5>
                              </a>
                            </div>
                            <hr />
                            <div id="comment-content">
                              <p>
                              
                              {postData.post}
                              </p>
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
              
                ))}
                </div>
                <div className="col-md-2">
                  <div id="topic-box">
                    <div>
                      <h6 className="text-center">
                        {" "}
                        <strong>TOPICS</strong>
                      </h6>
                      <hr />
                    </div>
                    <div id="topic-catagories">
                      <div className="topic-category">
                        <a href="#">
                          <p>EDUCATION</p>
                        </a>
                      </div>
                      <div className="topic-category">
                        <a href="#">
                          <p>SEX</p>
                        </a>
                      </div>
                      <div className="topic-category">
                        <a href="#">
                          <p>SOCIAL LIFE</p>
                        </a>
                      </div>
                      <div className="topic-category">
                        <a href="#">
                          <p>RELIGION</p>
                        </a>
                      </div>
                      <div className="topic-category">
                        <a href="#">
                          <p>HEALTH</p>
                        </a>
                      </div>
                      <div className="topic-category">
                        <a href="#">
                          <p>OTHERS</p>
                        </a>
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

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated,
  post_list_by_id : state.post.post_list_by_id,
  token: state.auth.token,
  newPostList : state.post.newPostList
})

export default connect(mapStateToProps,{login,fetchDataPostById,searchDataPost})(Mstory)
