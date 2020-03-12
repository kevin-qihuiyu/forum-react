import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import axios from 'utils/axios';
import { JobCard } from 'components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Jobs = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchJobs = () => {
      if (mounted) {
        axios
          .get('/api/users/1/jobs')
          .then(response => setJobs(response.data.jobs));
      }
    };

    fetchJobs();

    return () => {
      mounted = false;
    };
  }, []);

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
