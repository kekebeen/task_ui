import React from 'react'
import Service from '../components/Services/Service'

let ServicesSection = React.createClass({
  getInitialState: function () {
    return {
      whiteServices: [
        {
          bg: 'white',
          stat: '$98,420',
          title: 'Project Revenue',
          icon: 'iconChart',
          fontColor: 'white',
          avatarBg: '#11d11f',
          colorClass: 'color-dark'
        },
        {
          bg: 'white',
          stat: '325',
          title: 'New users',
          icon: 'iconUser',
          color: 'dark',
          avatarBg: '#0a95dd',
          colorClass: 'color-dark'
        },
        {
          bg: 'white',
          stat: '3,567',
          title: 'Bags sold',
          icon: 'iconBag',
          color: 'dark',
          avatarBg: '#bb4fd2',
          colorClass: 'color-dark'
        },
        {
          bg: 'white',
          stat: '32',
          title: 'Happy clients',
          icon: 'iconHeart',
          color: 'dark',
          avatarBg: '#f08232',
          colorClass: 'color-dark'
        }
      ],
      colorServices: [
        {
          bg: '#1cc327',
          stat: '$98,420',
          title: 'Projected Revenue',
          icon: 'iconChart',
          color: 'white',
          avatarBg: '#0eae19',
          colorClass: 'color-white'
        },
        {
          bg: '#0a95dd',
          stat: '325',
          title: 'New users',
          icon: 'iconUser',
          color: 'white',
          avatarBg: '#0682c2',
          colorClass: 'color-white'
        },
        {
          bg: '#bb4fd2',
          stat: '3,567',
          title: 'Products sold',
          icon: 'iconBag',
          color: 'white',
          avatarBg: '#a238b9',
          colorClass: 'color-white'
        },
        {
          bg: '#f08232',
          stat: '32',
          title: 'Happy clients',
          icon: 'iconHeart',
          color: 'white',
          avatarBg: '#d26d23',
          colorClass: 'color-white'
        },
      ]
    }
  },
  render() {
    return (
      <section className='section' id="services">
        <div className='container'>
          <div className='grid'>
            {
              this.state.whiteServices.map(function (service, index) {
                return <Service key={index}
                   title={service.title}
                   bg={service.bg} 
                   stat={service.stat} 
                   icon={service.icon}
                   avatarBg={service.avatarBg}
                   colorClass={service.colorClass} />
              })
            }
          </div>
          <div className='grid'>
            {
              this.state.colorServices.map(function (service, index) {
                return <Service key={index}
                   title={service.title}
                   bg={service.bg} 
                   stat={service.stat} 
                   icon={service.icon}
                   service={service.type}
                   colorClass={service.colorClass}
                   avatarBg={service.avatarBg} />
              })
            }
          </div>
        </div>
      </section>
    );
  }
})

export default ServicesSection
