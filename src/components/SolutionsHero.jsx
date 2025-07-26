import { FaPlayCircle } from 'react-icons/fa';

function SolutionsHero() {
  return (
    <section className="solutions-hero-section">
      <div className="solutions-hero-bg" />
      <div className="solutions-hero-content">
        <h2>Security Solutions for Your Work and Home</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="solutions-hero-actions">
          <button className="solutions-hero-btn">Learn More</button>
          <FaPlayCircle className="solutions-hero-play" size={48} />
        </div>
      </div>
    </section>
  );
}

export default SolutionsHero; 