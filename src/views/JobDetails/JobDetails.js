import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import axios from 'utils/axios';
import { Page, Alert } from 'components';
import { Header, Overview, CompanyDetails, Activities } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  alert: {
    marginTop: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const JobDetails = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { id, tab } = match.params;
  const [openAlert, setOpenAlert] = useState(true);
  const [job, setJob] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchJob = () => {
      axios.get('/api/jobs/1').then(response => {
        if (mounted) {
          setJob(response.data.job);
        }
      });
    };

    fetchJob();

    return () => {
      mounted = false;
    };
  }, []);

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  const tabs = [
    { value: 'overview', label: '职位简介' },
    { value: 'companyDetails', label: '公司简介' },
    { value: 'activity', label: '招聘进度' },
  ];

  if (!tab) {
    return <Redirect to={`/jobs/${id}/overview`} />;
  }

  if (!tabs.find(t => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }

  if (!job) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Job Details"
    >
      <Header job={job} />
      <Tabs
        className={classes.tabs}
        onChange={handleTabsChange}
        scrollButtons="auto"
        value={tab}
        variant="scrollable"
      >
        {tabs.map(tab => (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
          />
        ))}
      </Tabs>
      <Divider className={classes.divider} />
      {/* {openAlert && (
        <Alert
          className={classes.alert}
          message="The content holder has extended the deadline! Good luck"
          onClose={handleAlertClose}
        />
      )} */}
      <div className={classes.content}>
        {tab === 'overview' && <Overview job={job} />}
        {tab === 'companyDetails' && <CompanyDetails job={job} />}
        {tab === 'activity' && <Activities activities={job.activities} />}
      </div>
    </Page>
  );
};

JobDetails.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default JobDetails;
