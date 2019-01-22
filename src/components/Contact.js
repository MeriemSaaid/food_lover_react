import React from 'react'

export default function Contact() {
  return (
    <div>
      <form>
    
  <section className="contact">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="contact-map box">
            <div id="map" className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.6868084692733!2d-71.08501898454476!3d42.32787837918902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a307f4c2e1d%3A0x9d13b52f5a486d1e!2sUrban+League+of+Eastern+Massachusetts+(ULEM)!5e0!3m2!1sen!2sus!4v1547671600068" style={{border:0, frameborder:0, width:600, height: 450 }} allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="col-sm-12 section-t8">
          <div className="row">
            <div className="col-md-7">
              <form className="form-a contactForm" action="" method="post" role="form">
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div class="form-group">
                      <input type="text" name="name" className="form-control form-control-lg form-control-a" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                      <div className="validation"></div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <input name="email" type="email" className="form-control form-control-lg form-control-a" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
                      <div className="validation"></div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <input type="url" name="subject" className="form-control form-control-lg form-control-a" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"/>
                      <div className="validation"></div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <textarea name="message" className="form-control" name="message" cols="45" rows="8" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                      <div className="validation"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button type="submit"className="btn btn-a">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-5 section-md-t3">
              <div className="icon-box section-b2">
                <div className="icon-box-icon">
                <i className="fas fa-paper-plane"></i> 
                </div>
                <div className="icon-box-content table-cell">
                  <div className="icon-box-title">
                    <h4 className="icon-title">Say Hello</h4>
                  </div>
                  <div className="icon-box-content">
                    <p className="mb-1">Email.
                      <span className="color-a">msimbo2018@gmail.com</span>
                    </p>
                    <p className="mb-1">Phone.
                      <span className="color-a">+1 800 222 1212</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="icon-box section-b2">
                <div className="icon-box-icon">
                <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="icon-box-content table-cell">
                  <div className="icon-box-title">
                    <h4 className="icon-title">Find us in</h4>
                  </div>
                  <div className="icon-box-content">
                    <p className="mb-1">
                      Roxbury, MA 02119,
                      <br/> U.S.A.
                    </p>
                  </div>
                </div>
              </div>
              <div className="icon-box">
                <div className="icon-box-icon">
                <i className="fas fa-share"></i>
                </div>
                <div className="icon-box-content table-cell">
                  <div className="icon-box-title">
                    <h4 className="icon-title">Social network</h4>
                  </div>
                  <div className="icon-box-content">
                    <div className="socials-footer">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="https://www.fb.me/foodloverrecipe" className="link-one">
                            <i className="fa fa-facebook" aria-hidden="true"/>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </form>
    </div>
  )
}
