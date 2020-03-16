import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { JobCard } from 'components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Jobs = props => {
  const { jobs, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        container
        spacing={3}
      >
        {jobs.map(job => (
          <Grid
            item
            key={job.id}
            lg={4}
            lx={4}
            md={6}
            xs={12}
          >
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Jobs.propTypes = {
  className: PropTypes.string
};

export default Jobs;
