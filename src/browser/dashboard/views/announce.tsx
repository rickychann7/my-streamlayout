import { render } from '../../render';
import { Box, Button, TextField } from '@mui/material';
import { Announce } from '../../../types/schemas';
import { useState } from 'react';

const announce = nodecg.Replicant<Announce>('announce');

const App = () => {
  const [text, setText] = useState('');
  const updateText = () => {
    if (typeof announce.value != 'undefined') {
      announce.value = text;
    }
  };

  return (
    <div id="container">
      <TextField
        value={text}
        onChange={(event) => setText(event.target.value)}
        label="Text"
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'lightblue',
            },
          },
        }}></TextField>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button onClick={() => updateText()} variant="contained">
          Update
        </Button>
      </Box>
    </div>
  );
};

render(<App />);
