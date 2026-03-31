import React from "react";
import imageOverlay from "../img/background-bottom.jpeg";

class Contact extends React.Component {
  render() {
      return (
    <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Me Contacter</h5>
                      </div>
                      <div>
                        <form
                          action="https://formspree.io/f/xjkoyqgr"
                          method="POST"
                          className="contactForm"
                        >
                          <div id="sendmessage" style={{ display: 'none' }}>
                            <div className="alert alert-success">
                              <i className="ion-checkmark"></i> Votre message a bien été envoyé !
                            </div>
                          </div>
                          <div id="errormessage" style={{ display: 'none' }}>
                            <div className="alert alert-danger">
                              <i className="ion-alert"></i> Une erreur s'est produite. Veuillez réessayer.
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Votre Nom"
                                  data-rule="minlen:4"
                                  data-msg="Veuillez entrer au minimum 4 caractères."
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Votre Email"
                                  data-rule="email"
                                  data-msg="Veuillez entrer un email valide."
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Objet"
                                  data-rule="minlen:4"
                                  data-msg="Veuillez entrer au moins 8 caractères."
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  placeholder="Votre Message"
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                Envoyer
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Mes réseaux</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Vous pouvez me suivre sur mes réseaux :
                          <br />
                        </p>
                        {/* <!-- <ul class="list-ico">
                                <li><span class="ion-ios-location"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                                <li><span class="ion-ios-telephone"></span> (617) 557-0089</li>
                                <li><span class="ion-email"></span> contact@example.com</li>
                                </ul> --> */}
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://www.instagram.com/yacine.har_/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            <span className="ico-circle">
                              <i className="ion-social-instagram"></i>
                            </span>

                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/YacineHar"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/yacinehariche/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="tel:+33767466580" data-title="+33 7 67 46 65 80">
                              <span className="ico-circle">
                                <i className="ion-ios-telephone"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                        <div className="cv-download text-center mt-4">
                        <a
                          href="/CV_Yacine_HARICHE.pdf"
                          download="CV_Yacine_Hariche.pdf"
                          className="button button-a button-big button-rouded"
                        >
                          <span className="ico-circle">
                            <i className="ion-ios-download"></i>
                          </span>
                          Télécharger Mon CV
                        </a>
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
    );
  }
}

export default Contact;
