import React,{Component} from 'react'
import {getContractors} from '../actions/post.actions'
import '../assets/styles/Post.css'


class Post extends Component {

  
  constructor(props)
  {
    super(props)
    this.showModal = this.showModal.bind(this)
  }


  showModal(e){
    getContractors(this.props.post.units,e.target.id)
  }


  render(){
    return (
        <div className="post-container">  
          <div className="post-container_img">
            <img
              className="post-container_img__item"
              src={`https://api.adorable.io/avatars/65/${this.props.post.name.toLowerCase()}@adorable.io.png`}
              alt={this.props.post.name}
            />
            </div> 
          <div className="post-container_info">
            <div className="post-container_info__fields">
                <h6>{`Client: ${this.props.post.name}`}</h6>
                <h6>{`Units: ${this.props.post.units}`}</h6>            
            </div>
          </div>
        <div className="post-container_actions">
            <button id="fs" className="post-container_actions__btn_losser" type="button" onClick={this.showModal}>Read File</button>
            <button id="readStream" className="post-container_actions__btn_winner" type="button" onClick={this.showModal}>Read Stream</button>
            <button id="dataBase" className="post-container_actions__btn_losser" type="button" onClick={this.showModal}>Data Base</button>
            <button id="dbCache" className="post-container_actions__btn_losser" type="button" onClick={this.showModal}>DB Cache</button>
        </div>
        </div>
    )
  }
}
export default Post