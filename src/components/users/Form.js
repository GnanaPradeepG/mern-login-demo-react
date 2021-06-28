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
  const [Organization, setOrganization] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [Address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(firstName, lastName, email, password);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    let data = JSON.stringify({
      "organization": Organization,
      "firstname": firstName,
      "lastname": lastName,
      "email": email,
      "number": number,
      "password": password,
      "admin": true,
      "role": "admin"
    });
  
    console.log(data)
  
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
      redirect: 'follow'
    };
  
    fetch("http://localhost:5000/users/add", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    handleClose();

  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
        label="Organization"
        variant="filled"
        required
        value={Organization}
        onChange={e => setOrganization(e.target.value)}
      />
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Contact no"
        variant="filled"
        type=""
        required
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <TextField
        label="Address"
        variant="filled"
      
        required
        value={Address}
        onChange={e => setAddress(e.target.value)}
      />
      
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <TextField
        label="Is Admin"
        variant="filled"
        required
        value={admin}
        onChange={e => setAdmin(e.target.value)}
      />
      <TextField
        label="Role"
        variant="filled"
        required
        value={role}
        onChange={e => setRole(e.target.value)}
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