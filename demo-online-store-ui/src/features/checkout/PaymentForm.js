import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function PaymentForm(props) {
  return (
    <React.Fragment>
      <Typography variant="title" gutterBottom>
        Detalji plaćanja
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <TextField id="cardName" name="cardName" label="Ime na kartici" fullWidth 
            onChange={props.handleStateUpdate}
            value={props.state.cardName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField id="cardNumber" name="cardNumber" label="Broj kartice" fullWidth 
            onChange={props.handleStateUpdate}
            value={props.state.cardNumber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField id="expDate" name="expDate" label="Datum isteka" fullWidth
            onChange={props.handleStateUpdate}
            value={props.state.expDate}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="cvv"
            name="cvv"
            label="CVV"
            helperText="Zadnje tri znamenke na magnetskoj traci"
            fullWidth
            onChange={props.handleStateUpdate}
            value={props.state.cvv}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;