import React, { Component } from 'react';
import SDialog, {defaultProps as defaultSDialogOptions} from './components/SDialog'
import logo from './logo.svg';
import './components/SDialog.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.showSDialog = this.showSDialog.bind(this)
    this.hideSDialog = this.hideSDialog.bind(this)
    this.state = {
      sDialogOptions: defaultSDialogOptions
    }    
  } 

  showSDialog(options) {
    this.setState({
      sDialogOptions: {
        ...defaultSDialogOptions,
        show: true,
        ...options
      }
    })
  }

  hideSDialog() {
    this.setState({
      sDialogOptions: {
        ...defaultSDialogOptions,
        show: false
      }
    })
  }

  render() {

    const { sDialogOptions } = this.state

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>react-sdialog</h2>
        </div>
        <p className="App-intro">
          A dead simple dialog react component for mobile site, easy, flexible.
        </p>
        <p className="App-btns">
          <button onClick={()=>{
            this.showSDialog({
              skin: 'red',
              content: 'Warning! I Will Be Auto-Destroyed!',
              onDestroy: () => this.hideSDialog()     
            })
          }} style={{color:'red'}}>
          A Red Simple Dialog Auto-Destroyed
          </button>

          <button onClick={()=>{
            this.showSDialog({
              skin: 'green',
              content: 'Good! I Will Be Auto-Destroyed Too!',
              onDestroy: () => this.hideSDialog()     
            })
          }} style={{color:'green'}}>
          A Green Simple Dialog Auto-Destroyed
          </button>

          <button onClick={()=>{
            this.showSDialog({
              content: 'I Am A Simple Dialog With "OK" And "Cancel" Buttons!',
              okBtn: true,
              cancelBtn: true,
              onOk: () => {
                alert("you've clicked OK!!")
                this.hideSDialog()
              },
              onCancel: () => this.hideSDialog()   
            })
          }} style={{color:'#000'}}>
          Simple Dialog With OK / Cancel
          </button>

          <button onClick={()=>{
            this.showSDialog({
              content: 'I Am A Simple Dialog With "OK" Button!',
              okBtn: true,
              onOk: () => {
                alert("you've clicked OK!!")
                this.hideSDialog()
              }
            })
          }} style={{color:'#333'}}>Simple Dialog With OK</button>
        </p>
        <SDialog {...sDialogOptions} />
      </div>
    );
  }
}

export default App;
