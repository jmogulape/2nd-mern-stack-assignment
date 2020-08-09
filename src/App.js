import React from "react";

import Test from "./components/Test";
import { Grid } from "@material-ui/core";
function App() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <div style={{ textAlign: "center" }}>
          <h1>Jahangeer Ayaz Mogul FA17-BCS-138 Section A</h1>
          <h1>Assignment 2</h1>
          <h1>Made in React.js using material-ui</h1>
        </div>
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
