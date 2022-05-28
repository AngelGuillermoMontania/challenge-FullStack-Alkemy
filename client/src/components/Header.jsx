import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#00ADB5",
    width: "15rem",
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  }));

  const Bar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "#393E46",
  }));

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Bar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nombre usuario
          </Typography>
          <ColorButton color="inherit" size='large'>Login</ColorButton>
        </Toolbar>
      </Bar>
    </Box>
  );
}