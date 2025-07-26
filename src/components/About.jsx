import { FiThumbsUp, FiHeadphones, FiCheckSquare } from 'react-icons/fi';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';

function About() {
  const whyChooseItems = [
    {
      icon: <FiThumbsUp />,
      title: '23 Years Experience',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.'
    },
    {
      icon: <FiHeadphones />,
      title: '24/7 Support',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.'
    },
    {
      icon: <FiCheckSquare />,
      title: 'Industry Certified',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.'
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-media-col">
        <div className="about-media-top">
          <img
            src={image1}
            alt="About Video"
            className="about-media-img"
          />
        </div>
        <div className="about-media-bottom">
          <img
            src={image2}
            alt="About Tools"
            className="about-media-img"
          />
        </div>
      </div>
      <div className="about-card-main">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="about-learn-btn">Learn More</button>
      </div>
      <div className="about-why-card">
        <h3>Why Choose Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <ul className="about-why-list">
          {whyChooseItems.map((item, index) => (
            <li key={index}>
              <span className="about-why-icon">{item.icon}</span>
              <span>
                <b>{item.title}</b>
                <br />
                <span className="about-why-desc">{item.desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About; 