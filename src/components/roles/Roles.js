// import React from 'react';

// import { Form, Field } from 'react-final-form';
// import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
// import {
//   Typography,
//   Paper,
//   Link,
//   Grid,
//   Button,
//   CssBaseline,
//   RadioGroup,
//   FormLabel,
//   MenuItem,
//   FormGroup,
//   FormControl,
//   FormControlLabel,
// } from '@material-ui/core';
// // Picker
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   TimePicker,
//   DatePicker,
// } from '@material-ui/pickers';

// function DatePickerWrapper(props) {
//   const {
//     input: { name, onChange, value, ...restInput },
//     meta,
//     ...rest
//   } = props;
//   const showError =
//     ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
//     meta.touched;

//   return (
//     <DatePicker
//       {...rest}
//       name={name}
//       helperText={showError ? meta.error || meta.submitError : undefined}
//       error={showError}
//       inputProps={restInput}
//       onChange={onChange}
//       value={value === '' ? null : value}
//     />
//   );
// }

// function TimePickerWrapper(props) {
//   const {
//     input: { name, onChange, value, ...restInput },
//     meta,
//     ...rest
//   } = props;
//   const showError =
//     ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
//     meta.touched;

//   return (
//     <TimePicker
//       {...rest}
//       name={name}
//       helperText={showError ? meta.error || meta.submitError : undefined}
//       error={showError}
//       inputProps={restInput}
//       onChange={onChange}
//       value={value === '' ? null : value}
//     />
//   );
// }

// const onSubmit = async values => {
//   const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//   await sleep(300);
//   window.alert(JSON.stringify(values, 0, 2));
// };

// const validate = values => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   }
//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   }
//   if (!values.email) {
//     errors.email = 'Required';
//   }
//   return errors;
// };

// function Users() {
//   return (
//     <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
//       <CssBaseline />
//       <Typography variant="h4" align="center" component="h1" gutterBottom>
//         🏁 React Final Form
//       </Typography>
//       <Typography variant="h5" align="center" component="h2" gutterBottom>
//         Add User
//       </Typography>
      
//       <Form
//         onSubmit={onSubmit}
//         initialValues={{ employed: true, admin: 'false' }}
//         validate={validate}
//         render={({ handleSubmit, reset, submitting, pristine, values }) => (
//           <form onSubmit={handleSubmit} noValidate>
//             <Paper style={{ padding: 16 }}>
//               <Grid container alignItems="flex-start" spacing={2}>
//               <Grid item xs={12}>
//                   <Field
//                     name="organization"
//                     fullWidth
//                     required
//                     component={TextField}
//                     type="text"
//                     label="Organization"
//                   />
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Field
//                     fullWidth
//                     required
//                     name="firstName"
//                     component={TextField}
//                     type="text"
//                     label="First Name"
//                   />
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Field
//                     fullWidth
//                     required
//                     name="lastName"
//                     component={TextField}
//                     type="text"
//                     label="Last Name"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Field
//                     name="email"
//                     fullWidth
//                     required
//                     component={TextField}
//                     type="email"
//                     label="Email"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Field
//                     name="number"
//                     fullWidth
//                     required
//                     component={TextField}
//                     type="Telnum"
//                     label="Contact no"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Field
//                     name="adress"
//                     fullWidth
//                     required
//                     component={TextField}
//                     type="adress"
//                     label="Adress"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Field
//                     name="password"
//                     fullWidth
//                     required
//                     component={TextField}
//                     type="password"
//                     label="Password"
//                   />
//                 </Grid>
//                 {/* <Grid item xs={12}>
//                   <FormControlLabel
//                     label="Employed"
//                     control={
//                       <Field
//                         name="employed"
//                         component={Checkbox}
//                         type="checkbox"
//                       />
//                     }
//                   />
//                 </Grid> */}
//                 <Grid item>
//                   <FormControl component="fieldset">
//                     <FormLabel component="legend">Is Admin</FormLabel>
//                     <RadioGroup row>
//                       <FormControlLabel
//                         label="True"
//                         control={
//                           <Field
//                             name="admin"
//                             component={Radio}
//                             type="radio"
//                             value="true"
//                           />
//                         }
//                       />
//                       <FormControlLabel
//                         label="False"
//                         control={
//                           <Field
//                             name="False"
//                             component={Radio}
//                             type="radio"
//                             value="false"
//                           />
//                         }
//                       />
                    
