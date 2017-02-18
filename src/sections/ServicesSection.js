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
          icon: 'chart',
          type: 'white'
        },
        {
          bg: 'white',
          stat: '325',
          title: 'New users',
          icon: 'user',
          color: 'dark'
        },
        {
          bg: 'white',
          stat: '3,567',
          title: 'Bags sold',
          icon: 'bag',
          color: 'dark'
        },
        {
          bg: 'white',
          stat: '32',
          title: 'Happy clients',
          icon: 'heart',
          color: 'dark'
        }
      ],
      colorServices: [
        {
          bg: '#1cc327',
          stat: '$98,420',
          title: 'Projected Revenue',
          icon: 'chart',
          color: 'white'
        },
        {
          bg: '#0a95dd',
          stat: '325',
          title: 'New users',
          icon: 'user',
          color: 'white'
        },
        {
          bg: '#bb4fd2',
          stat: '3,567',
          title: 'Products sold',
          icon: 'bag',
          color: 'white'
        },
        {
          bg: '#f08232',
          stat: '32',
          title: 'Happy clients',
          icon: 'heart',
          color: 'white'
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
                   type={service.type} />
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
                   type={service.type} />
              })
            }
          </div>
        </div>
      </section>
    );
  }
})

export default ServicesSection
