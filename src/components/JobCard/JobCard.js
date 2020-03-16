import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Link,
  Tooltip,
  Typography,
  colors
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import getInitials from 'utils/getInitials';
import { Label } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    paddingBottom: 0
  },
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  description: {
    padding: theme.spacing(2, 3, 1, 3)
  },
  tags: {
    padding: theme.spacing(0, 3, 1, 3),
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  learnMoreButton: {
    marginLeft: theme.spacing(2)
  },
  likedButton: {
    color: colors.red[600]
  },
  shareButton: {
    marginLeft: theme.spacing(1)
  },
  details: {
    padding: theme.spacing(1, 3)
  }
}));

const JobCard = props => {
  const { job, className, ...rest } = props;

  const classes = useStyles();

  const [liked, setLiked] = useState(job.liked);

  const handleLike = () => {
    setLiked(true);
  };

  const handleUnlike = () => {
    setLiked(false);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        avatar={
          <Avatar
            alt="Author"
            src={job.author.avatar}
          >
            {getInitials(job.author.name)}
          </Avatar>
        }
        className={classes.header}
        disableTypography
        subheader={
          <Typography variant="body2">
            by{' '}
            <Link
              color="textPrimary"
              component={RouterLink}
              to="/profile/1/timeline"
              variant="h6"
            >
              {job.author.name}
            </Link>{' '}
            {/* | Updated: {moment(job.updated_at).fromNow()} */}
          </Typography>
        }
        title={
          <Link
            color="textPrimary"
            component={RouterLink}
            to="/jobs/1/overview"
            variant="h5"
          >
            {job.title}
          </Link>
        }
      />
      <CardContent className={classes.content}>
        <div className={classes.description}>
          <Typography
            colo="textSecondary"
            variant="subtitle2"
          >
            We're looking for experienced collaborators to
            come aboard and help us build succesful businesses.
          </Typography>
        </div>
        {/* <div className={classes.tags}>
          {job.tags.map(tag => (
            <Label
              color={tag.color}
              key={tag.text}
            >
              {tag.text}
            </Label>
          ))}
        </div> */}
        <Divider />
        <div className={classes.details}>
          <Grid
            alignItems="center"
            container
            justify="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography variant="body2">薪资</Typography>
              <Typography variant="h5">{job.salary}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">工作地点</Typography>
              <Typography variant="h5">{job.location}</Typography>
            </Grid>
            {/* <Grid item>
              <Typography variant="h5">{job.type}</Typography>
              <Typography variant="body2">Type</Typography>
            </Grid> */}
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

JobCard.propTypes = {
  className: PropTypes.string,
  job: PropTypes.object.isRequired
};

export default JobCard;
