import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ModalDialog from './ModalDialog';
import './index.css';
import MaterialTable from 'material-table';
import 'material-icons';
import Switch from '@material-ui/core/Switch';

const Admins = () => {
  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);
  const [adminData, setAdminData] = useState([]);
  const [value, setValue] = useState('');
  const [count, setCount] = useState(-1);

  useEffect(() => {

    getAdminData();
    setCount(count + 1);
  }, [value]);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  const getAdminData = async() => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "bearer " + sessionStorage.getItem('jwtToken'));

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    await fetch("http://localhost:5000/admins/admins", requestOptions)
      .then(response => response.json())
      .then(result => setAdminData(result))
      .catch(error => console.log('error', error));
  }

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  const handleOnClickSuperAdmin = (val) => {
    if (val.isSuperAdmin) {
      let myHeaders = new Headers();
      myHeaders.append("Authorization", "bearer " + sessionStorage.getItem('jwtToken'));
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        "username": val.username
      });

      let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:5000/admins/removesuperadmin", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    else {
      let myHeaders = new Headers();
      myHeaders.append("Authorization", "bearer " + sessionStorage.getItem('jwtToken'));
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        "username": val.username
      });

      let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:5000/admins/addsuperadmin", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    getAdminData();
  }

  const handleOnClickAdmin = (val) => {
    if (val.isAdmin) {
      let myHeaders = new Headers();
      myHeaders.append("Authorization", "bearer " + sessionStorage.getItem('jwtToken'));
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        "username": val.username
      });

      let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:5000/admins/removeadmin", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    else {
      let myHeaders = new Headers();
      myHeaders.append("Authorization", "bearer " + sessionStorage.getItem('jwtToken'));
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        "username": val.username
      });

      let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:5000/admins/addadmin", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    getAdminData();
  }



  const columns = [
    { title: "Username", field: "username", headerStyle: { backgroundColor: "royalblue", color: "white" } },
    { title: "Name", field: "firstname", headerStyle: { backgroundColor: "royalblue", color: "white" } },
    { title: "Email", field: "email", headerStyle: { backgroundColor: "royalblue", color: "white" } },
    { title: "Organisation", field: "organization", headerStyle: { backgroundColor: "royalblue", color: "white" } },
    { title: "Role", field: "role", headerStyle: { backgroundColor: "royalblue", color: "white" } },
    {
      title: "Admin", field: "isAdmin", headerStyle: { backgroundColor: "royalblue", color: "white" },
      render: (val) => <Switch color="primary" checked={val.Admin} onClick={(value) => handleOnClickAdmin(val)} />,
    },
    {
      title: "Super Admin", field: "isSuperAdmin", headerStyle: { backgroundColor: "royalblue", color: "white" },
      render: (val) => <Switch color="primary" checked={val.isSuperAdmin} onClick={(value) => handleOnClickSuperAdmin(val)} />,
    }
  ];


  return (
    <div style={{ padding: 16, margin: 'auto', paddingTop: 100 }}>
      <MaterialTable
        editable={{
          isEditable: rowData => true, // only name(a) rows would be editable
        }}
        title='Admins'
        columns={columns}
        data={adminData}
        options={{
          filtering: true // false to disble column specific filter 
        }} />
      <br />
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Admins
      </Button>

      <ModalDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default Admins;