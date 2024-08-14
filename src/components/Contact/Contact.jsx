import React from "react";
import { getImageURL } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out !</p>
        <span>Marcin Ratajczak Copyright ©</span>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageURL("contact/emailIcon.png")} alt="email icon" />
          <a href="mailto:maratajczak@gmail.com">maratajczak@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageURL("contact/linkedinIcon.png")}
            alt="linkedin icon"
          />
          <a href="https://www.linkedin.com/in/marcin-ratajczak-870439117">
            linkedin.com/marcin-ratajczak
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageURL("contact/githubIcon.png")} alt="github icon" />
          <a href="https://github.com/Allucard79/">github.com/Allucard79</a>
        </li>
      </ul>
    </footer>
  );
};
