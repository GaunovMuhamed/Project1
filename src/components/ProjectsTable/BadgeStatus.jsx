import React from 'react';
import Badge from '@material-ui/core/Badge';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';


export default function BadgeStatus(props) {
  const {
    large, small, tiny, active, icon, completed,
  } = props;
  const badgeColor = clsx({

    primary: completed,
    error: active,

  });
  return (
    <Badge
      color={badgeColor}
      overlap="rectangle"
      badgeContent={clsx(
        {
          large,
          small,
          tiny,
        },
      )}
    >
      {icon}
    </Badge>
  );
}
