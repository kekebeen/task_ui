import React from 'react'
import ArticlePurple from '../components/Articles/ArticlePurple'
import ArticleSmall from '../components/Articles/ArticleSmall'

let ArticlesSection = React.createClass({
  getInitialState: function() {
    return {
      post1: {
        title: "Best startups of 2016",
        body: `The lord of the rings is an epic high-fantasy novel written by English author J.R.R.Tolkien
              .The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into
              a much larger work.`,
        tags: ["Technology", "Startups"],
        colors: ["#dd8b0a", "#0a95dd"],
        bg: '#9c62b5'
      },
      post2: {
        author: "Grag Willson",
        numberOfPosts: 17,
        title: "Senior Designer isn't a dead end.",
        body: "Position of a Senior Designer isn't the end of your development.You can choose various career paths and this point",
      }
    };
  },
  render() {
    return (
      <section className='section' id="articles">
        <div className='container'>
          <div className="row">
            <ArticlePurple title={this.state.post1.title}
              body={this.state.post1.body}
              tags={this.state.post1.tags} 
              colors={this.state.post1.colors}
              bg={this.state.post1.bg}/>
            
            <ArticleSmall title={this.state.post2.title} 
              author={this.state.post2.author}
              numberOfPosts={this.state.post2.numberOfPosts}
              body={this.state.post2.body} />
          </div>
        </div>
      </section>
    );
  }
})

export default ArticlesSection
