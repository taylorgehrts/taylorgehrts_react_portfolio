import React, { useState } from 'react';
import { Box, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import './Contact.css'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  
    setErrors({ ...errors, [name]: '' });
  };

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return !regex.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;


    if (!value.trim()) {
      setErrors({ ...errors, [name]: 'This field is required' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }


    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
  
      // For now, log the form data
      console.log('Form Data:', formData);
    }
  };

  return (
    <div className= "contact-container">
    <Card className="contact-card">
      <CardContent>
        <Typography variant="h4">Contact</Typography>
        <form onSubmit={handleSubmit}>
          <Box
            component="div"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur} 
              error={Boolean(errors.name)}
              helperText={errors.name}
              
            />
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur} 
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <TextField
              label="Message"
              variant="outlined"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur} 
              error={Boolean(errors.message)}
              helperText={errors.message}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
    </div>
    
  );
}

export default Contact;
