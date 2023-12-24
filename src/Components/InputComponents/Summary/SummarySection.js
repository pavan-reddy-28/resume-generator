import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PublishIcon from '@mui/icons-material/Publish';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserIfo, updateUserSummary } from '../../feature/Slices/userSlice';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
export default function UserSummarySection({handler}) {
  const dispatch = useDispatch();
  const{userSummary}= useSelector(state=>state.user)
  const [formData, setFormData] = React.useState({
    summary: userSummary
  });

  const [errors, setErrors] = React.useState({
    summary: ''
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prevData) => ({
      ...prevData,
      [name]: ''
    }));
  };
  const handleRemoveSummary = () =>{
    dispatch(  updateUserSummary(''));
    handler();
  }
  const handleOnClick = () => {
    let newErrors = {};
    newErrors = {
      'summary':
        formData.summary.length < 200 || formData.summary.length > 1000
          ? 'Summary must be between 200 and 1000 characters'
          : ''
    };
    setErrors({
      ...newErrors
    });
    if (!newErrors.summary) {
      dispatch(  updateUserSummary(formData.summary));
      handler();
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1,width: '100%' }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        multiline
        minRows={4}
        value={formData.summary}
        name="summary"
        id="standard-basic"
        label="Summary"
        variant="standard"
        rows={4}

        

        onChange={handleOnChange}
        error={!!errors.summary}
        helperText={errors.summary}
      />
<div>
<IconButton aria-label="Update" onClick={handleOnClick} style={{
            fontSize: '16px',
            color: '#ffeeee',
            background: 'black',
            borderRadius: '12px',
            margin:'4px',
            width:'auto'
      }}>
       {'Update '} <AutoAwesomeTwoToneIcon />
      </IconButton>
      <IconButton aria-label="Update" onClick={handleRemoveSummary} style={{
            fontSize: '16px',
            color: '#ffeeee',
            background: 'black',
            borderRadius: '12px',
            margin:'4px',
            width:'auto'
      }}>
       {'Remove Summary '}<DeleteForeverIcon />
      </IconButton>
      </div>
    </Box>
  );
}
