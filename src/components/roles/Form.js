import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {

  const classes = useStyles();
  // create state variables for each input
  const [role, setRole] = useState('');
  const [roledescription, setRoledescription] = useState('');
  const [Organization, setOrganization] = useState('');
  
 
 

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(firstName, lastName, email, password);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    let data = JSON.stringify({
      "role": role,
      "roledescription": roledescription,
      "organization": Organization,
     
    });
  
    console.log(data)
  
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
      redirect: 'follow'
    };
  
    fetch("http://localhost:5000/roles/add", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    handleClose();

  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Role"
        variant="filled"
        required
        value={role}
        onChange={e => setRole(e.target.value)}
      />
      <TextField
        label="Role description"
        variant="filled"
        required
        value={role}
        onChange={e => setRoledescription(e.target.value)}
      />
        <TextField
        label="Organization"
        variant="filled"
        required
        value={Organization}
        onChange={e => setOrganization(e.target.value)}
      />
   
      
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;