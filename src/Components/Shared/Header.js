import React from 'react'
import { Link } from 'react-router-dom'
import { MenuList, MenuItem } from 'material-ui/Menu';

import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import HomeIcon from 'material-ui-icons/Home';
import InfoIcon from 'material-ui-icons/Info';
import CarIcon from 'material-ui-icons/DirectionsCar';
import FaceIcon from 'material-ui-icons/Face';


// The Header creates links that can be used to navigate
// between routes.
const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

const Header = () => (
  <Paper className="sidemenu">
    <MenuList>
      <MenuItem>
        <ListItemIcon>
          <Link to='/'><HomeIcon /> Home</Link>
        </ListItemIcon>
        <ListItemText inset />
      </MenuItem>
      <Divider />
      {/* <MenuItem>
        <ListItemIcon>
          <Link to='/about'><InfoIcon /> About</Link>
        </ListItemIcon>
        <ListItemText inset />
      </MenuItem>
      <Divider /> */}
      <MenuItem>
        <ListItemIcon>
          <Link to='/cars'><CarIcon /> Cars</Link>
        </ListItemIcon>
        <ListItemText inset />
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <Link to='/users'><FaceIcon /> Users</Link>
        </ListItemIcon>
        <ListItemText inset />
      </MenuItem>

    </MenuList>
  </Paper>
  // <header>
  //   <nav>
  //     <ul>
  //       <li><Link to='/'>Home</Link></li>
  //       <li><Link to='/about'>About</Link></li>
  //     </ul>
  //   </nav>
  // </header>
)

export default withStyles(styles)(Header)
