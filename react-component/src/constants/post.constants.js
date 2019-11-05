const PostConstant = {
    fs:{
        actionType:'GET_QUOTATION_BY_FS',
        strategy:'filereader'
    },
    readStream:{
        actionType:'GET_QUOTATION_BY_READSTREAM',
        strategy:'readstream'
    },
    dataBase:{
        actionType:'GET_QUOTATION_BY_DATABASE',
        strategy:'database'
    },
    dbCache:{
        actionType:'GET_QUOTATION_BY_CACHE',
        strategy:'dbcache'
    },
    error:'ERROR'

}

export default PostConstant