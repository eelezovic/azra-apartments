import React from "react";
import { Link } from "react-router-dom";
import styles from "../pages/Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <h1 className={styles.heading}>Contact</h1>
      <div className={styles.content}>
      <div className={styles.contactWrap}>
  <h2 className={styles.title}>Contact us</h2>
  <div className={styles.contactSection}>
    <div className={styles.phoneIcon}>
      <i className={"fa-solid fa-phone"}></i>
      <p>+382 69 299 745</p>
    </div>
    <div className={styles.contactIcons}>
      <div className={styles.envelopeIcon}>
        <a
          href="mailto:azraapartmani@gmail.com"
          className={styles.emailLink}
        >
          <i className={"fa fa-envelope"}></i>
        </a>
        <p>azraapartmani@gmail.com</p>
      </div>
      <div className={styles.contactIcon}>
        <Link
          className={styles.whatsappIcon}
          to="https://wa.me/38269299745"
          target="_blank"
          aria-label="WhatsApp"
        >
          <i className={"fa fa-whatsapp"} />
        </Link>
        
        <Link
          className={styles.viberIcon}
          to="viber://add?number=38269299745"
          target="_blank"
          aria-label="Viber"
        >
          <i className={"fa-brands fa-viber"} />
        </Link>
      </div>
    </div>
  </div>
</div>



        <div className={styles.mapSection}>
          <div className={styles.gmapFrame}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11879.660786087241!2d19.293369802552753!3d41.8946808510833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134e16c9d90627ff%3A0x1aa800368d0c1c65!2sApartments%20Azra!5e0!3m2!1sen!2sca!4v1686348372756!5m2!1sen!2sca"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
