import React from 'react';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box'

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Box m={0, 1}>
          <Button variant="contained" color="primary">
            Hello World
        </Button>
        </Box>
      </div>
    </>
  );
}

export default App;
