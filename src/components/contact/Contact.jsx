import "./contact.scss";

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react'

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_8rbou2d', 'template_p1d7x1a', formRef.current, {
            publicKey: 'MzqOcc1DjBDDFkBgP',
          })
          .then(
            (result) => {
              setSuccess(true);
              setError(false); //reset de l'error
            }, (error) => {
              setError(true);
              setSuccess(false); //reset du success
            }
          );
      };

    return (
      <div className="contactContainer">
        <h2 className="h2contact">Contactez-moi</h2>
        <div className="contact">
              <div className="textContainer">
                  <p>Envie d'en savoir plus? Envoyez-moi quelques lignes pour qu'on en discute.</p>
                  <div className="item">
                      <h3>Mail</h3>
                      <span>sandie.emonts@gmail.com</span>
                  </div>
                  <div className="item">
                      <h3>Adresse</h3>
                      <span>Bordeaux</span>
                  </div>
              </div>
              <div className="formContainer">
                  <form ref={formRef} onSubmit={sendEmail}>
                      <input type="text" required placeholder="Nom" name="name"/>
                      <input type="email" required placeholder="Email" name="email"/>
                      <textarea rows={8} placeholder="Message" name="message"></textarea>
                      <button>Envoyer</button>
                      {error && <p className="error">Une erreur est survenue. Veuillez réessayer.</p>}
                      {success && <p className="success">Votre message a bien été envoyé.</p>}
                  </form>
              </div>
        </div>
      </div>
    )
}

export default Contact