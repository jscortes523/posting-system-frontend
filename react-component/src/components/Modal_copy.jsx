import React, {Component} from 'react'
import postStore from '../stores/post.store'

class Modal extends Component{

    constructor(){
        super()
        this.state = {
            show:false,
            quotations:{
                time:"",
                data:[]
            }
        }
        this.handleClose = this.handleClose.bind(this)
        this.onChange = this.onChange.bind(this)
        postStore.addChangeListener(this.onChange)
    }

    componentWillUnmount(){
        postStore.removeListener(this.onChange)
    }

    componentDidMount(){
        this.onChange()
    }

    onChange(){
        this.setState({
            quotations:postStore.getQuotations(),
            show:postStore.displayQuotations()
        })
    }

    handleClose(){
        this.setState({
            show:false,
            quotations:{
                time:"",
                data:[]
            }
        })
    }

    render(){
        return (
        <div className={this.state.show ? "modal display-block" : "modal display-none"}>
            <section className={this.state.show ? "modal display-block" : "modal display-none"}>          
                <button onClick={this.handleClose}>close</button>
                <h5>{this.state.quotations.time}</h5>
                { this.state.quotations.data.map( item => (
                    <div key={item.id} className="contractor-info">
                        <div className="contractor-info_field">{`${item.id} - ${item.totalCost}`}</div>
                        <div className="contractor-info_field"></div>
                    </div>
                ))
                }
            </section>
        </div>
        )
    }
  }

  export default Modal