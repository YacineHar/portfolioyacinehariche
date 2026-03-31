import React, { useState } from "react";
import imageOverlay from "../img/background-bottom.jpeg";

const Comments = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem('portfolioComments');
    return savedComments ? JSON.parse(savedComments) : [];
  });
  const [userName, setUserName] = useState("");

  const projects = [
    { id: "projet1", name: "Puissance 4" },
    { id: "projet2", name: "Battlecats HTML5" },
    { id: "projet3", name: "Jeu GTA Ruby on Rails" },
    { id: "projet4", name: "Site Web Johneys" },
    { id: "projet5", name: "Assistant Virtuel Intelligent Johneys" }
  ];

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!selectedProject || !commentText.trim() || !userName.trim()) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const newComment = {
      id: Date.now(),
      projectId: selectedProject,
      projectName: projects.find(p => p.id === selectedProject)?.name,
      userName: userName,
      text: commentText,
      date: new Date().toLocaleDateString('fr-FR'),
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem('portfolioComments', JSON.stringify(updatedComments));
    
    setCommentText("");
    setUserName("");
    setSelectedProject("");
  };

  const filteredComments = selectedProject 
    ? comments.filter(comment => comment.projectId === selectedProject)
    : comments;

  const deleteComment = (commentId) => {
    const updatedComments = comments.filter(comment => comment.id !== commentId);
    setComments(updatedComments);
    localStorage.setItem('portfolioComments', JSON.stringify(updatedComments));
  };

  return (
    <section
      id="comments"
      className="comments-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Commentaires</h3>
              <p className="subtitle-a">
                Laissez un commentaire sur mes projets
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            {/* Formulaire de commentaire */}
            <div className="comment-form-box">
              <h4 className="mb-4">Ajouter un commentaire</h4>
              <form onSubmit={handleSubmitComment}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="userName">Votre nom *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="projectSelect">Choisir un projet *</label>
                      <select
                        className="form-control"
                        id="projectSelect"
                        value={selectedProject}
                        onChange={(e) => setSelectedProject(e.target.value)}
                        required
                      >
                        <option value="">Sélectionnez un projet</option>
                        {projects.map(project => (
                          <option key={project.id} value={project.id}>
                            {project.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="commentText">Votre commentaire *</label>
                  <textarea
                    className="form-control"
                    id="commentText"
                    rows="4"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Partagez votre avis sur ce projet..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Publier le commentaire
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            {/* Liste des commentaires */}
            <div className="comments-list">
              <h4 className="mb-4">Commentaires</h4>
              
              {filteredComments.length === 0 ? (
                <div className="text-center text-muted mt-4">
                  <p>Aucun commentaire pour le moment.</p>
                  <p>Soyez le premier à laisser un commentaire !</p>
                </div>
              ) : (
                <div className="comments-container" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                  {filteredComments.map(comment => (
                  <div key={comment.id} className="comment-item mb-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h6 className="card-subtitle mb-1 text-primary">
                            {comment.userName}
                          </h6>
                          <div className="d-flex align-items-center">
                            <small className="text-muted me-3">
                              {comment.date} à {comment.time}
                            </small>
                            <button
                              onClick={() => deleteComment(comment.id)}
                              className="btn btn-sm btn-outline-danger"
                              title="Supprimer ce commentaire"
                            >
                              <i className="ion-trash-a"></i>
                            </button>
                          </div>
                        </div>
                        <p className="card-text">{comment.text}</p>
                        <small className="text-info">
                          Projet : {comment.projectName}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
