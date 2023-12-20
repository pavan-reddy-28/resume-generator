import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PublishIcon from '@mui/icons-material/Publish';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserIfo } from '../feature/Slices/userSlice';

export default function UserHeaderData() {
const [name,setName] = React.useState("");
const dispatch = useDispatch();
const handleClick = () =>{
dispatch(updateUserIfo({"name":name}))
}
console.log("data logger ",useSelector(state=>state))
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
   
      <TextField id="standard-basic" label="Standard" variant="standard" onChange={(e)=>setName(e.target.value)} />

      <IconButton aria-label="Submit" onClick={()=>handleClick()}>
          <PublishIcon />
        </IconButton>
    </Box>
  );
}