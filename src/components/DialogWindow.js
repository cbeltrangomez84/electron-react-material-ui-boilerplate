import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class DialogWindow extends React.Component {

  handleClose = (evt) => {
    //if closeOnClick param is false, the dialog should not be closed clicking outside
    if(this.props.data.closeOnClick===false) return;
    this.props.closeModalWindow();
  }

  render() {
    let showTitle = this.props.data.title !== '' && this.props.data.title !== undefined;

    let buttons = null;

    if(this.props.data.buttons!==undefined && this.props.data.buttons.length>0) {
      buttons=[];

      for (var i = this.props.data.buttons.length - 1; i >= 0; i--) {
        let currentCallback = this.handleClose;
        let modalRef = this;

        if(this.props.data.buttons[i].callback) {
          currentCallback = (function() {
            modalRef.handleClose();
            this.callback(this.label);
          }).bind(this.props.data.buttons[i])
        }

        buttons.unshift(<Button key={'butMod'+i} onClick={currentCallback} color="primary" autoFocus>{this.props.data.buttons[i].label}</Button>);
      }
    }
    else {
      buttons=[<Button key='butMod1' onClick={this.handleClose} color="primary" autoFocus>{"OK"}</Button>];
    }

    if((this.props.data.title==="" || this.props.data.title===undefined) && (this.props.data.message==="" || this.props.data.message===undefined)) return null;

    return (
      <React.Fragment>
        <Dialog
          open={this.props.showDialogWindow}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {showTitle && <DialogTitle id="alert-dialog-title">{this.props.data.title}</DialogTitle>}
          <DialogContent>
            <Typography component={'span'} variant={'body1'}>
              {this.props.data.message}
            </Typography>
          </DialogContent>
          <DialogActions>
            {buttons}
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default (DialogWindow);
