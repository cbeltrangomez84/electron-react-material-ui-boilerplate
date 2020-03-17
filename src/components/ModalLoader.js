import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
    modalWn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: "100000001",
    },

    divLoader: {
      display: "flex",
      height: '100%',
      justifyContent: 'center',
      alignItems: "center",
      flexDirection: "column",
      outline: "0px solid transparent",
    },

    divText: {
      marginTop: "8px",
      color: "white",
      fontFamily: "Roboto",
      maxWidth: "200px",
      textAlign: "center",
    },

    circular: {
      outline: "0px solid transparent",
      color: "white",
    }
});

class ModalLoader extends React.Component {

  render() {
    const { classes } = this.props;

    if(!this.props.showModalLoader) return null;

    return (
      <React.Fragment>
        <Modal
          open={true}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          classes={{ root: classes.modalWn }}
          disableAutoFocus={true}
        >
          <div className={classes.divLoader}>
            <CircularProgress size={50} className={classes.circular} />
            {this.props.text && <div className={classes.divText}>{this.props.text}</div>}
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default (withStyles(styles,{ withTheme: true })(ModalLoader));
