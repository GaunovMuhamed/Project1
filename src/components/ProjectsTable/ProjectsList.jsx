import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import BadgeStatus from './BadgeStatus';

export default function ProjectsList({ projects, isItemSelected, labelId }) {
  return (
    <>
      <TableCell padding="checkbox">
        <Checkbox
          checked={isItemSelected}
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </TableCell>
      <TableCell component="th" id={labelId} scope="row" padding="none">
        {projects.project}
      </TableCell>
      <TableCell align="right">
        <BadgeStatus projects={projects} />
      </TableCell>
      <TableCell align="right">{projects.stack}</TableCell>
      <TableCell align="right">{projects.developer}</TableCell>
      <TableCell align="right">{projects.rait}</TableCell>
    </>
  );
}
