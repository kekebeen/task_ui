import React from 'react'
import ServicesSection from '../sections/ServicesSection'
import VideoSection from '../sections/VideoSection'
import MusicSection from '../sections/MusicSection'
import ProductSliderSection from '../sections/ProductSliderSection'
import NewsletterSection from '../sections/NewsletterSection'
import FiltersSection from '../sections/FiltersSection'
import ChartsSection from '../sections/ChartsSection'
import ArticlesSection from '../sections/ArticlesSection'

let MainLayout = React.createClass({
  render() {
    return (
      <div className='page'>
        <VideoSection />
        <MusicSection />
        <ProductSliderSection />
        <NewsletterSection />
        <FiltersSection />
        <ServicesSection />
        <ChartsSection />
        <ArticlesSection />
      </div>
    );
  }
})

export default MainLayout
