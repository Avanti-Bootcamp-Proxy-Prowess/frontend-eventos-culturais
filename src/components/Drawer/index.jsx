import * as React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { IoHome } from "react-icons/io5";
import { MdEventAvailable, MdCategory } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
      <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <IoHome size={20} color='#f0f0f0'/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/eventos">
            <ListItemIcon>
              <MdEventAvailable size={20} color='#f0f0f0' />
            </ListItemIcon>
            <ListItemText primary="Eventos" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/locais">
            <ListItemIcon>
              <FaLocationDot size={20} color='#f0f0f0' />
            </ListItemIcon>
            <ListItemText primary="Locais" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/categorias">
            <ListItemIcon>
              <MdCategory size={20} color='#f0f0f0' />
            </ListItemIcon>
            <ListItemText primary="Categorias" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      <GiHamburgerMenu onClick={toggleDrawer(true)} />
      <Drawer 
        open={open} 
        onClose={toggleDrawer(false)}
        sx={{ 
          '& .MuiDrawer-paper': {
            backgroundColor: '#03283A', 
            color: '#f0f0f0'
          },
        }}
        >
        {DrawerList}
      </Drawer>
    </div>
  );
}
