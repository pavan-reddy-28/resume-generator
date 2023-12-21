import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PublishIcon from '@mui/icons-material/Publish';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserIfo, updateUserSummary } from '../../feature/Slices/userSlice';

export default function UserSummarySection() {
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    summary: ''
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
      dispatch(  updateUserSummary(formData.summary))
      alert('Form submitted successfully');
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        multiline
        minRows={4}
        value={formData.summary}
        name="summary"
        id="summary"
        label="Summary"
        


         variant="filled"

        onChange={handleOnChange}
        error={!!errors.summary}
        helperText={errors.summary}
      />

      <IconButton aria-label="Submit" onClick={handleOnClick}>
        <PublishIcon />
      </IconButton>
    </Box>
  );
}
