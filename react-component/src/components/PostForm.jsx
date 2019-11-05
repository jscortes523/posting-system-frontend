import React, { Component } from "react";
import axios from 'axios'
import '../assets/styles/PostForm.css'
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: "",

      post: {
        name: "",
        units: ""
      }
    };

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Handle form input field changes & update the state
   */
  handleFieldChange = event => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      post: {
        ...this.state.post,
        [name]: value
      }
    });
  };


  /**
   * Form submit handler
   */
  onSubmit(e) {
    // prevent default form submission
    e.preventDefault();
    //...
    this.setState({error:"", loading:true})

    let {post} = this.state

    const url = `${process.env.REACT_APP_API_URL}/post`

    axios.post(url,post).then( res => this.props.addPost(res.data))   
    
    this.setState({
      loading: false,
      post: {...post, units:""}
    })
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <React.Fragment>
        <form className="post-form" method="post" onSubmit={this.onSubmit}>
          <h6 className="post-form_title">Request a Quotation</h6>
            <input
              onChange={this.handleFieldChange}
              value={this.state.post.name}
              className="post-form_input"
              placeholder="😎 Your Name"
              name="name"
              type="text"
            />
            <input
              onChange={this.handleFieldChange}
              value={this.state.post.units}
              className="post-form_input"
              placeholder="&#x1f522; Your Requested Units"
              name="units"
              type="text"
            />

          {this.renderError()}

            <button disabled={this.state.loading} className="post-form_action__btn">
              Post Project
            </button>
        </form>
      </React.Fragment>
    );
  }
}

export default PostForm