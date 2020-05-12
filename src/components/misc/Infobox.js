import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(5, 2),
  },
  divider: {
    margin: theme.spacing(3, 0)
  }
}));

export default function Infobox(props) {
  const classes = useStyles();
  const { header, content } = props;
  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container>
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              {header}
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2">
          {content}
        </Typography>
      </div>
      <Divider className={classes.divider} variant="middle" />
    </div>
  );
}
