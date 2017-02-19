import React from 'react'
import IndicatorButton from '../Button/IndicatorButton'
import icon from '../../images/icon-envelope.png'

let NewsletterForm = React.createClass({
  getInitialState: function () {
    return {
      buttonState: 'normal'
    }
  },
  render() {
    return (
      <div className='column-4 newsletter-card'>
        <h1 className='card__title'>{this.props.title}</h1>
        <div className='card__body'>
          <p>{this.props.body}</p>
        </div>
        <div className='card__input'>
          <input type="text" placeholder="Enter your e-mail here" name="email" id="email" className='input__email' />
          <span className='input__icon'><img src={icon} alt="icon envelope" /> </span>
        </div>
        <div className='card__button'>
          <IndicatorButton type="success" strokeColor="white" text="Subscribe" />
        </div>
      </div>
    );
  }
})

export default NewsletterForm
