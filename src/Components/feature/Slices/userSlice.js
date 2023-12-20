import {  createSlice } from "@reduxjs/toolkit"


const initialState = {
    loading:false,
    userData:{"name":""},
    error:''
}






const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        updateUserIfo: (state,action) =>{
            state.userData={ ...state.userData ,...action.payload}
        }
    }
})


export default userSlice.reducer
export const  {updateUserIfo } = userSlice.actions
