import React from 'react'
import Carousel from '../Carousel/Carousel'


let ProductBasic = React.createClass({
  render() {
    let price = this.props.item.price
    let title = this.props.item.title
    return (
      <div className='column-4 product-slider'>
        <div className='product-slider__header--small'>
          <span className='header__block'>
            <h1 className='header__title'>{this.props.title}</h1>
          </span>
          <span className='header__block dots'>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
          </span>
        </div>
        <div className='product-slider__body product-slider__body--small'>
          <Carousel className="carousel" indicator={true} switcher={true}>
              {
                this.props.item.images.map((item, i) => {
                  return(
                      <div className='item' key={i}>
                        <div className='item__img'>
                          <img src={item} key={i} alt="image-carousel" />
                        </div>
                        <div className='item__title'>
                          <h1 className='title'>{title}</h1>
                          <h5 className='price'>${price}</h5>
                        </div>
                      </div>
                    )
                })
              }
          </Carousel>
        </div>
      </div>
    );
  }
})



export default ProductBasic
