import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
// import Link from '@mui/material/Link';
import Link from 'next/link'
import Image from 'next/image';
import ThemeSwitch from './ThemeSwitch';
import LanguageSwitch from './LanguageSwitch';

import headerNavLinks from '../data/headerNavLinks'

const drawerWidth = 200;
// const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window, siteName, siteLogo } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
            <Link href='/'>    
                <Image
                    src={siteLogo}
                    alt={siteName}
                    width={113}
                    height={55}
                    objectFit='contain'
                />
            </Link>
        </Typography>
      <Divider />
      <List>
        {headerNavLinks.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link href={item.href}>
                <ListItemText primary={item.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', maxWidth: 'xl'}}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar component="nav" enableColorOnDark>  
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: {sm: 'block' }, pt: 1}}
            >
              <Link href='/'>    
                  <Image
                      src={siteLogo}
                      alt={siteName}
                      width={113}
                      height={55}
                      objectFit='contain'
                  />
              </Link>
            </Typography>
            <div className='md:pe-8'>
              <LanguageSwitch />
            </div>
            <div className='md:pe-8'>
              <ThemeSwitch  />
            </div>
            <Box sx={{ display: { xs: 'none', sm: 'none', md:'block' } }}>
              {headerNavLinks.map((item, index) => (
                <Link key={index} href={item.href}>   
                  <Button sx={{ color: '#fff' }}>
                      {item.title}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
