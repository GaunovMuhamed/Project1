import React from 'react';
import Badge from '@material-ui/core/Badge';
import NoteIcon from '@material-ui/icons/Note';
import clsx from 'clsx';
import blue from '@material-ui/core/colors/blue';
import { makeStyles } from '@material-ui/core';

const useToolbarStyles = makeStyles(() => ({
  title: {
    flex: '1 1 20%',
  },
  search: {
    flex: '1 1 100%',
    justifyItems: 'center',
  },
}));

export default function BadgeStatus(props) {
  const styles = useStyles();
  // const {large, small, tiny, active, pending, icon, completed, text } = props;
  console.log('props', props);

  // const badgeColor = clsx(styles.badge, {

  //   succeed: completed,
  //   action: active

  // });
  console.log(badgeColor);
  return (
    <Badge color={badgeColor} variant="dot">
      {/* {icon}
        {text} */}
    </Badge>
  );
}
