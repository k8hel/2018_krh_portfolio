import React from 'react';
import { Grid } from 'material-ui';
import Paper from 'material-ui/Paper';




export default props =>
  <Grid container>
    <Grid item sm>
    <Paper style={{padding: 20, marginTop:10, marginBottom:10}}>
        Left Pane
        </Paper>
    </Grid>
    <Grid item  sm>
      <Paper style={{ padding: 20, marginTop: 10, marginBottom: 10 }}>
        Right Pane
        </Paper>
    </Grid>
  </Grid>
