import React from 'react'

let ProductBasic = React.createClass({
  render() {
    return (
      <div className='column-4 product-slider'>
        <div className='product-slider__header'>
          <span className='header__block'>
            <h1 className='header__title'>{this.props.title}</h1>
          </span>
          <span className='header__block dots'>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
          </span>
        </div>
        <div className='product-slider__body'></div>
        <div className='product-slider__footer'></div>
      </div>
    );
  }
})

export default ProductBasic
