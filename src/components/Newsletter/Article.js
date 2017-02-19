import React from 'react'
import RoundButton from '../Button/RoundButton'
import image from '../../images/smart-watch.png'

let NewsletterArticle = React.createClass({
  render() {
    return (
      <div className='column-8 newsletter-article row'>
        <div className='newsletter-article-info column-8'>
          <h1 className='article__title'>{this.props.title}</h1>
          <div className='article__body'>
            <p>{this.props.body}</p>
          </div>
          <div className='article__button'>
            <RoundButton text="See the features" type="blue" />
          </div>
        </div>
        <div className='newsletter-article-image column-4'>
          <img src={image} alt="smart watch image" />
        </div>
      </div>
    );
  }
})

export default NewsletterArticle
