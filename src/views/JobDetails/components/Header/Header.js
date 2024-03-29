import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, colors } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Label } from 'components';
import { Application } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  label: {
    marginTop: theme.spacing(1)
  },
  shareButton: {
    marginRight: theme.spacing(2)
  },
  shareIcon: {
    marginRight: theme.spacing(1)
  },
  applyButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

const Header = props => {
  const { job, className, ...rest } = props;

  const classes = useStyles();

  const [openApplication, setOpenApplication] = useState(false);

  const handleApplicationOpen = () => {
    setOpenApplication(true);
  };

  const handleApplicationClose = () => {
    setOpenApplication(false);
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="flex-end"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid item>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            浏览职位
          </Typography>
          <Typography
            component="h1"
            gutterBottom
            variant="h3"
          >
            {job.title}
          </Typography>
          <Label
            className={classes.label}
            color={colors.green[600]}
            variant="outlined"
          >
            FORUM快速通道
          </Label>
        </Grid>
        <Grid item>
          <Button
            className={classes.shareButton}
            variant="contained"
          >
            {/* <ShareIcon className={classes.shareIcon} /> */}
            <FavoriteIcon />
            收藏
          </Button>
          <Button
            className={classes.applyButton}
            onClick={handleApplicationOpen}
            variant="contained"
          >
            申请
          </Button>
        </Grid>
      </Grid>
      <Application
        author={job.author}
        onApply={handleApplicationClose}
        onClose={handleApplicationClose}
        open={openApplication}
      />
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  job: PropTypes.object.isRequired
};

Header.defaultProps = {};

export default Header;
