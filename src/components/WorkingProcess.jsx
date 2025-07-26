function WorkingProcess() {
  const steps = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#223354"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="22" dy=".3em">👥</text></svg>
      ),
      title: 'Discussion',
      desc: 'Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo lorem.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#223354"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="22" dy=".3em">⚙️</text></svg>
      ),
      title: 'Installation',
      desc: 'Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo lorem.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#223354"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="22" dy=".3em">👷‍♂️</text></svg>
      ),
      title: 'Maintenance',
      desc: 'Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo lorem.'
    },
  ];
  return (
    <section className="working-process-section" id="working-process-section">
      <h2>Our Working Process</h2>
      <div className="working-process-list">
        {steps.map((s, i) => (
          <div className="working-process-step" key={i}>
            <div className="working-process-icon-wrap">{s.icon}</div>
            <div className={`working-process-card${i === 1 ? ' active' : ''}`}> 
              <div className="working-process-title">{s.title}</div>
              <div className="working-process-desc">{s.desc}</div>
            </div>
            {i < steps.length - 1 && (
              <div className="working-process-arrow">
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none"><path d="M2 12h36m0 0l-6-6m6 6l-6 6" stroke="#223354" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkingProcess; 