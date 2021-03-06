import React from 'react'
import Carousel from '../Carousel/Carousel'
import Rating from '../Rating/Rating'
import iconBag from '../../images/icon-bag-dark.png'
import iconCard from '../../images/icon-card.png'

let ProductLarge = React.createClass({
  render() {
    let name = this.props.item.name,
        stars = this.props.item.stars,
        votes = this.props.item.votes,
        desc = this.props.item.desc,
        price = this.props.item.price,
        shipping = this.props.item.shipping,
        images = this.props.item.images

    return (
      <div className='column-8 product-slider product-slider--large'>
        <div className='product-slider__header--large'>
          <div className='header__block breadcrumbs'>
            <ul>
              <li className='list__item'>Home / </li>
              <li className='list__item'>Store / </li>
              <li className='list__item'>Sound / </li>
              <li className='list__item list__item--current'>Sound </li>
            </ul>
          </div>
          <div className='header__block dots'>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
          </div>
        </div>

        <div className='product-slider__body product-slider__body--large row'>
          <div className='column-6 product-slider__carousel'>
            <Carousel className="carousel" indicator={true} switcher={true}>
              {
                images.map((image, i) => {
                  return(
                      <div className='item' key={i}>
                        <div className='item__img'>
                          <img src={image} key={i} alt="image-carousel" />
                        </div>
                      </div>
                    )
                })
              }
            </Carousel>
          </div>

          <div className='span-6 product-slider__description'>
            <div className='padding__box'>
              <h1 className='title'>{name}</h1>
              <div className='rating'>
                <Rating votes={votes} stars={stars} />
                <span className='rating__votes'>{stars} ({votes} votes)</span>
              </div>
              <div className='description'>
                <p className='description__text'>{desc}</p>
              </div>
              <div className='pricing'>
                <div className='pricing__price'>
                  <span className='pricing__title'>Price: </span>
                  <span className='value'>${price}</span>
                </div>
                <div className='pricing__shipping'>
                  <span className='pricing__title'>Shipping: </span>
                  <span className='value'>{shipping}</span>
                </div>
              </div>
            </div>
            <div className='footer'>
              <div className='footer__block btn btn--bag'>
                <span className='btn__icon'><img src={iconBag} alt="icon-bag" /></span>
                <span className='btn__text'>Add to bag</span>
              </div>
              <div className='footer__block btn btn--buy'>
                <span className='btn__icon'><img src={iconCard} alt="icon-card" /></span>
                <span className='btn__text'>Buy now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
})



export default ProductLarge
