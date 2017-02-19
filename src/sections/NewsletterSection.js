import React from 'react'
import NewsletterForm from '../components/Newsletter/NewsletterForm'
import NewsletterArticle from '../components/Newsletter/Article'

let NewsletterSection = React.createClass({
  getInitialState: function () {
    return {
      newsletterForm: {
        title: 'Subscribe to newsletter',
        body: 'Get in touch with fresh news from pur company and share it.'
      },
      newsletterArticle: {
        title: 'The smartest clock that was ever made!',
        body: `The lord of the Rings is an epic high-fantasy novel written by English author J. R. R. tolkien.
              The story began as sequel to Tolkien's work.`
      }
    }
  },
  render() {
    return (
      <section className='section' id="newsletter">
        <div className='container'>
          <div className='row'>
            <NewsletterArticle title={this.state.newsletterArticle.title} body={this.state.newsletterForm.body} />
            <NewsletterForm title={this.state.newsletterForm.title} body={this.state.newsletterForm.body} />
          </div>
        </div>
      </section>
    );
  }
})

export default NewsletterSection
