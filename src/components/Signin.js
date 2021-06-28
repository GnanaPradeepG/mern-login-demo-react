
import React, { useState, useEffect, useContext } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Errors } from 'react-redux-form';
import { useHistory } from 'react-router-dom';
import jwt from 'jwt-decode';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Signin() {
  const classes = useStyles();

  const [password, setPasword] = useState("")
  const [username, setUsername] = useState("")
  const [wrongPassword, setwrongPassword] = useState("")
  const [wrongPasswordText , setWrongPasswordText] = useState("")

  const clickSubmit = (e) => {
    e.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "username": username,
      "password": password
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:5000/users/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        setwrongPassword(false);
        setWrongPasswordText("");
        let token = jwt(result.token);
        sessionStorage.setItem('isSuperAdmin' , token.isSuperAdmin);
        sessionStorage.setItem('isAdmin' , token.isAdmin);
        sessionStorage.setItem('jwtToken', result.token);
        sessionStorage.setItem('isLoggedIn', true);
        console.log(result)
        window.location.reload();
      })
      .catch(error => {
        setwrongPassword(true);
        setWrongPasswordText("Wrong Password")
        sessionStorage.setItem('isLoggedIn', false)
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={clickSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            defaultValue="password"
            onChange={(e) => setPasword(e.target.value)}
            helperText={wrongPasswordText}
            error={wrongPassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>

        </form>
      </div>

    </Container>
  );
}

export default Signin
