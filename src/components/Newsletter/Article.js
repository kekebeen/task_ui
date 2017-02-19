import React from 'react'
import RoundButton from '../Button/RoundButton'

let NewsletterArticle = React.createClass({
  render() {
    return (
      <div className='column-8 newsletter-article'>
        <h1 className='article__title'>{this.props.title}</h1>
        <div className='article__body'>
          <p>{this.props.body}</p>
        </div>
        <div className='card__button'>
          <RoundButton text="See the features" />
        </div>
      </div>
    );
  }
})

export default NewsletterArticle
