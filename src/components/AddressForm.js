import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Account
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="emailaddress"
            name="emailaddress"
            label=" Email Address"
            fullWidth
            autoComplete="email address"
            variant="outlined"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            autoComplete="password"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="confirmpassword"
            name="confirmpassword"
            label="Confirm Password"
            fullWidth
            variant="outlined"
          />
        </Grid>
        
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="I accept the Terms and Privacy Policy"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}