import { FiZap, FiAward, FiCheckCircle, FiStar } from 'react-icons/fi';

function FeatureHighlights() {
  const features = [
    { icon: <FiZap />, title: 'Innovation', desc: 'Lorem ipsum dolor sit amet consectetur.' },
    { icon: <FiStar />, title: 'High Quality', desc: 'Lorem ipsum dolor sit amet consectetur.' },
    { icon: <FiCheckCircle />, title: 'Best Product', desc: 'Lorem ipsum dolor sit amet consectetur.' },
    { icon: <FiAward />, title: 'Top Services', desc: 'Lorem ipsum dolor sit amet consectetur.' },
  ];
  return (
    <div className="feature-highlights">
      {features.map((f, i) => (
        <div className={`feature-highlight-card${i === 2 ? ' active' : ''}`} key={i}>
          <div className="feature-highlight-icon">{f.icon}</div>
          <div className="feature-highlight-title">{f.title}</div>
          <div className="feature-highlight-desc">{f.desc}</div>
        </div>
      ))}
    </div>
  );
}

export default FeatureHighlights; 