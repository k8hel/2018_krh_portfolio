import React from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';



export default props =>
  <Paper>
    <Tabs
      value={0}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="WEB" />
      <Tab label="DESIGN" />
      <Tab label="RESUME" />
      <Tab label="ABOUT"/>
    </Tabs>
  </Paper>