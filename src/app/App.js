import * as React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import ModalLoader from '../components/ModalLoader';
import DialogWindow from '../components/DialogWindow';

import { AppContext } from './AppContext';

import Screen1 from '../screens/Screen1';


const drawerWidth = 240;

const MyTheme = createMuiTheme({
  overrides: {
      MuiAutocomplete: {
        input: {
          width: '0% !important',
        }
      },
  }
});

const styles = theme => ({
	root: {
    display: 'flex',
    height: '100%',
  },
});

class App extends React.Component {

  state = {
    showModalLoader:false,
    showDialogWindow:false,
    DialogWindowData:{}
  }

  constructor() {
    super();

    window.app = this;
    window.require('electron').remote.app.overrideConsoleLog(console.log);
  }

  async componentDidMount() {
  }


  showDialog = (data) => {
    this.setState({DialogWindowData:data,showDialogWindow:true,showModalLoader:false});
  }

  showErrorMessageDialog = (msg) => {
    this.showDialog({title:"Error",message:msg,buttons:[
      {label:"Continue"}
    ]});
  }

  closeDialog = () => {
    this.setState({DialogWindowData:{},showDialogWindow:false});
  }

  showLoader = (val,loaderText='') => {
    this.setState({showModalLoader:val,loaderText})
  }

  changeLoaderText = (loaderText,removeLoader=false) => {
    if(removeLoader) {
      setTimeout(() => {
        this.setState({showModalLoader:false});
      }, 2000);
    }

    this.setState({loaderText})
  }


  render() {
    const { classes } = this.props;

    return (
      <AppContext.Provider value={this}>
        <ModalLoader showModalLoader={this.state.showModalLoader} text={this.state.loaderText}/>
        <DialogWindow showDialogWindow={this.state.showDialogWindow} data={this.state.DialogWindowData} closeModalWindow={this.closeDialog}/>
        <MuiThemeProvider theme={MyTheme}>
          <div className={classes.root}>
            <Screen1 />
          </div>
        </MuiThemeProvider>
      </AppContext.Provider>
    )
  }
}

export default withStyles(styles,{ withTheme: true })(App)
