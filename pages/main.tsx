import * as React from 'react';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import { List, IconButton, ListItem, ListItemText } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';


export default function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://localhost:3000/user.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(console.error);
  }, []);

  const userdata = data ? <div>{data}</div> : <div>Loading...</div>;
  const userlist = "test";
  
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >        
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  {[1, 2, 3].map((value) => (
    <ListItem
      key={value}
      disableGutters
      secondaryAction={
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
      }
    >
      <ListItemText primary={`Line item ${value}`} />
    </ListItem>
  ))}
</List>

        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
