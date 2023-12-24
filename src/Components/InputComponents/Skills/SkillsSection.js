import * as React from 'react';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PublishIcon from '@mui/icons-material/Publish';
import IconButton from '@mui/material/IconButton';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

export default function UsersSkillsSection() {
  const [formData, setFormData] = React.useState({
    university: '',
    startDate: null,
    endDate: null,
    points:[],
  });

  const [errors, setErrors] = React.useState({
    university: '',
    startDate: '',
    endDate: '',
    points:[],
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevData) => ({
      ...prevData,
      [name]: '',
    }));
  };
  const getMonthYear = (date)=>{
    const currentDate = new Date(date);
const month = currentDate.toLocaleString('en-US', { month: 'long' }); // Full month name, e.g., "December"
const year = currentDate.getFullYear(); // Year, e.g., 2023

return{
    "month":month,
    "year":year
}

  }

  const handleDateChange = (date, name) => {
    console.log("education logger handleOnchange ",getMonthYear(date))
    setFormData((prevData) => ({
      ...prevData,
      [name]: date,
    }));
  };

  const handleOnClick = () => {
    let newErrors = {};
    if (!formData.university) {
      newErrors.university = 'University/College Name is required';
    }
    if (!formData.startDate) {
      newErrors.startDate = 'Start Date is required';
    }
    if (!formData.endDate) {
      newErrors.endDate = 'End Date is required';
    }

    // console.log("education logger ",formData)
    // Set errors if any
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Perform actions upon successful form submission
      alert('Form submitted successfully');
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={formData.university}
        name="university"
        id="university"
        label="University/College Name"
        variant="filled"
        onChange={handleOnChange}
        error={!!errors.university}
        helperText={errors.university}
      />
<div style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}
}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Start Date"
          views={['year', 'month']}
          value={formData.startDate}
          onChange={(date) => handleDateChange(date, 'startDate')}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              error={!!errors.startDate}
              helperText={errors.startDate}
            />
          )}
        />

        <DatePicker
          label="End Date"
          views={['year', 'month']}
          value={formData.endDate}
          onChange={(date) => handleDateChange(date, 'endDate')}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              error={!!errors.endDate}
              helperText={errors.endDate}
            />
          )}
        />
      </LocalizationProvider>
      </div>
<div>
    <span>Add additonal Bullet points</span>
 <div>
 <IconButton size='small'   style={{border:'1px black solid',color:'black',borderRadius:'20px'}}>
 <AddIcon />Add Additonal Info 
</IconButton>
 
 </div>

</div>
      <IconButton aria-label="Submit" onClick={handleOnClick}>
        <PublishIcon />
      </IconButton>
    </Box>
  );
}
