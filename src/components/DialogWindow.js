import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

/*const FW_theme = createMuiTheme({
   palette: {
    primary: {
      light: '#FFF',
      main: '#FFF',
      dark: '#FFF',
      contrastText: '#FFF',
    },
    secondary: {
      light: COLOR.FLIPWIT_COLOR_1,
      main: COLOR.FLIPWIT_COLOR_1,
      dark: COLOR.FLIPWIT_COLOR_1,
      contrastText: COLOR.FLIPWIT_COLOR_1,
    }
  },
});*/

/*const styles = theme => ({
});*/


class DialogWindow extends React.Component {

  handleClose = (evt) => {
    //Si se pasa el parametro closeOnClick en false, es porque no se quiere que el popUp se pueda cerrar
    //dando clic fuera de la ventana en la parte transparente
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
            <DialogContentText id="alert-dialog-description">
              {this.props.data.message}
            </DialogContentText>
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
