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

  const [appliedJobs, setAppliedJobs] = useState(null);
  const [bookmarkedJobs, setBookmarkedJobs] = useState(null);
  const [files, setFiles] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchInfos = () => {
      axios.get('/api/users/1/files').then(response => {
        if (mounted) {
          setFiles(response.data.files);
        }
      });
      axios.get('/api/users/1/appliedJobs').then(response => {
        if (mounted) {
          setAppliedJobs(response.data.jobs);
        }
      });
      axios.get('/api/users/1/bookmarkedJobs').then(response => {
        if (mounted) {
          setBookmarkedJobs(response.data.jobs);
        }
      });
    };

    fetchInfos();

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
    { value: 'bookmarkedJobs', label: '收藏的职位' },
    { value: 'appliedJobs', label: '已投递的职位' }
  ];

  if (!tab) {
    return <Redirect to={`/profile/${id}/general`} />;
  }

  if (!tabs.find(t => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }

  if (!appliedJobs || !bookmarkedJobs || !files) {
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
          {tab === 'cv' && <Files files={files} />}
          {tab === 'bookmarkedJobs' && <Jobs jobs={appliedJobs} />}
          {tab === 'appliedJobs' && <Jobs jobs={bookmarkedJobs} />}
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
