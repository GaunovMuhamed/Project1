import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import HeaderColumn from './HeaderColumn';
import TableToolbar from './ToolbarTable';
import SearchTable from './SearchTable';
import ProjectList from './ProjectsList';


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    boxShadow: '0px 0px 5px',
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  header: {
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 0,
    marginRight: 0,
    width: 'max-content',

  },
}));

export default function EnhancedTable() {
  const [projects, setProjects] = useState([{
    project: 'Project First',
    developer: 'Kolya Kolya',
    stack: '1',
    status: 'active',
    rait: '20$/hour',
    id: '1',
  },
  {
    project: 'Project Second',
    developer: 'Vasya Vasya',
    stack: '2',
    status: 'active',
    rait: '25$/hour',
    id: '2',
  },
  {
    project: 'Project Third',
    developer: 'Petya Petya',
    stack: '3',
    status: 'during',
    rait: '30$/hour',
    id: '3',
  },
  ]);

  const [searchKey, setSearchKey] = useState('');
  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const filteredProjects = projects.filter((project) => project.project.toLowerCase().includes(searchKey.toLowerCase())
  || project.developer.toLowerCase().includes(searchKey.toLowerCase())
  || project.stack.toLowerCase().includes(searchKey)
  || project.status.toLowerCase().includes(searchKey)
  || project.rait.toLowerCase().includes(searchKey));


  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = projects.map((n) => n.project);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, project) => {
    const selectedIndex = selected.indexOf(project);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, project);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeProjectsPerPage = (event) => {
    setProjectsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const isSelected = (project) => selected.indexOf(project) !== -1;

  const emptyProjects = projects - Math.min(projectsPerPage, projects.length - page * projectsPerPage);

  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="left"
      >
        <Box className={classes.header}>
          <Box>
            {selected.length > 0 ? (
              <Typography color="inherit" variant="h6">
                {selected.length}
                {' '}
                Selected
              </Typography>
            ) : (
              <Typography variant="h6" id="tableTitle">
                Company Projects
              </Typography>
            )}
          </Box>
        </Box>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <TableContainer>
              <SearchTable handleChange={setSearchKey} searchKey={searchKey} />
              <TableToolbar numSelected={selected.length} />
            </TableContainer>
            <TableContainer>
              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                aria-label="enhanced table"
              >
                <HeaderColumn
                  classes={classes}
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  projectCount={projects.length}
                />
                <TableBody>
                  {stableSort(filteredProjects, getComparator(order, orderBy))
                    .slice(page * projectsPerPage, page * projectsPerPage + projectsPerPage)
                    .map((projects, index) => {
                      const isItemSelected = isSelected(projects.project);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, projects.project)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={projects.project}
                          selected={isItemSelected}
                        >
                          <ProjectList isItemSelected={isItemSelected} labelId={labelId} projects={projects} />
                        </TableRow>
                      );
                    })}
                  {emptyProjects > 0 && (
                  <TableRow>
                    <TableCell colSpan={6} />
                  </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={projects.length}
              rowsPerPage={projectsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeProjectsPerPage}
            />
          </Paper>
        </div>
      </Grid>
    </>
  );
}
