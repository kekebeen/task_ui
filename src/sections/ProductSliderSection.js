import React from 'react'
import ProductBasic from '../components/ProductCard/ProductBasic'
import ProductLarge from '../components//ProductCard/ProductLarge'
import imageFirstSlider from '../images/image-1.png'
import imageSecondSlider from '../images/image-2.png'

let ProductSliderSection = React.createClass({
  getInitialState: function () {
    return {
      single: {
        title: 'Best new products',
        item: {
          images: [imageFirstSlider,'http://placeskull.com/275/176/2554C7', 'http://placeskull.com/275/176/E4317F','http://placeskull.com/275/176/7E2217'],
          title: 'Fetbit Sorge',
          price: '169.99'
        }
      },
      multiple: {
          name: 'Quiet Comfort 24',
          stars: 4.1,
          votes: 674,
          desc: "We've designed our industry-leading headphones with higher-quality materials and finishes.They're lightweight.",
          price: 249,
          shipping: 'Free',
          images: [imageSecondSlider, 'http://placeskull.com/252/252/8D38C9', 'http://placeskull.com/252/252/8D38C9', 'http://placeskull.com/252/252/4CC417']
      }
    }
  },
  render() {
    return (
      <section className='section' id="slider">
        <div className='container'>
          <div className='row'>
            <ProductBasic title={this.state.single.title} item={this.state.single.item} />
            <ProductLarge item={this.state.multiple}/>
          </div>
        </div>
      </section>
    );
  }
})


export default ProductSliderSection
