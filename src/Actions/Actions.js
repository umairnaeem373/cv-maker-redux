import axios from "axios"

export const newUser=(obj)=> async dispatch=>{
    try {
        const {data} = await axios.post('http://localhost:5000/users', obj)
        dispatch({type:"ADD_NEW_USER" , payload:data})
    } catch (error) {
        console.log(error);   
    }

}

export const getSingleUser=(id)=> async dispatch=>{
    try {
        dispatch({type:"REQ_SINGLE_USER"})
        const {data}=await axios.get(`http://localhost:5000/users/${id}`)
        dispatch({type:"GET_SINGLE_SUCCESS" , payload:data})
    } catch (error) {
        dispatch({type:"GET_SINGLE_FAIL",payload:error.message})
    }
}

export const getAllUsers=()=> async dispatch=>{
    try {
        dispatch({type:"REQ_ALL_USERS"})
        const {data}=await axios.get(`http://localhost:5000/users`)
        dispatch({type:"GET_ALL_SUCCESS" , payload:data})
    } catch (error) {
        dispatch({type:"GET_ALL_FAIL",payload:error.message})
    }
}

export const updateProfile=(id,obj)=> async dispatch=>{
    try {
        // dispatch({type:"UPDATE_PROFILE_REQUEST"})
        const {data}=await axios.patch(`http://localhost:5000/users/${id}`,obj)
        dispatch({type:"UPDATE_PROFILE_SUCCESS" , payload:data})   
    } catch (error) {
        console.log(error);    
    }
}