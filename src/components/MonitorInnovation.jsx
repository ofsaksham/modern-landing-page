import image2 from '../assets/image2.jpg';

function MonitorInnovation() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const selectOptions = [
    { value: '', label: 'Select' },
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ];

  return (
    <section className="monitor-innovation-row-section">
      <div className="monitor-innovation-left">
        <img 
          src={image2} 
          alt="Camera" 
        />
      </div>
      <div className="monitor-innovation-center">
        <h2>Monitor the Workplace From your Phone</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
        </p>
        <button className="monitor-innovation-learn-btn">Learn More</button>
      </div>
      <div className="monitor-innovation-right">
        <form className="monitor-innovation-form" onSubmit={handleSubmit}>
          <h3>Latest Innovation</h3>
          <input type="email" placeholder="Email" required />
          <select>
            {selectOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <textarea placeholder="Message" rows={4}></textarea>
          <button type="submit">Submit Button</button>
        </form>
      </div>
    </section>
  );
}

export default MonitorInnovation; 