import PostContants from '../constants/post.constants'
import AppDispatcher from '../dispatcher/AppDispatcher'
import axios from 'axios'


const getContractorByStrategy = ( units, action )=>{
    
    const url = `${process.env.REACT_APP_API_URL}/quote/${action.strategy}/${units}`

    axios(url).then( res => {
        AppDispatcher.dispatch({
            actionType:action.actionType,
            payload: res.data
        })
    }).catch( err => {
        AppDispatcher.dispatch({
            actionType:PostContants.error,
            payload:{
                message:err
            }
        })
    })

}

export const getContractors = (units,type) =>{

    const action = PostContants[type]

    getContractorByStrategy(units,action)
    
}