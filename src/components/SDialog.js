import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const propTypes = {
  show: PropTypes.bool,
  skin: PropTypes.string,
  content: PropTypes.string,
  width: PropTypes.number,
  okBtn: PropTypes.bool,
  okBtnText: PropTypes.string,
  cancelBtn: PropTypes.bool,
  cancelBtnText: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  onDestroy: PropTypes.func,
  autoTime: PropTypes.number,
}

export const defaultProps = {
  skin: 'block',
  show: false,
  content: '',
  width: 250,
  okBtn: false,
  cancelBtn: false,
  okBtnText: 'OK',
  cancelBtnText: 'Cancel',
  onOk: function(){},
  onCancel: function(){},
  onDestroy: function(){},
  autoTime: 2000,
}

class SDialog extends Component {
  constructor(props) {
    super(props)
    this.onOk = this.onOk.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.destroy = this.destroy.bind(this)
  }

  componentDidMount() {
    const {
      show,
      okBtn,
      cancelBtn,
      autoTime,
      onDestroy
    } = this.props;
    if (show) {
      this.open()
      if(!okBtn || !cancelBtn){
        setTimeout(()=> {
          this.destroy()
          onDestroy && onDestroy()
        }, autoTime)
      }
    }
  }

  componentDidUpdate(prevProps) {
    const {
      show,
      okBtn,
      cancelBtn,
      autoTime,
      onDestroy
    } = this.props;
    if (show !== prevProps.show && show) {
      this.open()
      if(!okBtn && !cancelBtn){
        setTimeout(()=> {
          this.destroy()
          onDestroy && onDestroy()
        }, autoTime)
      }
    }
  }

  componentWillUnmount() {
    this.destroy()
    this.props.onDestroy && this.props.onDestroy()
  }

  onOk() {
    this.props.onOk && this.props.onOk()
    this.destroy()
  }

  onCancel() {
    this.props.onCancel && this.props.onCancel()
    this.destroy()
  }

  destroy() {
    if (this._el) {
      this._el.querySelector('.sdialog__mask').classList.add('maskFadeOut')
      this._el.querySelector('.sdialog__wrapper').classList.add('wrapperFadeOutUp')
      setTimeout(()=>{
        ReactDOM.unmountComponentAtNode(this._el)
        document.body.removeChild(this._el)
        this._el = null
      }, 150)
    }
  }

  open() {
    this._el = document.createElement('div')
    document.body.appendChild(this._el)
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.renderSDialog(),
      this._el
    );
  }

  renderSDialog() {
    const {
      skin,
      content,
      width,
      okBtn,
      okBtnText,
      cancelBtn,
      cancelBtnText
    } = this.props;

    return (
      <div className="sdialog" key="sdialog">
        <div className="sdialog__mask maskFadeIn sdialog_animated" style={{height: (document.body.offsetHeight > window.screen.height ? document.body.offsetHeight : window.screen.height) + 'px'}} />
        <div className={'sdialog__wrapper wrapperFadeInDown sdialog_animated sdialog__wrapper--skin-' + skin} style={{left:'50%', top: (window.screen.height/2 - 60) + 'px', width: width + 'px', marginLeft: (width*(-1)/2) + 'px'}} >
          <div className="sdialog__content"
            dangerouslySetInnerHTML={{
              __html: content
          }} />
          {(okBtn || cancelBtn) && (
            <div className="sdialog__btns">
              {okBtn && (<button className="sdialog__btn sdialog__btn--ok" onClick={this.onOk}>{okBtnText}</button>)}
              {cancelBtn && <button className="sdialog__btn sdialog__btn--cancel" onClick={this.onCancel}>{cancelBtnText}</button>}
            </div>
          )}
        </div>
      </div>
    )

  }

  render() {
    return null
  }
}

SDialog.propTypes = propTypes
SDialog.defaultProps = defaultProps

export default SDialog
