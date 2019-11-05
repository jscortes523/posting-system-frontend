import AppDispatcher from '../dispatcher/AppDispatcher'
import {EventEmitter} from 'events'

const CHANGE_EVENT = 'change'

let quotations = {
    data:[],
    time:""
}

const setQuatations = (data) =>{
    quotations = data
}


class PostStore extends EventEmitter{
    emitChange(){
        this.emit(CHANGE_EVENT)
    }
    
    addChangeListener(cb){
        this.on(CHANGE_EVENT, cb)
    }
    
    removeChangeListener(cb){
        this.removeListener(CHANGE_EVENT,cb)
    }

    getQuotations(){
        return quotations
    }

    displayQuotations(){
        return quotations.data.length > 0
    }

}

const store = new PostStore()

store.dispatchToken = AppDispatcher.register( action  => {
    setQuatations(action.payload)
    store.emitChange()
})

export default store