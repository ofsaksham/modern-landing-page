import { FaStar, FaQuoteRight } from 'react-icons/fa';
import image3 from '../assets/image3.jpg';

function Review() {
  const testimonial = {
    name: 'Roy Ade',
    role: 'Client',
    avatar: image3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    rating: 5
  };

  const renderStars = (count) => {
    return [...Array(count)].map((_, i) => (
      <FaStar key={i} color="#FFD700" />
    ));
  };

  return (
    <section className="testimonial-hero-section">
      <div className="testimonial-hero-content">
        <h2>Nothing Secures you Better Than Us</h2>
        <div className="testimonial-hero-row">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <a href="#" className="testimonial-hero-link">Learn More &rarr;</a>
        </div>
      </div>
      <div className="testimonial-hero-right">
        <div className="testimonial-row-image">
          <img 
            src={image3} 
            alt="Security Camera" 
          />
        </div>
        <div className="testimonial-row-card">
          <div className="testimonial-row-stars">
            {renderStars(testimonial.rating)}
          </div>
          <div className="testimonial-row-text">
            {testimonial.text}
          </div>
          <div className="testimonial-row-client">
            <img 
              className="testimonial-row-avatar" 
              src={testimonial.avatar} 
              alt={testimonial.name} 
            />
            <div>
              <div className="testimonial-row-name">{testimonial.name}</div>
              <div className="testimonial-row-role">{testimonial.role}</div>
            </div>
          </div>
          <div className="testimonial-row-quote">
            <FaQuoteRight size={36} color="#fff" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review; 