import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


function AddressForm(props) {

  return (
    <React.Fragment>
      <Typography variant="title" gutterBottom>
        Adresa za dostavu
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="firstName"
            label="Ime"
            fullWidth
            autoComplete="fname"
            onChange={props.handleStateUpdate}
            value={props.state.firstName}
            disabled={true}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="lastName"
            label="Prezime"
            fullWidth
            autoComplete="off"
            onChange={props.handleStateUpdate}
            value={props.state.lastName}
            disabled={true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Adresa"
            fullWidth
            autoComplete='off'
            onChange={props.handleStateUpdate}
            value={props.state.address}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            name="city"
            label="Grad"
            fullWidth
            autoComplete='off'
            onChange={props.handleStateUpdate}
            value={props.state.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="Županija/Općina" fullWidth 
            onChange={props.handleStateUpdate}
            value={props.state.state}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zip"
            name="zip"
            label="Broj pošte"
            fullWidth
            autoComplete="off"
            onChange={props.handleStateUpdate}
            value={props.state.zip}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="country"
            name="country"
            label="Zemlja"
            fullWidth
            autoComplete='off'
            onChange={props.handleStateUpdate}
            value={props.state.country}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;