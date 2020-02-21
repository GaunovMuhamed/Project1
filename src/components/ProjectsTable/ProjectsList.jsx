import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import BadgeStatus from './BadgeStatus';

export default function ProjectsList(props) {
  const icon = <ImportContactsIcon />;
  return (
    <>
      <TableCell padding="checkbox">
        <Checkbox
          checked={props.isItemSelected}
          inputProps={{ 'aria-labelledby': props.labelId }}
        />
      </TableCell>
      <TableCell component="th" id={props.labelId} scope="row" padding="none">
        {props.projects.project}
      </TableCell>
      <TableCell>
        <BadgeStatus
          completed={props.projects.status === 'completed'}
          active={props.projects.status === 'active'}
          large={props.projects.size === 'large'}
          small={props.projects.size === 'small'}
          tiny={props.projects.size === 'tiny'}
          icon={icon}
        />
      </TableCell>
      <TableCell align="right">{props.projects.status}</TableCell>
      <TableCell align="right">{props.projects.stack}</TableCell>
      <TableCell align="right">{props.projects.developer}</TableCell>
      <TableCell align="right">{props.projects.rait}</TableCell>
    </>
  );
}
