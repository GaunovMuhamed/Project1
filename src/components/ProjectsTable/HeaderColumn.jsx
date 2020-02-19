import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
// import PropTypes from 'prop-types';

export default function HeaderColumn(props) {
  const headCells = [
    {
      id: 'projectName', numeric: false, disablePadding: true, label: 'Project Name',
    },
    {
      id: 'status', numeric: true, disablePadding: false, label: 'Status',
    },
    {
      id: 'stack', numeric: true, disablePadding: false, label: 'Stack',
    },
    {
      id: 'developer', numeric: true, disablePadding: false, label: 'Developer',
    },

    {
      id: 'rait', numeric: true, disablePadding: false, label: 'Rait',
    },
  ];

  const {
    classes, onSelectAllClick, order, orderBy, numSelected, projectCount, onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < projectCount}
            checked={projectCount > 0 && numSelected === projectCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}

      </TableRow>
    </TableHead>
  );

  // Head.propTypes = {
  //   classes: PropTypes.object.isRequired,
  //   numSelected: PropTypes.number.isRequired,
  //   onRequestSort: PropTypes.func.isRequired,
  //   onSelectAllClick: PropTypes.func.isRequired,
  //   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  //   orderBy: PropTypes.string.isRequired,
  //   projectCount: PropTypes.number.isRequired,
  // };
}
