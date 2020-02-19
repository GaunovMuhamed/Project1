import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import SearchTable from './SearchTable';


const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 20%',
  },
  search: {
    flex: '1 1 100%',
    justifyItems: 'center',
  },
}));

export default function TableToolbar(props) {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  const toolBarClassName = clsx(classes.root, {
    [classes.highlight]: numSelected > 0,
  });

  return (
    <>
      <Toolbar
        className={toolBarClassName}
      >
        <SearchTable />
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </>
  );
  // TableToolbar.propTypes = {
  //   numSelected: PropTypes.number.isRequired,
  // };
}
