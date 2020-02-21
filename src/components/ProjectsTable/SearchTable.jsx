import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input, FormControl } from '@material-ui/core';


const useToolbarStyles = makeStyles(() => ({
  search: {
    flex: '1 1 100%',
    justifyItems: 'center',
    width: '100%',
  },
  input: {
    paddingLeft: 15,
  },
}));

export default function SearchTable(props) {
  const classes = useToolbarStyles();
  const onChange = (e) => props.handleChange(e.target.value);

  return (
    <FormControl className={classes.search}>
      <Input onChange={onChange} value={props.searchKey} placeholder="Search" className={classes.input} />
    </FormControl>
  );
}
