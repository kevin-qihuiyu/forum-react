import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Deliverables = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Typography variant="h4">公司介绍:</Typography>
        <Typography variant="body1">
          小米公司成立于2010年4月，是一家有实体经济的互联网公司。小米公司是专注于智能手机、智能家居、互联网电视的创新型科技企业。同时，在互联网金融（支付、信贷、保险、理财等）、互娱和影业等领域也积极布局，并初具规模。小米用互联网开发模式、极客精神研发产品，致力于让每个人都能享受科技的乐趣。
        </Typography>
      </CardContent>
    </Card>
  );
};

Deliverables.propTypes = {
  className: PropTypes.string
};

export default Deliverables;
