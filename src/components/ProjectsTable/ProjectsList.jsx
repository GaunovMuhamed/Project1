import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import BadgeStatus from './BadgeStatus';

export default function ProjectsList(props) {
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
      <TableCell align="right">
        <BadgeStatus projects={props.projects} />
      </TableCell>
      <TableCell align="right">{props.projects.stack}</TableCell>
      <TableCell align="right">{props.projects.developer}</TableCell>
      <TableCell align="right">{props.projects.rait}</TableCell>
    </>
  );
}
