import React from 'react'
import RoundButton from './RoundButton'

let ArticlePurple = React.createClass({
  render() {
    let colors = this.props.colors
    return (
      <article className="column-8 article article--large" style={{background: this.props.bg}}>
        <div className="article__header article__header--large">
          {
            this.props.tags.map(function (tag, index) {
              return(
                <div className='tag' key={index} style={{background: `${colors[index]}`}}>{tag}</div>
              )
            })
          }
        </div>
        <div className="article__body">
          <h1 className='article__title article__title--large'>{this.props.title}</h1>
          <p className='article__description article__description--large'>{this.props.body}</p>
        </div>
        <div className="article__footer">
          <RoundButton text="Read the article" type="white" />
        </div>
      </article>
    );
  }
})

export default ArticlePurple
