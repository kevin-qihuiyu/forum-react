import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  options: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Preferences = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Preferences" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
        >
          Options
        </Typography>
        <Typography variant="body2">
          You will recieve emails in your business email address
        </Typography>
        <div className={classes.options}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                defaultChecked //
              />
            }
            label="Example option 1"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                defaultChecked //
              />
            }
            label="Example option 2"
          />
        </div>
      </CardContent>
    </Card>
  );
};

Preferences.propTypes = {
  className: PropTypes.string
};

export default Preferences;
