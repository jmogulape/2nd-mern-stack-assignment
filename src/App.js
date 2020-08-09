import React from "react";

import Test from "./components/Test";
import { Grid } from "@material-ui/core";
function App() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
       </Grid>
      <Grid item xs={2}></Grid>

      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <Test></Test>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default App;
