# react-sdialog
A dead simple dialog react component for mobile site, easy, flexible.   

[live Demo](http://www.iampua.com/pui/react-sdialog.html)    

## How to use it?

``` javascript
import React, { Component } from 'react';
import SDialog, {defaultProps as defaultSDialogOptions} from './components/SDialog'
import './components/SDialog.css';

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
          
        <SDialog {...sDialogOptions} />
        
      </div>
    )
  }
}

export default App

```

This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app), which provides a simple way to start React projects with no build configuration needed.

Projects built with Create-React-App include support for ES6 syntax, as well as several unofficial / not-yet-final forms of Javascript syntax such as Class Properties and JSX.  See the list of [language features and polyfills supported by Create-React-App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills) for more information.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

