import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, Hidden, Avatar } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles(theme => ({
  root: {},
  summaryButton: {
    backgroundColor: theme.palette.white
  },
  barChartIcon: {
    marginRight: theme.spacing(1)
  },
  image: {
    width: '100%',
    maxHeight: 400
  },
  avatar: {
    width: 60,
    height: 60,
    'margin-bottom': 15
  },
}));

const Header = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const session = useSelector(state => state.session);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="center"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <Hidden smUp>
            <Avatar
              alt="Person"
              className={classes.avatar}
              src={session.user.avatar}
            />
          </Hidden>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Home
          </Typography>
          <Typography
            component="h1"
            gutterBottom
            variant="h3"
          >
            您好, {session.user.first_name}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
          >
            欢迎来到您的定制化求职空间
          </Typography>
          <Button
            className={classes.summaryButton}
            edge="start"
            variant="contained"
            component={RouterLink}
            to="/profile/1/cv"
          >
            <BarChartIcon className={classes.barChartIcon} />
            我的简历
          </Button>
        </Grid>
        {/* <Hidden smDown> */}
          <Grid
            item
            md={6}
          >
            <img
              alt="Cover"
              className={classes.image}
              // src="/images/undraw_growth_analytics_8btt.svg"
              src="/images/job_search.png"
            />
          </Grid>
        {/* </Hidden> */}
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
