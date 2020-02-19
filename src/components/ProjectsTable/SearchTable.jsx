import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useToolbarStyles = makeStyles((theme) => ({
  search: {
    flex: '1 1 100%',
    justifyItems: 'center',
  },
}));

export default function SearchTable(props) {
  const [searchKey, setSearchKey] = useState('');
  console.log(searchKey);
  const classes = useToolbarStyles();
  return (
    <TextField className={classes.search} value={searchKey} placeholder="Search" />
  );
}
