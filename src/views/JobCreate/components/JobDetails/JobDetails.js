import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';

import { RichEditor } from 'components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const JobDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Job description details" />
      <CardContent>
        <RichEditor placeholder="Describe the Job requirements..." />
      </CardContent>
    </Card>
  );
};

JobDetails.propTypes = {
  className: PropTypes.string
};

export default JobDetails;
