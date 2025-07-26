function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <div className="newsletter-bg">
      <section className="newsletter-section-alt">
        <div className="newsletter-container">
          <div className="newsletter-left">
            <h2>Our Newsletters</h2>
            <p className="newsletter-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="newsletter-right">
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" required />
              <button type="submit">Submit Button</button>
            </form>
            <p className="newsletter-below-form">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Newsletter; 