import React from 'react';
import Badge from '@material-ui/core/Badge';
import NoteIcon from '@material-ui/icons/Note';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useToolbarStyles = makeStyles(() => ({
  active: {
    color: 'primary',
  },
  completed: {
    color: 'error',
  },
  during: {
    color: 'secondary',
  },
}));

export default function BadgeStatus(projects) {
  const classes = useToolbarStyles();

  return (
    <Badge color="primary" variant="dot">
      <NoteIcon />
    </Badge>
  );
}
