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
    fetch('http://localhost:3000/api/user.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(console.error);
  }, []);

  const userdata = data ? data.map((value) => (
    <ListItem
      key={value.guest}
      disableGutters
      secondaryAction={
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
      }
    >
      <ListItemText primary={`Guest name:  ${value.guest}`} />
    </ListItem>
  )) : <div>Loading...</div>;
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
        {userdata}
      </List>

        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
