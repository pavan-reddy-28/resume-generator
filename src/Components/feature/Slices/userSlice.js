import {  createSlice } from "@reduxjs/toolkit"


const initialState = {
    loading:false,
    userDetails:{
        name: '',
        contact: '',
        email: '',
        linkedInURL: '',
        displayText: '',
    },
    userSummary:'',
    error:''
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        updateUserIfo: (state,action) =>{
            state.userDetails={ ...state.userDetails ,...action.payload}
        },
        updateUserSummary: (state,action) =>{
            state.userSummary=action.payload
        }
    }
})


export default userSlice.reducer
export const  {updateUserIfo, updateUserSummary } = userSlice.actions
