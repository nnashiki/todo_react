import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import TextField from '@material-ui/core/TextField';
import {Counter} from './Counter'


export default function Todo() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
          <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
          </form>
          <Counter/>
        </Typography>
      </Container>
    </>
  );
}
