import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

function Blog() {
  const blogs = [
    {
      img: image1,
      title: 'Security solutions',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      date: '26 Jan',
      category: 'Uncategorized'
    },
    {
      img: image2,
      title: 'Monitor the workplace',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      date: '26 Jan',
      category: 'Uncategorized'
    },
    {
      img: image3,
      title: 'Why choose securez',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      date: '26 Jan',
      category: 'Uncategorized'
    }
  ];

  const formatDate = (dateStr) => {
    const [day, month] = dateStr.split(' ');
    return { day, month };
  };

  return (
    <section className="blog-section">
      <h2>Blog & Article</h2>
      <p className="blog-section-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className="blog-list">
        {blogs.map((blog, index) => {
          const { day, month } = formatDate(blog.date);
          return (
            <div key={index} className="blog-card">
              <div className="blog-img-wrap">
                <img src={blog.img} alt={blog.title} />
                <span className="blog-date-circle">
                  <span className="blog-date-day">{day}</span>
                  <span className="blog-date-month">{month}</span>
                </span>
              </div>
              <div className="blog-meta">
                <span className="blog-category">{blog.category}</span>
              </div>
              <div className="blog-title">{blog.title}</div>
              <div className="blog-desc">{blog.desc}</div>
              <a href="#" className="blog-read" onClick={e => e.preventDefault()}>
                Learn more
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Blog; 