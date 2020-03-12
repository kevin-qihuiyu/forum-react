import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import {
  Header,
  Statistics,
  Notifications,
  BookmarkedJobs,
  AppliedJobs
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  statistics: {
    marginTop: theme.spacing(3)
  },
  notifications: {
    marginTop: theme.spacing(6)
  },
  jobs: {
    marginTop: theme.spacing(6)
  },
}));

const Overview = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Overview"
    >
      <Header />
      <Statistics className={classes.statistics} />
      <Notifications className={classes.notifications} />
      <BookmarkedJobs className={classes.jobs} />
      <AppliedJobs className={classes.jobs} />
    </Page>
  );
};

export default Overview;
