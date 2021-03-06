import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Button,
  ButtonGroup
} from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

export const useStyles = makeStyles(() => ({
  red: {
    color: 'red',
    fontSize: '18px',
  },
  blue: {
    color: 'blue',
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();

  const [ counter, setCounter ] = useState(0);

  return (
    <div>
      <h1 className={classes.red}>One</h1>
      <h2 className={classes.blue}>Two</h2>
    </div>
  );
}
