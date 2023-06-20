import React from "react";
import { Link } from "gatsby";

const BlogGrid = ({ blogs }) => {
  return (
    <section className="blog-pg blog section-padding pt-0">
      <div className="container">
        <div className="posts">
          <div className="row">
            {
              blogs.map((blogItem) => (
                <div className="col-lg-4" key={blogItem.id}>
                  <div className="item mb-80 wow fadeInUp" data-wow-delay=".3s">
                    <div className="img">
                      <img src={blogItem.image} alt="" />
                    </div>
                    <div className="cont">
                      <div>
                        <div className="info">
                          <Link to="/blog/blog-dark" className="date">
                            <span>
                              <i>{blogItem.date.day}</i>
                              {blogItem.date.month}
                            </span>
                          </Link>
                          <span>/</span>
                          {
                            blogItem.tags.map((tag, index) => (
                              <Link key={index} to="/blog/blog-dark/" className="tag">
                                <span>{tag}</span>
                              </Link>
                            ))
                          }
                        </div>
                        <h5>
                          <Link to="/blog-details/blog-details-dark">
                            {blogItem.title.substr(0, 55) + "..."}
                          </Link>
                        </h5>
                        <div className="btn-more">
                          <Link to="/blog-details/blog-details-dark" className="simple-btn">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
            <div className="pagination">
              <span className="active">
                <Link to={`/blog/blog-dark`}>1</Link>
              </span>
              <span>
                <Link to={`/blog/blog-dark`}>2</Link>
              </span>
              <span>
                <Link to={`/blog/blog-blogwindow.theme}`}>
                  <i className="fas fa-angle-right"></i>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
