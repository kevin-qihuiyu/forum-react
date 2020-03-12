import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import axios from 'utils/axios';

import { Page } from 'components';
import { Header, Jobs, General, Files } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  inner: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const Profile = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { id, tab } = match.params;

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

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  const tabs = [
    { value: 'general', label: '个人信息' },
    { value: 'cv', label: '简历管理' },
    { value: 'favoriteJobs', label: '收藏的职位' },
    { value: 'appliedJobs', label: '已投递的职位' }
  ];

  if (!tab) {
    return <Redirect to={`/profile/${id}/timeline`} />;
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
      title="Profile"
    >
      <Header />
      <div className={classes.inner}>
        <Tabs
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
        <div className={classes.content}>
          {tab === 'general' && <General />}
          {tab === 'cv' && <Files files={job.files} />}
          {tab === 'favoriteJobs' && <Jobs />}
          {tab === 'appliedJobs' && <Jobs />}
        </div>
      </div>
    </Page>
  );
};

Profile.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default Profile;
