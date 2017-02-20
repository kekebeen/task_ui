import React from 'react'
import ProductBasic from '../components/ProductCard/ProductBasic'
import ProductLarge from '../components//ProductCard/ProductLarge'

let ProductSliderSection = React.createClass({
  getInitialState: function () {
    return {
      single: {
        title: 'Best new products',
        item: {
          img: '/images/image-1.png',
          title: 'Fetbit Sorge',
          price: '169.99'
        }
      }
    }
  },
  render() {
    return (
      <section className='section' id="slider">
        <div className='container'>
          <div className='row'>
            <ProductBasic title={this.state.single.title} item={this.state.single.item}/>
            <ProductLarge />
          </div>
        </div>
      </section>
    );
  }
})

export default ProductSliderSection
