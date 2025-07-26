import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Navbar() {
  const navLinks = [
    { text: 'Home', href: '#' },
    { text: 'About Us', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Pages', href: '#working-process-section' },
    { text: 'Contact Us', href: '#footer-section' }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaLinkedinIn />, href: '#' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">SecuTrust</div>
      <ul className="navbar-links">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
      <div className="navbar-social">
        {socialLinks.map((social, index) => (
          <a key={index} href={social.href} className="navbar-social-icon">
            {social.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar; 