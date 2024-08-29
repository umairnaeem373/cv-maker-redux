export const addNewUser=(state={},action)=>{
    switch (action.type) {
        case "ADD_NEW_USER":
            return{...state,users:action.payload}
    
        default:
            return state;
    }
}

export const getSingle=(state={},action)=>{
    switch (action.type) {

        case "REQ_SINGLE_USER":
            return{...state,loading:true}
        case "GET_SINGLE_SUCCESS":
            return{...state,loading:false,user:action.payload}
        case "UPDATE_PROFILE_SUCCESS":
            return{...state,loading:false,user:action.payload}
        case "GET_SINGLE_FAIL":
            return{...state,loading:false,error:action.payload}
    
        default:
            return state;
    }

}

export const getAll=(state={},action)=>{
    switch (action.type) {

        case "REQ_ALL_USERS":
            return{...state,loading:true}
        case "GET_ALL_SUCCESS":
            return{...state,loading:false,users:action.payload}
        case "GET_ALL_FAIL":
            return{...state,loading:false,error:action.payload}
    
        default:
            return state;
    }

}