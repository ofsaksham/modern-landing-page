import { FiCamera, FiBell, FiHome } from 'react-icons/fi';

function Services() {
  const mainService = {
    icon: <FiCamera />,
    title: 'Security Camera',
    desc: 'We bring the right people together to challenge established thinking and drive transform in 2020'
  };

  const sideServices = [
    {
      icon: <FiBell />,
      title: 'Fire Detection',
      desc: 'We bring the right people together to challenge established thinking and drive transform in 2020'
    },
    {
      icon: <FiHome />,
      title: 'Smart Home',
      desc: 'We bring the right people together to challenge established thinking and drive transform in 2020'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-header-row">
        <div className="services-header-col">
          <h2>We Provide The Best Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <a href="#" className="services-header-link">Learn More &rarr;</a>
        </div>
      </div>
      <div className="services-main-row">
        <div className="services-main-left">
          <div className="service-main-card">
            <div className="service-main-icon">{mainService.icon}</div>
            <div className="service-main-title">{mainService.title}</div>
            <div className="service-main-desc">{mainService.desc}</div>
            <button className="service-main-btn">Learn more</button>
          </div>
        </div>
        <div className="services-main-right">
          {sideServices.map((service, index) => (
            <div key={index} className="service-side-card">
              <div className="service-side-icon">{service.icon}</div>
              <div className="service-side-title">{service.title}</div>
              <div className="service-side-desc">{service.desc}</div>
              <button className="service-side-btn">Learn more</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services; 