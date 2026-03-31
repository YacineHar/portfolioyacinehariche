import React from "react";
import plongee from "../img/plongée.jpg";
import hardware from "../img/hardware.jpg";
import anime from "../img/anime.jpg";
import musique from "../img/musique.jpg";
import gaming from "../img/gaming.jpg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        { id: "JavaScript_skill", content: "JavaScript", porcentage: "90%", value: "90" },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        { id: "ReactJS_skill", content: "ReactJS", porcentage: "80%", value: "80" },
        { id: "Python_skill", content: "Python", porcentage: "75%", value: "75" },
        { id: "VanillaJS_skill", content: "VanillaJS", porcentage: "85%", value: "85" },
        { id: "Wordpress_skill", content: "Wordpress", porcentage: "80%", value: "80" }
      ],
      about_me: [
        { id: "first-p-about", content: "Je suis un étudiant en développement web chez Epitech, cursus web@cadémie" },
        { id: "second-p-about", content: "Actuellement en alternance chez Trusted en tant que développeur web jusqu'au 14 Novembre 2025" },
        { id: "third-p-about", content: "Passionné par la programmation, j’ai développé une affinité particulière pour le développement backend. Toujours en quête d’apprentissage, je m’intéresse également aux technologies cloud, à la data et à la sécurité des applications." }
      ],
      formations: [
        { id: "webacademie", title: "WEB@CADÉMIE - EPITECH", year: "2023-2024", description: "Formation immersive Bac+2 en développement web." },
        { id: "42", title: "42", year: "2023", description: "Piscine immersive de 4 semaines en Langage C." },
        { id: "cnam", title: "CNAM", year: "2023", description: "Formation au CNAM de Bretagne en langage C/C++." },
        { id: "lycee", title: "Lycée Blanche de Castille", year: "2017 - 2020", description: "Baccalauréat : Filière scientifique, spécialité mathématique." }
      ],
      interests: [
        { id: "diving", name: "Plongée", image: plongee },
        { id: "hardware", name: "Hardware", image: hardware },
        { id: "pop_culture", name: "Pop culture / Animation", image: anime },
        { id: "music", name: "Musique", image: musique },
        { id: "gaming", name: "Jeux-Vidéo", image: gaming }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  {/* À PROPOS DE MOI */}
                  <div className="col-md-6 about-section">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">À propos de moi</h5>
                      </div>
                      {this.state.about_me.map(content => (
                        <p className="lead about-text" key={content.id}>{content.content}</p>
                      ))}
                    </div>
                  </div>

                  {/* COMPÉTENCES */}
                  <div className="col-md-6 skills-section">
                    <div className="skill-mf">
                      <h5 className="section-title">Compétences</h5>
                      {this.state.skills.map(skill => (
                        <React.Fragment key={skill.id}>
                          <span>{skill.content}</span>
                          <span className="pull-right">{skill.porcentage}</span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: skill.porcentage }}
                              aria-valuenow={skill.value}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SECTION MES FORMATIONS */}
                <div className="row">
                  <div className="col-md-12 formation-section">
                    <div className="title-box-2">
                      <h5 className="title-left">Mes Formations</h5>
                    </div>
                    <ul className="list-group formation-list">
                      {this.state.formations.map(formation => (
                        <li key={formation.id} className="list-group-item formation-item">
                          <h6 className="formation-title">
                            {formation.title} <span className="formation-year">({formation.year})</span>
                          </h6>
                          <p className="formation-description">{formation.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div> 

                {/* SECTION INTÉRÊTS & LOISIRS */}
                <div className="row">
                  <div className="col-md-12 interests-section">
                    <div className="title-box-2">
                      <h5 className="title-left">Intérêts & Loisirs</h5>
                    </div>
                    <div className="interests-list d-flex flex-wrap justify-content-center">
                      {this.state.interests.map(interest => (
                        <div key={interest.id} className="interest-item">
                          <div className="interest-bg" style={{
                            backgroundImage: `url(${interest.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                          }}></div>
                          <p className="interest-name">{interest.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Fin section intérêts */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;