import React from 'react'
import RoundButton from './RoundButton'

let ArticleSmall = React.createClass({
  render() {
    let colors = this.props.colors
    return (
      <article className="column-4 article article--small" style={{background: this.props.bg}}>
        <div className="article__header article__header--small">
          <div className='article__author'>
            <div className='author__avatar'>

            </div>
            <div className='author__name'>
              {this.props.author}
              <div className='posts__count'>{this.props.numberOfPosts} posts</div>
            </div>
          </div>
        </div>
        <div className="article__body">
          <h1 className='article__title article__title--small'>{this.props.title}</h1>
          <p className='article__description'>{this.props.body}</p>
        </div>
        <div className="article__footer">
          <RoundButton text="Read the article" type="dark" strokeColor="dark" />
        </div>
      </article>
    );
  }
})

export default ArticleSmall