//                     </RadioGroup>
//                   </FormControl>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Field
//                     name="role"
//                     fullWidth
//                     required
//                     component={TextField}
//                     type="text"
//                     label="Role"
//                   />
//                 </Grid>
//                 {/* <Grid item>
//                   <FormControl component="fieldset">
//                     <FormLabel component="legend">Sauces</FormLabel>
//                     <FormGroup row>
//                       <FormControlLabel
//                         label="Ketchup"
//                         control={
//                           <Field
//                             name="sauces"
//                             component={Checkbox}
//                             type="checkbox"
//                             value="ketchup"
//                           />
//                         }
//                       />
//                       <FormControlLabel
//                         label="Mustard"
//                         control={
//                           <Field
//                             name="sauces"
//                             component={Checkbox}
//                             type="checkbox"
//                             value="mustard"
//                           />
//                         }
//                       />
//                       <FormControlLabel
//                         label="Salsa"
//                         control={
//                           <Field
//                             name="sauces"
//                             component={Checkbox}
//                             type="checkbox"
//                             value="salsa"
//                           />
//                         }
//                       />
//                       <FormControlLabel
//                         label="Guacamole 🥑"
//                         control={
//                           <Field
//                             name="sauces"
//                             component={Checkbox}
//                             type="checkbox"
//                             value="guacamole"
//                           />
//                         }
//                       />
//                     </FormGroup>
//                   </FormControl>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Field
//                     fullWidth
//                     name="notes"
//                     component={TextField}
//                     multiline
//                     label="Notes"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Field
//                     fullWidth
//                     name="city"
//                     component={Select}
//                     label="Select a City"
//                     formControlProps={{ fullWidth: true }}
//                   >
//                     <MenuItem value="London">London</MenuItem>
//                     <MenuItem value="Paris">Paris</MenuItem>
//                     <MenuItem value="Budapest">
//                       A city with a very long Name
//                     </MenuItem>
//                   </Field>
//                 </Grid>
//                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                   <Grid item xs={6}>
//                     <Field
//                       name="rendez-vous"
//                       component={DatePickerWrapper}
//                       fullWidth
//                       margin="normal"
//                       label="Rendez-vous"
//                     />
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Field
//                       name="alarm"
//                       component={TimePickerWrapper}
//                       fullWidth
//                       margin="normal"
//                       label="Alarm"
//                     />
//                   </Grid>
//                 </MuiPickersUtilsProvider> */}
                
//                 <Grid item style={{ marginTop: 16 }}>
//                   <Button
//                     type="button"
//                     variant="contained"
//                     onClick={reset}
//                     disabled={submitting || pristine}
//                   >
//                     Reset
//                   </Button>
//                 </Grid>
//                 <Grid item style={{ marginTop: 16 }}>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     type="submit"
//                     disabled={submitting}
//                   >
//                     Submit
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Paper>
//             <pre>{JSON.stringify(values, 0, 2)}</pre>
//           </form>
//         )}
//       />
//     </div>
//   );
// }

// export default Users
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ModalDialog from './ModalDialog';
import './index.css';
import MaterialTable from 'material-table';
import 'material-icons';

const Roles = () => {
  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);
  const [roleData, setRoleData] = useState([]);
  const [value, setValue] = useState('');
  const [count, setCount] = useState(-1);

  useEffect(() => {

    getRoleData();
    setCount(count + 1);
  }, [value]);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  const getRoleData = () => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    return fetch("http://localhost:5000/roles/", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        setRoleData(JSON.parse(result))
      })
      .catch(error => console.log('error', error));
  }

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { title: "Role", field: "role" },
    { title: "Role description", field: "roledescription" },
    { title: "Organisation", field: "organization" },
   
    // isAdmin must be a switch
  ];


  return (
    <div style={{ padding: 16, margin: 'auto', paddingTop: 100 }}>
      <MaterialTable
        title='Roles'
        columns={columns}
        data={roleData}
        options={{
          filtering: true // false to disble column specific filter 
        }} />
      <br />
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Roles
      </Button>

      <ModalDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default Roles;
