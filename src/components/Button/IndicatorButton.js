import React from 'react'
import icon from '../../images/icon-checkmark.png'

let IndicatorButton = React.createClass({
  getInitialState: function (){
    return {
      show: '',
      currentState: this.props.show || '',
      checkmarkClass: '',
      text: this.props.text || 'Subscribe'
    }
  },
  componentWillMount: function () {
    this.setState({
      checkmarkClass: 'show',
      show: false
    })
  },
  componentWillUnmount: function () {
    clearInterval(buttonLoadingState)
    clearInterval(buttonInitialState)
  },
  render() {
    const strokeColor = this.props.strokeColor === 'dark' ? '#bec0c3' : '#FFFFFF'
    return (
      <div className={`btn btn--round btn--${this.props.type}`}>
        <a href="javascript:void(0)" className='btn__link' onClick={this.handleButtonState}>
          <img src={icon} alt="icon checkmark" className={this.state.checkmarkClass } />
          <svg className={`progress__circle ${this.state.show ? 'show' : ''}`} viewBox='0 0 41 41'>
            <path d='M38,20.5 C38,30.1685093 30.1685093,38 20.5,38' />
          </svg>
          {this.state.text}
        </a>
      </div>
    );
  },
  handleButtonState: function (e) {
    e.preventDefault()

    this.setState({
      show: true,
      checkmarkClass: ''
    })

    let buttonLoadingState = setTimeout(() => {
      this.setState({
        show: false,
        text: `${this.props.message? this.props.message: 'Message sent'}`,
        checkmarkClass: 'show'
      })
      alert("Message sent");
    }, 1500) // show loading indicator

    let buttonInitialState = setTimeout(() => {
      this.setState({
      text: 'Subscribe'
      })
    }, 4000) // show default message again

    }
})

export default IndicatorButton
