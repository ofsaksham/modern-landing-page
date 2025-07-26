function Partners() {
  const partnerLogos = ['Logoipsum', 'Logoipsum', 'Logoipsum'];

  return (
    <section className="partners-section">
      <div className="partners-info">
        <h3>Our Partners</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
          luctus nec ullamcorper mattis pulvinar.
        </p>
      </div>
      <div className="partners-logos">
        {partnerLogos.map((logo, index) => (
          <div key={index} className="partner-logo-text">
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners; 