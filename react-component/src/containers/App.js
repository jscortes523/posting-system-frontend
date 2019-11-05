import React, { Component } from 'react'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import Modal from '../components/Modal'
import '../assets/styles/App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      loading: false,
      show: false
    }

    this.addPost = this.addPost.bind(this)
    
  }

  addPost(post) {
    
    this.setState({
      loading: false,
      posts: [post, ...this.state.posts],
    });
  }

  loadInitialState(){

    const url = `${process.env.REACT_APP_API_URL}/post`

    const opts = {
      url:url,
      method:'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }

    axios(opts).then( res => {
      this.setState({
        posts:res.data
      })
      console.log('hahahhaha')
    }).catch( err => {
      this.setState({loading:false})
    })    
  }

  componentDidMount(){
    this.loadInitialState()
  }

  render() {
    return (
      <div className="App container bg-light shadow">
        <header className="App-header">
          <h1 className="App-title">
            Bunny Studio Quoting System
            <span className="px-2" role="img" aria-label="Chat">
              💬
            </span>
          </h1>
        </header>        
        <div className="app-post-container">
          <div className="app-form">            
            <PostForm addPost={this.addPost}/>
          </div>
          <div className="app-posts-list">
          <PostList posts={this.state.posts} loading={this.state.loading}/>
          </div>
        </div>
        <Modal />
      </div>
    )
  }
}

export default App