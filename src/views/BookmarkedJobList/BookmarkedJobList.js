import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import axios from 'utils/axios';
import { Page, Paginate, SearchBar } from 'components';
import { Header, JobCard } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const BookmarkedJobList = () => {
  const classes = useStyles();
  const [rowsPerPage] = useState(10);
  const [page] = useState(0);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchJobs = () => {
      axios.get('/api/jobs').then(response => {
        if (mounted) {
          setJobs(response.data.jobs);
        }
      });
    };

    fetchJobs();

    return () => {
      mounted = false;
    };
  }, []);

  const handleFilter = () => {};
  const handleSearch = () => {};

  return (
    <Page
      className={classes.root}
      title="Project Management List"
    >
      <Header />
      <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
      />
      <div className={classes.results}>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          {jobs.length} Records found. Page {page + 1} of{' '}
          {Math.ceil(jobs.length / rowsPerPage)}
        </Typography>
        {jobs.map(job => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}
      </div>
      <div className={classes.paginate}>
        <Paginate pageCount={3} />
      </div>
    </Page>
  );
};

export default BookmarkedJobList;
