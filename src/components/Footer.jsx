import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationLinks = [
    { text: 'Home', action: scrollToTop },
    { text: 'Pages', action: e => e.preventDefault() },
    { text: 'About Us', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: '404', action: e => e.preventDefault() }
  ];

  const quickLinks = [
    { text: 'Contact Us', action: e => e.preventDefault() },
    { text: 'FAQs', action: e => e.preventDefault() },
    { text: 'Blog', action: e => e.preventDefault() },
    { text: 'Gallery', action: e => e.preventDefault() },
    { text: 'Pricing', action: e => e.preventDefault() }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaYoutube />, href: '#' }
  ];

  return (
    <footer className="footer-section" id="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <p className="footer-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  {link.href ? (
                    <a href={link.href}>{link.text}</a>
                  ) : (
                    <a href="#" onClick={link.action}>{link.text}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick Link</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" onClick={link.action}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Work Hours</h4>
            <ul>
              <li>7 AM - 5 PM, Mon - Sat</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
            <button className="footer-call-btn">📞 Call Us</button>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <span>© 2025 Saksham. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer; 