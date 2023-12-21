import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PublishIcon from '@mui/icons-material/Publish';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserIfo } from '../feature/Slices/userSlice';

export default function UserHeaderData() {
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    name: '',
    contact: '',
    email: '',
    linkedInURL: '',
    displayText: '',
  });

  const [errors, setErrors] = React.useState({
   name:'',
    contact: '',
    email: '',
    linkedInURL: '',
    displayText: '',
  });

  
  const handleOnChange = (e) =>{
    const {name, value } = e.target;
    setFormData((prevData)=>({
      ...prevData,
      [name]: value
    }))
    setErrors((prevData)=>({
      ...prevData,
      [name]:''
    }))

  }

  const handleOnClick = () =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex to validate email
    const nameRegex = /^[a-zA-Z\s]*$/ ; //regex name
    const contactRegex = /^\d+$/;
    const LinkedInRegex =  /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+\/?$/;
    let newErrors = {};
    newErrors= {
      'name': (!nameRegex.test(formData.name) || formData.name ==='')?`Please Enter Valid Name(alphabets and spaces only)`:'',
      'contact':(!contactRegex.test(formData.contact) || formData.contact.length!==10)?'Please enter a 10-digit mobile number':'',
      'email': !emailRegex.test(formData.email)?'Please enter a valid email address':'',
      'linkedInURL': !LinkedInRegex.test(formData.linkedInURL)?'Please enter a valid LinkedIn URL':'',
      'displayText': formData.displayText==''?'Please enter a valid LinkedIn Name':'',
    }
    setErrors({
      ...newErrors
    })
    let hasError = false;
    Object.keys(newErrors).forEach((key) => {
      if (newErrors[key].trim()!==''){
        hasError = true;
      }
    });
    if(hasError){
        
    }else{
      dispatch(updateUserIfo({...formData}))
      alert("form submiteed succesfully");
    } 
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={formData.name}
        name="name"
        id="standard-basic"
        label="Full Name"
        variant="standard"
        onChange={handleOnChange}
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        value={formData.contact}
        name="contact"
        id="standard-basic"
        label="Contact"
        variant="standard"
        onChange={handleOnChange}
        error={!!errors.contact}
        helperText={errors.contact}
       
      />
      <TextField
        value={formData.email}
        name="email"
        id="standard-basic"
        label="Email"
        variant="standard"
        onChange={handleOnChange}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        value={formData.linkedInURL}
        name="linkedInURL"
        id="standard-basic"
        label="LinkedIn URL"
        variant="standard"
        onChange={handleOnChange}
        error={!!errors.linkedInURL}
        helperText={errors.linkedInURL}
      />
      <TextField
        value={formData.displayText}
        name="displayText"
        id="standard-basic"
        label="Display Text"
        variant="standard"
        onChange={handleOnChange}
        error={!!errors.displayText}
        helperText={errors.displayText}
      />
      <IconButton aria-label="Submit" onClick={handleOnClick}>
        <PublishIcon />
      </IconButton>
    </Box>
  );
}
