import * as React from 'react';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { withContext } from '../app/AppContext';

const styles = theme => ({
  screenWindow: {
    position: 'absolute',
    top: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  paperContainer: {
    margin: theme.spacing(2, 3, 2, 3),
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },

  button: {
    marginBottom: theme.spacing(1),
  }
});



class Screen1 extends React.Component {

  state = {
    buttonDialogText: "Dialog Example",
    buttonModalLoaderText: "Modal Loader Example"
  }

  render() {
		const { classes } = this.props;

    return (
      <div className={classes.screenWindow}>
        <React.Fragment>
          <Paper className={classes.paperContainer}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => {
                this.context.showDialog({title:"Save Dialog Example",message:"¿Do you want to save?",buttons:[
                  {label:"Yes",callback:() => {console.log("Yes Clicked!")}},
                  {label:"No"}
                ]});
              }}
            >
              {this.state.buttonDialogText}
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => {
                this.context.showErrorMessageDialog("SimpleError");
              }}
            >
              {"Error Dialog Example"}
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => {
                this.context.showLoader(true,"Waiting...");

                setTimeout(() => {
                  this.context.changeLoaderText("Waiting more...",true);
                }, 2000);
              }}
            >
              {this.state.buttonModalLoaderText}
            </Button>
          </Paper>
        </React.Fragment>
      </div>
    )
  }
}

export default withStyles(styles,{ withTheme: true })(withContext(Screen1));
