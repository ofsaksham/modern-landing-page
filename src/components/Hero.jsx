import { FaPlay } from 'react-icons/fa';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';

function Hero() {
  const stats = [
    { number: '11', label: 'Experience' },
    { number: '25', label: 'Product' },
    { number: '100+', label: 'Project Done' }
  ];

  return (
    <section className="hero-section">
      <img
        src={image1}
        alt="Background Camera"
        className="hero-bg-blur"
      />
      <div className="hero-content">
        <h1>
          Professional <br />
          Security Services <br />
          You Can Trust
        </h1>
        <p className="hero-sub">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div key={index} className="hero-stat">
              <span>{stat.number}</span> {stat.label}
            </div>
          ))}
        </div>
      </div>
      <div className="hero-image-oval-wrap">
        <div className="hero-image-oval">
          <img
            src={image2}
            alt="Security Camera"
            className="hero-image-main"
          />
          <button className="hero-play-btn">
            <FaPlay />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero; 