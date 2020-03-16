import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Typography
} from '@material-ui/core';

import getInitials from 'utils/getInitials';
import { Label } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    paddingBottom: 0
  },
  content: {
    paddingTop: 0
  },
  listItem: {
    padding: theme.spacing(2, 0),
    justifyContent: 'space-between'
  }
}));

const Holder = props => {
  const { job, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        avatar={
          <Avatar
            alt="Author"
            className={classes.avatar}
            component={RouterLink}
            src={job.author.avatar}
            to="/profile/1/timeline"
          >
            {getInitials(job.author.name)}
          </Avatar>
        }
        className={classes.header}
        disableTypography
        subheader={
          <Typography
            component={RouterLink}
            to="/profile/1/timeline"
            variant="h5"
          >
            {job.author.name}
          </Typography>
        }
        title={
          <Typography
            display="block"
            variant="overline"
          >
            Company
          </Typography>
        }
      />
      <CardContent className={classes.content}>
        <List>
          {/* <ListItem
            className={classes.listItem}
            disableGutters
            divider
          >
            <Typography variant="subtitle2">职位发布于</Typography>
            <Typography variant="h6">
              {moment(job.deadline).format('DD MMM YYYY')}
            </Typography>
          </ListItem> */}
          <ListItem
            className={classes.listItem}
            disableGutters
            divider
          >
            <Typography variant="subtitle2">薪资</Typography>
            <Typography variant="h6">
              {job.salary} {job.currency}
            </Typography>
          </ListItem>
          <ListItem
            className={classes.listItem}
            disableGutters
            divider
          >
            <Typography variant="subtitle2">行业</Typography>
            <Label color={job.tags[0].color}>{job.tags[0].text}</Label>
          </ListItem>
          <ListItem
            className={classes.listItem}
            disableGutters
            divider
          >
            <Typography variant="subtitle2">职位发布于</Typography>
            <Typography variant="h6">
              {moment(job.updated_at).format('DD MMM YYYY')}
            </Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

Holder.propTypes = {
  className: PropTypes.string,
  job: PropTypes.object.isRequired
};

export default Holder;
