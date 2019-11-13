import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/blankStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBlank() {
  const classes = useStyles();
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.testCenter}>
          <span className={classes.test}>some content</span>
        </div>
      </div>
    </div>
  );
}
