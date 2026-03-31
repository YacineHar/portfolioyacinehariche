import React from "react";

//import stock
import puissance4_1 from "../img/Projets/Puissance_4/P4_1.png";
import jeuHTML5_1 from "../img/Projets/Jeu_HTML5/battlecats_1.png";
import jeuHTML5_2 from "../img/Projets/Jeu_HTML5/battlecats_2.png";
import jeuHTML5_3 from "../img/Projets/Jeu_HTML5/battlecats_3.png";
import gta_1 from "../img/Projets/Jeu_GTA_Ruby_on_Rails/gta_1.png";
import gta_2 from "../img/Projets/Jeu_GTA_Ruby_on_Rails/gta_2.png";
import gta_3 from "../img/Projets/Jeu_GTA_Ruby_on_Rails/gta_3.png";
import gta_4 from "../img/Projets/Jeu_GTA_Ruby_on_Rails/gta_4.png";
import gta_5 from "../img/Projets/Jeu_GTA_Ruby_on_Rails/gta_5.png";
import gta_6 from "../img/Projets/Jeu_GTA_Ruby_on_Rails/gta_6.png";
import gta_7 from "../img/Projets/Jeu_GTA_Ruby_on_Rails/gta_7.png";
import bot_1 from "../img/Projets/Bot_WhatsApp_Johneys/bot_WA_1.png";
import bot_2 from "../img/Projets/Bot_WhatsApp_Johneys/bot_WA_2.png";
import bot_3 from "../img/Projets/Bot_WhatsApp_Johneys/bot_WA_3.png";
import bot_4 from "../img/Projets/Bot_WhatsApp_Johneys/bot_WA_4.png";
import bot_5 from "../img/Projets/Bot_WhatsApp_Johneys/bot_WA_5.png";
import johneys_1 from "../img/Projets/Site_Web_JOHNEYS/johneys_1.png";
import johneys_2 from "../img/Projets/Site_Web_JOHNEYS/johneys_2.png";
import johneys_3 from "../img/Projets/Site_Web_JOHNEYS/johneys_3.png";
import johneys_4 from "../img/Projets/Site_Web_JOHNEYS/johneys_4.png";
import johneys_5 from "../img/Projets/Site_Web_JOHNEYS/johneys_5.png";
import johneys_6 from "../img/Projets/Site_Web_JOHNEYS/johneys_6.png";
import guesswhat_1 from "../img/Projets/GuessWhat/GuessWhat_1.png";
import guesswhat_2 from "../img/Projets/GuessWhat/GuessWhat_2.png";
import guesswhat_3 from "../img/Projets/GuessWhat/GuessWhat_3.png";
import guesswhat_4 from "../img/Projets/GuessWhat/GuessWhat_4.png";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImageIndex: {}
    };
  }

  componentDidMount() {
    // Injecter les liens GitHub dans la lightbox
    this.injectGitHubLinks();
  }

  componentDidUpdate() {
    // Injecter les liens GitHub dans la lightbox après chaque mise à jour
    this.injectGitHubLinks();
  }

  injectGitHubLinks = () => {
    // Attendre que la lightbox soit chargée
    setTimeout(() => {
      const lightboxData = document.querySelector('.lb-data');
      if (lightboxData && !lightboxData.querySelector('.lb-github')) {
        // Créer le lien GitHub
        const githubLink = document.createElement('a');
        githubLink.className = 'lb-github';
        githubLink.href = '#';
        githubLink.onclick = (e) => {
          e.preventDefault();
          // Déterminer quel projet est actuellement affiché
          const currentImage = document.querySelector('.lb-image');
          if (currentImage) {
            const src = currentImage.src;
            let githubUrl = '';
            
            // Déterminer le projet basé sur l'image
            if (src.includes('P4_1.png')) {
              githubUrl = 'https://github.com/YacineHar/Puissance4.git';
            } else if (src.includes('battlecats')) {
              githubUrl = 'https://github.com/YacineHar/Battlecats-HTML5.git';
            } else if (src.includes('gta_')) {
              githubUrl = 'https://github.com/YacineHar/Jeu-GTA-Ruby-on-Rails.git';
            }
            
            if (githubUrl) {
              window.open(githubUrl, '_blank');
            }
          }
        };
        
        // Insérer le lien GitHub à la place du bouton de fermeture
        const closeButton = lightboxData.querySelector('.lb-close');
        if (closeButton) {
          closeButton.parentNode.insertBefore(githubLink, closeButton);
        }
      }
    }, 100);
  };

  navigateGallery = (galleryName, direction) => {
    // Cette méthode sera utilisée pour naviguer dans les galeries
    // Pour l'instant, on utilise lightbox qui gère automatiquement la navigation
    console.log(`Navigating ${galleryName} with direction ${direction}`);
  };

  // Méthode pour ouvrir le lien GitHub
  openGitHub = (url) => {
    window.open(url, '_blank');
  };

  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Mes Projets</h3>
                <p className="subtitle-a">
                Voici quelques-uns de mes projets :
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={puissance4_1} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={puissance4_1} alt="Puissance 4" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Puissance 4</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          JavaScript, HTML
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like github-icon" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open('https://github.com/YacineHar/Puissance4.git', '_blank');
                      }}>
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={puissance4_1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={jeuHTML5_1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={jeuHTML5_1} alt="Jeu HTML5" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Battlecats HTML5</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          HTML5, JavaScript, CSS
                        </span>{" "}
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like github-icon" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open('https://github.com/YacineHar/Battlecats-HTML5.git', '_blank');
                      }}>
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={jeuHTML5_2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={jeuHTML5_3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={gta_1} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={gta_1} alt="Jeu GTA Ruby on Rails" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Jeu GTA Ruby on Rails</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Ruby on Rails, React, SQLite
                        </span>
                        {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like github-icon" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open('https://github.com/YacineHar/Jeu-GTA-Ruby-on-Rails.git', '_blank');
                      }}>
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={gta_2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={gta_3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={gta_4}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={gta_5}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={gta_6}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={gta_7}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={johneys_1} data-lightbox="gallery-johneys">
                  <div className="work-img">
                    <img src={johneys_1} alt="Site Web Johneys" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Site Web Johneys</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          WordPress, PHP, JavaScript
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like custom-icon" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open('https://johneys.com/', '_blank');
                      }}>
                        <span className="ion-earth"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={johneys_2}
                  data-lightbox="gallery-johneys"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={johneys_3}
                  data-lightbox="gallery-johneys"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={johneys_4}
                  data-lightbox="gallery-johneys"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={johneys_5}
                  data-lightbox="gallery-johneys"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={johneys_6}
                  data-lightbox="gallery-johneys"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={bot_1} data-lightbox="gallery-bot">
                  <div className="work-img">
                    <img src={bot_1} alt="Assistant Virtuel Intelligent Johneys" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Assistant Virtuel Intelligent Johneys</h2>
                      <div className="w-more">
                        <span className="w-ctegory">PHP, Python, Ollama IA</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like custom-icon" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open('https://api.whatsapp.com/send/?phone=237651587137&text&type=phone_number&app_absent=0', '_blank');
                      }}>
                        <span className="ion-social-whatsapp"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={bot_2}
                  data-lightbox="gallery-bot"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={bot_3}
                  data-lightbox="gallery-bot"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={bot_4}
                  data-lightbox="gallery-bot"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={bot_5}
                  data-lightbox="gallery-bot"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={guesswhat_1} data-lightbox="gallery-guesswhat">
                  <div className="work-img">
                    <img src={guesswhat_1} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">GuessWhat</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          GO, HTML5, JavaScript
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open('https://github.com/YacineHar/GuessWhat', '_blank');
                      }}>
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={guesswhat_2}
                  data-lightbox="gallery-guesswhat"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={guesswhat_3}
                  data-lightbox="gallery-guesswhat"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={guesswhat_4}
                  data-lightbox="gallery-guesswhat"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Portfolio