import React, {Component} from 'react'
import postStore from '../stores/post.store'
import '../assets/styles/Modal.css'
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
        <div className="modal-container" style={{display: this.state.show ? 'block' : 'none' }}>
            <span className="modal-container_close-btn" onClick={this.handleClose}>&times;</span>
            <div className="modal-container_detail" >
                <h5>{`Time: ${this.state.quotations.time}`}</h5>
                <aside>
                    { this.state.quotations.data.map( item => (
                        <div key={item.id} className="contractor-info">
                            <div className="contractor-info_field"><b>{`Contractor: `}</b>{`${item.id}`}</div>
                            <div className="contractor-info_field"><b>{'Requested Units: '}</b>{`${item.requestedUnits}`}</div>
                            <div className="contractor-info_field"><b>{'Total: '}</b>{`$${Math.round(item.totalCost*100)/100} USD`}</div>
                        </div>
                        ))
                    }
                </aside>
            </div>
        </div>
        )
    }
  }

  export default Modal