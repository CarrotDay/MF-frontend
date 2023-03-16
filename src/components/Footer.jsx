import React from 'react'

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-04 p-5">
        <div className="container">
          <div className="row text-left">
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading">
                <a href="#" className="logo">
                  <img src="/Uploads/img/logo/1_white.png" alt="" />
                </a>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              </p>
            </div>
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading">Sản phẩm</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-1 d-block">Manga</a></li>
                <li><a href="#" className="py-1 d-block">Figure</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading">Thể loại</h2>
              <div className="tagcloud">
                <a href="#" className="tag-cloud-link">Trinh thám</a>
                <a href="#" className="tag-cloud-link">Viễn tưởng</a>
                <a href="#" className="tag-cloud-link">Kinh dị</a>
                <a href="#" className="tag-cloud-link">Isekai</a>
                <a href="#" className="tag-cloud-link">Học đường</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading">Follow us</h2>
              <ul className="footer-social p-0">
                <li className="ftco-animate">
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter">
                    <span>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook">
                    <span>
                      <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#" data-toggle="tooltip" data-placement="top"itle="Instagram">
                    <span>
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
